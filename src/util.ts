import color, { ColorInput } from 'tinycolor2';
import {
  differenceInCalendarDays,
  format,
  getDay,
  nextDay,
  parseISO,
  subWeeks,
} from 'date-fns/esm';
import type { Day as WeekDay } from 'date-fns';

import { DEFAULT_THEME, NAMESPACE, MIN_DISTANCE_MONTH_LABELS } from './constants';
import { Day, Weeks, Label, Theme } from './types';

export function groupByWeeks(
  days: Array<Day>,
  weekStart: WeekDay = 0, // 0 = Sunday
): Weeks {
  if (days.length === 0) {
    return [];
  }

  // Determine the first date of the calendar. If the first contribution date is
  // not specified week day the desired day one week earlier will be selected.
  const firstDate = parseISO(days[0].date);
  const firstCalendarDate =
    getDay(firstDate) === weekStart ? firstDate : subWeeks(nextDay(firstDate, weekStart), 1);

  // In order to correctly group contributions by week it is necessary to left pad the list
  const paddedDays = [
    ...Array(differenceInCalendarDays(firstDate, firstCalendarDate)).fill(undefined),
    ...days,
  ];

  return Array(Math.ceil(paddedDays.length / 7))
    .fill(undefined)
    .map((_, calendarWeek) => paddedDays.slice(calendarWeek * 7, calendarWeek * 7 + 7));
}

export function getMonthLabels(weeks: Weeks): Array<Label> {
  return weeks
    .reduce<Array<Label>>((labels, week, index) => {
      const firstWeekDay = week.find(day => day !== undefined);

      if (!firstWeekDay) {
        throw new Error(`Unexpected error: Week is empty: [${week}]`);
      }

      const month = format(parseISO(firstWeekDay.date), 'MMM');
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
    .filter(
      (label, index, labels) => index > 0 || labels[1].x - label.x > MIN_DISTANCE_MONTH_LABELS,
    );
}

export function createCalendarTheme(
  baseColor: ColorInput,
  emptyColor = color('white').darken(8).toHslString(),
): Theme {
  const base = color(baseColor);

  if (!base.isValid()) {
    return DEFAULT_THEME;
  }

  return {
    level4: base.setAlpha(0.92).toHslString(),
    level3: base.setAlpha(0.76).toHslString(),
    level2: base.setAlpha(0.6).toHslString(),
    level1: base.setAlpha(0.44).toHslString(),
    level0: emptyColor,
  };
}

export function getClassName(name: string, styles?: string): string {
  if (styles) {
    return `${NAMESPACE}__${name} ${styles}`;
  }

  return `${NAMESPACE}__${name}`;
}
