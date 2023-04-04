import { Tooltip as MuiTooltip } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { eachDayOfInterval, formatISO, lastDayOfMonth } from 'date-fns';
import React, { cloneElement } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import { Activity, Level, Theme } from '../types';
import { DEFAULT_MONTH_LABELS, DEFAULT_WEEKDAY_LABELS } from '../util';
import ActivityCalendar, { Props } from './ActivityCalendar';

export default {
  title: 'Activity Calendar',
  component: ActivityCalendar,
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
    color: {
      control: 'color',
    },
    fontSize: {
      control: { type: 'range', min: 6, max: 32, step: 2 },
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
} as Meta;

const Template: Story<Props> = args => <ActivityCalendar {...args} />;

const TemplateTooltips: Story<Props> = args => (
  <>
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
    <pre>
      {`<ActivityCalendar
  data={myData}
  renderBlock={(block, activity) => (
    <MuiTooltip title={\`\${activity.count} activities on \${activity.date}\`}>
      {block}
    </MuiTooltip>
  )}
/>`}
    </pre>
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
      the block elements. You can achieve that using the <code>React.cloneElement</code> function:
    </p>
    <pre>
      {`<ActivityCalendar
  data={myData}
  renderBlock={(block, activity) =>
    React.cloneElement(block, {
      'data-tooltip-id': 'react-tooltip',
      'data-tooltip-html': \`\${activity.count} activities on \${activity.date}\`,
    })
  }
/>
<ReactTooltip id="react-tooltip" />`}
    </pre>
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
  </>
);

const TemplateLocalized: Story<Props> = args => (
  <>
    <h1>Localization</h1>
    <p>(Example in German)</p>
    <ActivityCalendar {...args} style={{ margin: '2rem 0' }} />
    <pre>
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
    </pre>
  </>
);

const TemplateEventHandlers: Story<Props> = args => (
  <>
    <h1>Event Handlers</h1>
    <p>
      You can register event handlers for the SVG <code>&lt;rect/&gt;</code> elements that are used
      to render the calendar days. This way you can control the behaviour on click, hover, etc.
    </p>
    <p>
      All event listeners have the following signature, so you are able to use the shown data inside
      the handler:
    </p>
    <p>
      <code>(event: React.SyntheticEvent) =&gt; (data: Day) =&gt; void</code>
    </p>
    <p>Click on any block below to see it in action:</p>
    <ActivityCalendar {...args} style={{ margin: '2rem 0' }} />
    <pre>
      {`
<ActivityCalendar 
  data={data}  
  eventHandlers: {
    onClick: event => activity => {
      console.log({ event, activity });
      alert(JSON.stringify(activity, null, 4));
    },
    onMouseEnter: event => activity => console.log('mouseEnter'),
  }
/>
`}
    </pre>
  </>
);

const theme: Theme = {
  level0: '#F0F0F0',
  level1: '#C4EDDE',
  level2: '#7AC7C4',
  level3: '#F73859',
  level4: '#384259',
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

export const Default = Template.bind({});
Default.args = {
  data: generateData(),
  labels,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  data: generateData(),
  labels,
};

export const SpecificDateRange = Template.bind({});
SpecificDateRange.args = {
  data: generateData(2, 7),
  labels,
};

export const WithColor = Template.bind({});
WithColor.args = {
  data: generateData(),
  color: '#0f6499',
  labels,
};

export const ExplicitTheme = Template.bind({});
ExplicitTheme.args = {
  data: generateData(),
  theme,
  labels,
};

export const CustomizedLook = Template.bind({});
CustomizedLook.args = {
  data: generateData(),
  blockSize: 14,
  blockRadius: 7,
  blockMargin: 5,
  fontSize: 16,
  theme,
  labels,
};

export const WithMondayAsWeekStart = Template.bind({});
WithMondayAsWeekStart.args = {
  data: generateData(),
  weekStart: 1,
  labels,
};

export const WithTooltips = TemplateTooltips.bind({});
WithTooltips.args = {
  data: generateData(),
};

export const WithoutLabels = Template.bind({});
WithoutLabels.args = {
  data: generateData(),
  hideMonthLabels: true,
  hideColorLegend: true,
  hideTotalCount: true,
  labels,
};

export const WithDayLabels = Template.bind({});
WithDayLabels.args = {
  data: generateData(),
  showWeekdayLabels: true,
  labels,
};

export const WithLocalizedLabels = TemplateLocalized.bind({});
WithLocalizedLabels.args = {
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
};

const eventHandlerData = generateData();
export const EventHandlers = TemplateEventHandlers.bind({});
EventHandlers.args = {
  data: eventHandlerData,
  eventHandlers: {
    onClick: event => activity => {
      console.log({ event, activity });
      alert(JSON.stringify(activity, null, 4));
    },
  },
};

function generateData(monthStart = 0, monthEnd = 11): Array<Activity> {
  const MAX = 10;
  const LEVELS = 5;

  const yearStart = new Date().getFullYear();
  const yearEnd = monthEnd < monthStart ? yearStart + 1 : yearStart;

  const days = eachDayOfInterval({
    start: new Date(yearStart, monthStart, 1),
    end: lastDayOfMonth(new Date(yearEnd, monthEnd, 1)),
  });

  return days.map(date => {
    const count = Math.max(0, Math.round(Math.random() * MAX - Math.random() * (0.8 * MAX)));
    const level = Math.ceil(count / (MAX / (LEVELS - 1))) as Level;

    return {
      date: formatISO(date, { representation: 'date' }),
      count,
      level,
    };
  });
}
