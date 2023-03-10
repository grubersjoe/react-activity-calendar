import chroma from 'chroma-js';
import type { Day as WeekDay } from 'date-fns';
import {
  differenceInCalendarDays,
  eachDayOfInterval,
  formatISO,
  getDay,
  getMonth,
  nextDay,
  parseISO,
  subWeeks,
} from 'date-fns';

import { Activity, Color, ColorScale, Theme, ThemeInput, Week } from './types';

export const NAMESPACE = 'react-activity-calendar';
export const MIN_DISTANCE_MONTH_LABELS = 2;

const defaultTheme = createTheme({
  light: ['hsl(0, 0%, 92%)', 'hsl(0, 0%, 26%)'],
  dark: ['hsl(0, 0%, 20%)', 'hsl(0, 0%, 94%)'],
});

interface Label {
  x: number;
  y: number;
  text: string;
}

export function groupByWeeks(
  days: Array<Activity>,
  weekStart: WeekDay = 0, // 0 = Sunday
): Array<Week> {
  if (days.length === 0) {
    return [];
  }

  const normalizedDays = fillHoles(days);

  // Determine the first date of the calendar. If the first date is not the
  // set start weekday, the selected weekday one week earlier is used.
  const firstDate = parseISO(normalizedDays[0].date);
  const firstCalendarDate =
    getDay(firstDate) === weekStart ? firstDate : subWeeks(nextDay(firstDate, weekStart), 1);

  // To correctly group activities by week, it is necessary to left pad the
  // list because the first date might not be set start weekday.
  const paddedDays = [
    ...Array(differenceInCalendarDays(firstDate, firstCalendarDate)).fill(undefined),
    ...normalizedDays,
  ];

  return Array(Math.ceil(paddedDays.length / 7))
    .fill(undefined)
    .map((_, calendarWeek) => paddedDays.slice(calendarWeek * 7, calendarWeek * 7 + 7));
}

/**
 * The calendar expects a continuous sequence of days, so fill gaps with empty
 * activity data.
 */
function fillHoles(days: Array<Activity>): Array<Activity> {
  const daysMap = days.reduce((map, day) => {
    map.set(day.date, day);
    return map;
  }, new Map<string, Activity>());

  return eachDayOfInterval({
    start: parseISO(days[0].date),
    end: parseISO(days[days.length - 1].date),
  }).map(day => {
    const date = formatISO(day, { representation: 'date' });

    if (daysMap.has(date)) {
      return daysMap.get(date) as Activity;
    }

    return {
      date,
      count: 0,
      level: 0,
    };
  });
}

export function getMonthLabels(
  weeks: Array<Week>,
  monthNames: Array<string> = DEFAULT_MONTH_LABELS,
): Array<Label> {
  return weeks
    .reduce<Array<Label>>((labels, week, index) => {
      const firstWeekDay = week.find(day => day !== undefined);

      if (!firstWeekDay) {
        throw new Error(`Unexpected error: Week is empty: [${week}]`);
      }

      const month = monthNames[getMonth(parseISO(firstWeekDay.date))];
      const prev = labels[labels.length - 1];

      if (index === 0 || prev.text !== month) {
        return [
          ...labels,
          {
            x: index,
            y: 0,
            text: month,
          },
        ];
      }

      return labels;
    }, [])
    .filter((label, index, labels) => {
      if (index === 0) {
        return labels[1] && labels[1].x - label.x > MIN_DISTANCE_MONTH_LABELS;
      }

      return true;
    });
}

export function createTheme(theme?: ThemeInput): Theme {
  if (typeof theme === 'object') {
    if (theme.light === undefined || theme.dark === undefined) {
      throw new Error(
        'The theme must contain the fields "light" and "dark" with a tuple of exactly 2 or 5 colors respectively.',
      );
    }

    return {
      light: isColorScale(theme.light) ? theme.light : createColorScale(theme.light),
      dark: isColorScale(theme.dark) ? theme.dark : createColorScale(theme.dark),
    };
  }

  return defaultTheme;
}

function isColorScale(input: Array<unknown>): input is ColorScale {
  return input.length === 5 && input.every(color => chroma.valid(color));
}

function createColorScale(colors: [min: Color, max: Color]): ColorScale {
  if (colors.length !== 2) {
    throw new Error('Exactly two colors must be passed to calculate the color scale.');
  }

  return chroma.scale(colors).mode('lch').colors(5) as ColorScale;
}

export function getClassName(name: string, styles?: string): string {
  if (styles) {
    return `${NAMESPACE}__${name} ${styles}`;
  }

  return `${NAMESPACE}__${name}`;
}

export function generateEmptyData(): Array<Activity> {
  const year = new Date().getFullYear();
  const days = eachDayOfInterval({
    start: new Date(year, 0, 1),
    end: new Date(year, 11, 31),
  });

  return days.map(date => ({
    date: formatISO(date, { representation: 'date' }),
    count: 0,
    level: 0,
  }));
}

export const DEFAULT_MONTH_LABELS = [
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
];

export const DEFAULT_WEEKDAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const DEFAULT_LABELS = {
  months: DEFAULT_MONTH_LABELS,
  weekdays: DEFAULT_WEEKDAY_LABELS,
  totalCount: '{{count}} activities in {{year}}',
  legend: {
    less: 'Less',
    more: 'More',
  },
};
