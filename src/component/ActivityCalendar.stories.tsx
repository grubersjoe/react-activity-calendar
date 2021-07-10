import React from 'react';
import { Story, Meta } from '@storybook/react';
import ReactTooltip from 'react-tooltip';
import { eachDayOfInterval, formatISO, lastDayOfMonth } from 'date-fns/esm';

import ActivityCalendar, { Props } from './ActivityCalendar';
import { Day, Level, Theme } from '../types';

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
    children: {
      control: false,
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

const theme: Theme = {
  level0: '#F0F0F0',
  level1: '#C4EDDE',
  level2: '#7AC7C4',
  level3: '#F73859',
  level4: '#384259',
};

export const Default = Template.bind({});
Default.args = {
  data: generateData(),
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  data: generateData(),
};

export const SpecificDateRange = Template.bind({});
SpecificDateRange.args = {
  data: generateData(2, 7),
};

export const WithColor = Template.bind({});
WithColor.args = {
  data: generateData(),
  color: '#0f6499',
};

export const ExplicitTheme = Template.bind({});
ExplicitTheme.args = {
  data: generateData(),
  theme,
};

export const CustomizedLook = Template.bind({});
CustomizedLook.args = {
  data: generateData(),
  blockSize: 14,
  blockRadius: 7,
  blockMargin: 5,
  fontSize: 16,
  theme,
};

export const WithMondayAsWeekStart = Template.bind({});
WithMondayAsWeekStart.args = {
  data: generateData(),
  weekStart: 1,
};

export const WithTooltips = Template.bind({});
WithTooltips.args = {
  data: generateData(),
  children: <ReactTooltip html />,
};

export const WithoutLabels = Template.bind({});
WithoutLabels.args = {
  data: generateData(),
  hideMonthLabels: true,
  hideColorLegend: true,
  hideTotalCount: true,
};

export const WithDayLabels = Template.bind({});
WithDayLabels.args = {
  data: generateData(),
  showWeekdayLabels: true,
  style: {
    marginLeft: '1rem',
  },
};

function generateData(monthStart = 0, monthEnd = 11): Array<Day> {
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
