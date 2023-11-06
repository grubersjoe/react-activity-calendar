import { Tooltip as MuiTooltip } from '@mui/material';
import LinkTo from '@storybook/addon-links/react';
import { Source as StorybookSource } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { eachDayOfInterval, formatISO, lastDayOfMonth } from 'date-fns';
import React, { cloneElement } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { useDarkMode } from 'storybook-dark-mode';

import Container from '../../.storybook/components/Container';
import exampleCustomized from '../../examples/customization?raw';
import exampleEventHandlersInterface from '../../examples/event-handlers-type?raw';
import exampleEventHandlers from '../../examples/event-handlers?raw';
import exampleLabelsShape from '../../examples/labels-shape?raw';
import exampleLabels from '../../examples/labels?raw';
import exampleThemeExplicit from '../../examples/themes-explicit?raw';
import exampleTheme from '../../examples/themes?raw';
import exampleTooltipsMui from '../../examples/tooltips-mui?raw';
import exampleTooltipsReact from '../../examples/tooltips-react?raw';
import { LEVEL_COUNT } from '../constants';
import { Level, Theme } from '../types';
import ActivityCalendar, { Props } from './ActivityCalendar';

type Story = StoryObj<Props>;

const meta: Meta<Props> = {
  title: 'React Activity Calendar',
  component: ActivityCalendar,
  decorators: [
    (Story, { args }) => {
      args.colorScheme = useDarkMode() ? 'dark' : 'light';

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
      control: { type: 'range', min: 4, max: 30, step: 1 },
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

// Storybook does not initialize the controls for some reason
const defaultProps = {
  data: generateData(),
  blockMargin: 4,
  blockRadius: 2,
  blockSize: 12,
  fontSize: 14,
  hideColorLegend: false,
  hideMonthLabels: false,
  hideTotalCount: false,
  loading: false,
  showWeekdayLabels: false,
  weekStart: 0, // Sunday
} satisfies Props;

export default meta;
const explicitTheme: Theme = {
  light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
  dark: ['hsl(0, 0%, 22%)', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
};

export const Default: Story = {
  args: defaultProps,
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} />',
      },
    },
  },
};

export const Loading: Story = {
  args: {
    ...defaultProps,
    loading: true,
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} loading />',
      },
    },
  },
};

export const WithTheme: Story = {
  args: {
    ...defaultProps,
    theme: {
      light: ['hsl(0, 0%, 92%)', 'rebeccapurple'],
      dark: ['hsl(0, 0%, 22%)', 'hsl(225,92%,77%)'],
    },
  },
  parameters: {
    docs: {
      source: {
        code: exampleTheme,
      },
    },
  },
  render: args => (
    <Container>
      <h1>Color themes</h1>
      <ActivityCalendar {...args} style={{ margin: '2rem 0' }} />

      <h2>Usage</h2>
      <p>
        Use the <code>theme</code> prop to set the calendar colors for the light and dark system{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme">color scheme</a>.
        Define each color scale{' '}
        <LinkTo kind="react-activity-calendar" name="with-explicit-theme">
          explicitly
        </LinkTo>{' '}
        with five colors or pass exactly two colors (the lowest and highest intensity) to calculate
        a single-hue scale. Colors can be specified in any valid CSS format.
      </p>
      <p>
        The colors for at least one scheme must be set. If undefined, the default theme is used. By
        default, the calendar will select the current system color scheme, but you can enforce a
        specific scheme with the{' '}
        <a href="/?path=/docs/react-activity-calendar--docs">
          <code>colorScheme</code>
        </a>{' '}
        prop.
      </p>
      <Source code={exampleTheme} />
    </Container>
  ),
};

export const WithExplicitTheme: Story = {
  args: {
    ...defaultProps,
    theme: explicitTheme,
  },
  parameters: {
    docs: {
      source: {
        code: exampleThemeExplicit,
      },
    },
  },
  render: args => (
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
  ),
};

export const WithCustomizedLook: Story = {
  args: {
    ...defaultProps,
    blockSize: 14,
    blockRadius: 7,
    blockMargin: 5,
    fontSize: 16,
    theme: explicitTheme,
  },
  parameters: {
    docs: {
      source: {
        code: exampleCustomized,
      },
    },
  },
};

export const WithMondayAsWeekStart: Story = {
  args: {
    ...defaultProps,
    weekStart: 1,
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} weekStart={1} />',
      },
    },
  },
};

export const WithSpecificDateRange: Story = {
  args: {
    ...defaultProps,
    data: generateData(2, 7),
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={selectDateRange(data)} />',
      },
    },
  },
};

export const WithLittleData: Story = {
  args: {
    ...defaultProps,
    data: [
      {
        date: '2023-06-14',
        count: 2,
        level: 1,
      },
      {
        date: '2023-06-22',
        count: 16,
        level: 3,
      },
      {
        date: '2023-07-05',
        count: 3,
        level: 1,
      },
      {
        date: '2023-07-17',
        count: 10,
        level: 2,
      },
    ],
  },
};

export const WithScreenOverflow: Story = {
  args: defaultProps,
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} />',
      },
    },
  },
  render: args => (
    <Container>
      <h1>With screen overflow</h1>
      <div style={{ width: 480, border: 'dashed 1px #929292' }}>
        <ActivityCalendar {...args} />
      </div>
    </Container>
  ),
};

export const WithTooltips: Story = {
  args: defaultProps,
  parameters: {
    docs: {
      source: {
        code: exampleTooltipsReact,
      },
    },
  },
  render: args => (
    <Container>
      <h1>Tooltip Examples</h1>
      <p>
        To add a 3rd party tooltip component to the calendar you can use the{' '}
        <code>renderBlock</code> property.
      </p>
      <h2>
        <a href="https://mui.com/material-ui/react-tooltip/">Material UI</a>
      </h2>
      <p>
        In the simplest case, each block only needs to be wrapped with a{' '}
        <code>&lt;Tooltip/&gt;</code> component, as shown here for Material UI:
      </p>
      <Source code={exampleTooltipsMui} />
      <ActivityCalendar
        {...args}
        renderBlock={(block, activity) => (
          <MuiTooltip title={`${activity.count} activities on ${activity.date}`}>
            {block}
          </MuiTooltip>
        )}
      />
      <h2>
        <a href="https://github.com/ReactTooltip/react-tooltip">react-tooltip</a>
      </h2>
      <p>
        Some libraries, like <code>react-tooltip</code>, require that additional props are passed to
        the block elements. You can achieve this using the <code>React.cloneElement</code> function:
      </p>
      <Source code={exampleTooltipsReact} />
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
  ),
};

export const WithoutLabels: Story = {
  args: {
    ...defaultProps,
    hideMonthLabels: true,
    hideColorLegend: true,
    hideTotalCount: true,
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} hideMonthLabels hideColorLegend hideTotalCount />',
      },
    },
  },
};

export const WithDayLabels: Story = {
  args: {
    ...defaultProps,
    showWeekdayLabels: true,
  },
  parameters: {
    docs: {
      source: {
        code: '<ActivityCalendar data={data} showWeekdayLabels />',
      },
    },
  },
};

export const WithLocalizedLabels: Story = {
  args: {
    ...defaultProps,
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
  parameters: {
    docs: {
      source: {
        code: exampleLabels,
      },
    },
  },
  render: args => (
    <Container>
      <h1>Localization</h1>
      <p>(Example in German)</p>
      <ActivityCalendar {...args} style={{ margin: '2rem 0' }} />
      <Source code={exampleLabelsShape} language="jsx" />
    </Container>
  ),
};

const eventHandlerData = generateData();

export const EventHandlers: Story = {
  args: {
    ...defaultProps,
    eventHandlers: {
      onClick: () => activity => alert(JSON.stringify(activity)),
      onMouseEnter: () => () => console.log('on mouse enter'),
    },
  },
  parameters: {
    docs: {
      source: {
        code: exampleEventHandlers,
      },
    },
  },
  render: args => (
    <Container>
      <h1>Event Handlers</h1>
      <p>
        You can register event handlers for the SVG <code>&lt;rect/&gt;</code> elements that are
        used to render the calendar days. This way you can control the behaviour on click, hover,
        etc. All event listeners have the following signature, so you can use the activity data of
        the block inside the handler:
      </p>
      <Source code={exampleEventHandlersInterface} />
      <p>Click on any block below to see it in action:</p>
      <ActivityCalendar {...args} style={{ margin: '2rem 0' }} />
      <Source code={exampleEventHandlers} />
    </Container>
  ),
};

const Source = ({ code, language = 'tsx' }: { code: string; language?: string }) => (
  <StorybookSource code={code} dark={useDarkMode()} language={language} />
);

function generateData(monthStart = 0, monthEnd = 11) {
  const MAX = 10;

  const yearStart = new Date().getFullYear();
  const yearEnd = monthEnd < monthStart ? yearStart + 1 : yearStart;

  const days = eachDayOfInterval({
    start: new Date(yearStart, monthStart, 1),
    end: lastDayOfMonth(new Date(yearEnd, monthEnd, 1)),
  });

  return days.map(date => {
    const count = Math.max(0, Math.round(Math.random() * MAX - Math.random() * (0.8 * MAX)));
    const level = Math.floor((count / MAX) * LEVEL_COUNT) as Level;

    return {
      date: formatISO(date, { representation: 'date' }),
      count,
      level,
    };
  });
}
