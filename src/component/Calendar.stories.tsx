import React from 'react';
import { Story, Meta } from '@storybook/react';
import ReactTooltip from 'react-tooltip';
import { eachDayOfInterval, formatISO } from 'date-fns/esm';

import GitHubCalendar, { Props } from './Calendar';
import { Day, Level } from '../types';

export default {
  title: 'Activity Calendar',
  component: GitHubCalendar,
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

const Template: Story<Props> = args => <GitHubCalendar {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: generateData(),
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  data: generateData(),
  color: '#0f6499',
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

function generateData(): Array<Day> {
  const MAX = 50;
  const days = eachDayOfInterval({
    start: new Date(2020, 0, 1),
    end: new Date(2020, 11, 31),
  });

  return days.map(date => {
    const count = Math.max(0, Math.round(Math.random() * MAX - Math.random() * (MAX / 2)));

    const level = Math.floor(count / (MAX / 5)) as Level;

    if (level > 3) {
      console.log({
        date: formatISO(date, { representation: 'date' }),
        level,
        count,
      });
    }

    return {
      date: formatISO(date, { representation: 'date' }),
      level,
      count,
    };
  });
}
