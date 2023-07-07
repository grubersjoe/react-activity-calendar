import { Tooltip as MuiTooltip } from '@mui/material';
import LinkTo from '@storybook/addon-links/react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { eachDayOfInterval, formatISO, lastDayOfMonth } from 'date-fns';
import React, { cloneElement } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { useDarkMode } from 'storybook-dark-mode';

import CodeBlock from '../../.storybook/components/CodeBlock';
import Container from '../../.storybook/components/Container';
import { DEFAULT_MONTH_LABELS, DEFAULT_WEEKDAY_LABELS, LEVEL_COUNT } from '../constants';
import { Activity, Level, Theme } from '../types';
import ActivityCalendar, { Props } from './ActivityCalendar';

type Story = StoryObj<Props>;

const meta: Meta<Props> = {
  title: 'React Activity Calendar',
  component: ActivityCalendar,
  decorators: [
    (Story, { args, viewMode }) => {
      const darkMode = useDarkMode();

      if (viewMode === 'story') {
        args.colorScheme = darkMode ? 'dark' : 'light';
      } else {
        args.colorScheme = 'light';
      }

      return <Story />;
    },
  ],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    layout: 'centered',
  },
  argTypes: {
    data: {
      control: false,
    },
    blockMargin: {
      control: { type: 'range', min: 0, max: 20 },
    },
    blockRadius: {
      control: { type: 'range', min: 0, max: 20 },
    },
    blockSize: {
      control: { type: 'range', min: 4, max: 100, step: 2 },
    },
    colorScheme: {
      control: false,
    },
    fontSize: {
      control: { type: 'range', min: 6, max: 32, step: 2 },
    },
    style: {
      control: false,
    },
    weekStart: {
      options: [0, 1, 2, 3, 4, 5, 6],
      control: {
        type: 'select',
        labels: {
          0: 'Sunday (0)',
          1: 'Monday (1)',
          2: 'Tuesday (2)',
          3: 'Wednesday (3)',
          4: 'Thursday (4)',
          5: 'Friday (5)',
          6: 'Saturday (6)',
        },
      },
    },
  },
};

const TemplateTheme: StoryFn<Props> = args => (
  <Container>
    <h1>Themes</h1>
    <ActivityCalendar {...args} style={{ margin: '2rem 0' }} />

    <h2>Usage</h2>
    <p>
      Use the <code>theme</code> prop to set the calendar colors for the light and dark{' '}
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme">
        system color scheme
      </a>
      . The color scale for at least one color scheme needs to be specified. For undefined values,
      the default theme is selected. By default, the calendar will use the currently set system
      color scheme, but you can enforce a specific color scheme with the{' '}
      <a href="/?path=/docs/react-activity-calendar--docs">
        <code>colorScheme</code>
      </a>{' '}
      prop.
    </p>
    <p>
      Define each color scale{' '}
      <LinkTo kind="react-activity-calendar" name="with-explicit-theme">
        explicitly
      </LinkTo>{' '}
      with five colors or pass exactly two colors (lowest and highest intensity) to calculate a
      single-hue scale. Colors can be specified in any valid CSS format.
    </p>
    <CodeBlock>
      {`import ActivityCalendar, {ThemeInput} from "react-activity-calendar";

const minimalTheme: ThemeInput = {
  light: ['hsl(0, 0%, 92%)', 'rebeccapurple'],
  // dark: the default theme will be used as fallback
}

<ActivityCalendar data={data} theme={minimalTheme} /> 

const explicitTheme: ThemeInput = {
  light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
  dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
}; 

<ActivityCalendar data={data} theme={explicitTheme} /> 
`}
    </CodeBlock>
  </Container>
);

const TemplateExplicitTheme: StoryFn<Props> = args => (
  <Container>
    <h1>Explicit theme</h1>
    <p></p>
    <p>
      See the{' '}
      <LinkTo kind="react-activity-calendar" name="with-theme">
        WithTheme
      </LinkTo>{' '}
      story for details how to use the <code>theme</code> prop.
    </p>
    <ActivityCalendar {...args} style={{ margin: '2rem 0' }} />
  </Container>
);

const TemplateTooltips: StoryFn<Props> = args => (
  <Container>
    <h1>Tooltip Examples</h1>
    <p>
      To add a 3rd party tooltip component to the calendar you can use the <code>renderBlock</code>{' '}
      property.
    </p>
    <h2>
      <a href="https://mui.com/material-ui/react-tooltip/">Material UI</a>
    </h2>
    <p>
      In the simplest case, each block only needs to be wrapped with a <code>&lt;Tooltip/&gt;</code>{' '}
      component, as shown here for Material UI:
    </p>
    <CodeBlock>
      {`import { Tooltip as MuiTooltip } from '@mui/material';

<ActivityCalendar
  data={myData}
  renderBlock={(block, activity) => (
    <MuiTooltip title={\`\${activity.count} activities on \${activity.date}\`}>
      {block}
    </MuiTooltip>
  )}
/>`}
    </CodeBlock>
    <ActivityCalendar
      {...args}
      renderBlock={(block, activity) => (
        <MuiTooltip title={`${activity.count} activities on ${activity.date}`}>{block}</MuiTooltip>
      )}
    />
    <h2>
      <a href="https://github.com/ReactTooltip/react-tooltip">react-tooltip</a>
    </h2>
    <p>
      Some libraries, like <code>react-tooltip</code>, require that additional props are passed to
      the block elements. You can achieve this using the <code>React.cloneElement</code> function:
    </p>
    <CodeBlock>
      {`import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

<ActivityCalendar
  data={myData}
  renderBlock={(block, activity) =>
    React.cloneElement(block, {
      'data-tooltip-id': 'react-tooltip',
      'data-tooltip-html': \`\${activity.count} activities on \${activity.date}\`,
    })
  }
/>
<ReactTooltip id="react-tooltip" />`}
    </CodeBlock>
    <ActivityCalendar
      {...args}
      renderBlock={(block, activity) =>
        cloneElement(block, {
          'data-tooltip-id': 'react-tooltip',
          'data-tooltip-html': `${activity.count} activities on ${activity.date}`,
        })
      }
    />
    <ReactTooltip id="react-tooltip" />
  </Container>
);

const TemplateLocalized: StoryFn<Props> = args => (
  <Container>
    <h1>Localization</h1>
    <p>(Example in German)</p>
    <ActivityCalendar {...args} style={{ margin: '2rem 0' }} />
    <CodeBlock>
      {`// Shape of \`labels\` property (default values).
// All properties are optional.

const labels = {
  months: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  weekdays: [
    'Sun', // Sunday first!
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ],
  totalCount: '{{count}} activities in {{year}}',
  legend: {
    less: 'Less',
    more: 'More',
  },
};
`}
    </CodeBlock>
  </Container>
);

const TemplateEventHandlers: StoryFn<Props> = args => (
  <Container>
    <h1>Event Handlers</h1>
    <p>
      You can register event handlers for the SVG <code>&lt;rect/&gt;</code> elements that are used
      to render the calendar days. This way you can control the behaviour on click, hover, etc. All
      event listeners have the following signature, so you can use the activity data of the block
      inside the handler:
    </p>
    <CodeBlock>
      {`(event: React.SyntheticEvent) => (data: Activity) => void
      
interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}`}
    </CodeBlock>
    <p>Click on any block below to see it in action:</p>
    <ActivityCalendar {...args} style={{ margin: '2rem 0' }} />
    <CodeBlock>
      {`<ActivityCalendar 
  data={data}  
  eventHandler={{
    onClick: event => activity => {
      console.log({ event, activity });
      alert(JSON.stringify(activity, null, 4));
    },
    onMouseEnter: event => activity => console.log('mouseEnter'),
  }}
/>
`}
    </CodeBlock>
  </Container>
);

export default meta;

const explicitTheme: Theme = {
  light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
  dark: ['hsl(0, 0%, 22%)', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
};

const labels = {
  months: DEFAULT_MONTH_LABELS,
  weekdays: DEFAULT_WEEKDAY_LABELS,
  totalCount: '{{count}} activities in {{year}}',
  legend: {
    less: 'Less',
    more: 'More',
  },
};

export const Default: Story = {
  args: {
    data: generateData(),
    labels,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    data: generateData(),
    labels,
  },
};

export const WithTheme: Story = {
  render: TemplateTheme,
  args: {
    data: generateData(),
    theme: {
      light: ['hsl(0, 0%, 92%)', 'rebeccapurple'],
      dark: ['hsl(0, 0%, 22%)', 'hsl(225,92%,77%)'],
    },
    labels,
  },
};

export const WithExplicitTheme: Story = {
  render: TemplateExplicitTheme,
  args: {
    data: generateData(),
    theme: explicitTheme,
    labels,
  },
};

export const WithCustomizedLook: Story = {
  args: {
    data: generateData(),
    blockSize: 14,
    blockRadius: 7,
    blockMargin: 5,
    fontSize: 16,
    theme: explicitTheme,
    labels,
  },
};

export const WithMondayAsWeekStart: Story = {
  args: {
    data: generateData(),
    weekStart: 1,
    labels,
  },
};

export const WithSpecificDateRange: Story = {
  args: {
    data: generateData(2, 7),
    labels,
  },
};

export const WithTooltips: Story = {
  render: TemplateTooltips,

  args: {
    data: generateData(),
  },
};

export const WithoutLabels: Story = {
  args: {
    data: generateData(),
    hideMonthLabels: true,
    hideColorLegend: true,
    hideTotalCount: true,
    labels,
  },
};

export const WithDayLabels: Story = {
  args: {
    data: generateData(),
    showWeekdayLabels: true,
    labels,
  },
};

export const WithLocalizedLabels: Story = {
  render: TemplateLocalized,
  args: {
    data: generateData(),
    showWeekdayLabels: true,
    labels: {
      months: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
      weekdays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
      totalCount: '{{count}} Aktivitäten in {{year}}',
      legend: {
        less: 'Weniger',
        more: 'Mehr',
      },
    },
  },
};

const eventHandlerData = generateData();

export const EventHandlers: Story = {
  render: TemplateEventHandlers,
  args: {
    data: eventHandlerData,
    eventHandlers: {
      onClick: event => activity => {
        console.log({ event, activity });
        alert(JSON.stringify(activity, null, 4));
      },
    },
  },
};

const layerTheme = Object.assign({}, explicitTheme);
layerTheme.layers = {
  layer_0: '#39d353',
  layer_1: '#2a2b59',
};

const layerLabels = {
  ...labels,
  totalCount: '{{count}} activities on 2 platform in {{year}}'
}

export const WithLayers: Story = {
  args: {
    data: generateData(0, 11, 2),
    labels: layerLabels,
    theme: layerTheme,
  },
};

export const WithLoadingLayers: Story = {
  args: {
    loading: true,
    data: generateData(0, 11, 2),
    labels,
    theme: layerTheme,
  },
};

function generateData(monthStart = 0, monthEnd = 11, layer = 0): Array<Activity> {
  const MAX = 10;

  const yearStart = new Date().getFullYear();
  const yearEnd = monthEnd < monthStart ? yearStart + 1 : yearStart;

  const days = eachDayOfInterval({
    start: new Date(yearStart, monthStart, 1),
    end: lastDayOfMonth(new Date(yearEnd, monthEnd, 1)),
  });

  return days.map(date => {
    const count = Math.max(0, Math.round(Math.random() * MAX - Math.random() * (0.8 * MAX)));
    const level = Math.ceil(count / (MAX / (LEVEL_COUNT - 1))) as Level;

    const layers = Array(layer)
      .fill(0)
      .reduce((prev, curr, idx) => {
        if (!prev) {
          prev = {};
        }
        prev[`layer_${idx}`] = Math.max(
          0,
          Math.round(Math.random() * MAX - Math.random() * (0.8 * MAX)),
        );
        return prev;
      }, undefined);

    return {
      date: formatISO(date, { representation: 'date' }),
      count,
      level,
      layers,
    };
  });
}
