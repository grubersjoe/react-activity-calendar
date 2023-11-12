import type { Day as WeekDay } from 'date-fns';
import {
  differenceInCalendarDays,
  eachDayOfInterval,
  endOfYear,
  formatISO,
  getDay,
  getMonth,
  nextDay,
  parseISO,
  startOfYear,
  subWeeks,
} from 'date-fns';

import { DEFAULT_MONTH_LABELS, LEVEL_COUNT, NAMESPACE } from '../constants';
import { Activity, Level, Week } from '../types';

interface MonthLabel {
  weekIndex: number;
  label: string;
}

export function groupByWeeks(
  activities: Array<Activity>,
  weekStart: WeekDay = 0, // 0 = Sunday
): Array<Week> {
  if (activities.length === 0) {
    return [];
  }

  const normalizedActivities = fillHoles(activities);

  // Determine the first date of the calendar. If the first date is not the
  // set start weekday, the selected weekday one week earlier is used.
  const firstDate = parseISO(normalizedActivities[0].date);
  const firstCalendarDate =
    getDay(firstDate) === weekStart ? firstDate : subWeeks(nextDay(firstDate, weekStart), 1);

  // To correctly group activities by week, it is necessary to left-pad the list
  // because the first date might not be set start weekday.
  const paddedActivities = [
    ...Array(differenceInCalendarDays(firstDate, firstCalendarDate)).fill(undefined),
    ...normalizedActivities,
  ];

  const numberOfWeeks = Math.ceil(paddedActivities.length / 7);

  // Finally, group activities by week
  return Array(numberOfWeeks)
    .fill(undefined)
    .map((_, weekIndex) => paddedActivities.slice(weekIndex * 7, weekIndex * 7 + 7));
}

/**
 * The calendar expects a continuous sequence of days,
 * so fill gaps with empty activity data.
 */
function fillHoles(activities: Array<Activity>): Array<Activity> {
  const dateMap: Record<string, Activity> = {};
  for (const activity of activities) {
    dateMap[activity.date] = activity;
  }

  return eachDayOfInterval({
    start: parseISO(activities[0].date),
    end: parseISO(activities[activities.length - 1].date),
  }).map(day => {
    const date = formatISO(day, { representation: 'date' });

    if (dateMap[date]) {
      return dateMap[date];
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
): Array<MonthLabel> {
  return weeks
    .reduce<Array<MonthLabel>>((labels, week, weekIndex) => {
      const firstActivity = week.find(activity => activity !== undefined);

      if (!firstActivity) {
        throw new Error(`Unexpected error: Week ${weekIndex + 1} is empty: [${week}].`);
      }

      const month = monthNames[getMonth(parseISO(firstActivity.date))];
      const prevLabel = labels[labels.length - 1];

      if (weekIndex === 0 || prevLabel.label !== month) {
        return [...labels, { weekIndex, label: month }];
      }

      return labels;
    }, [])
    .filter(({ weekIndex }, index, labels) => {
      // Labels should only be shown if there is "enough" space (data).
      // This is a naive implementation that does not take the block size,
      // font size etc. into account.
      const minWeeks = 2;

      // Skip the first month label if there is not enough space to the next one.
      if (index === 0) {
        return labels[1] && labels[1].weekIndex - weekIndex > minWeeks;
      }

      // Skip the last month label the there is not enough data in that month to
      // avoid overflowing the calendar on the right.
      if (index === labels.length - 1) {
        return weeks.slice(weekIndex).length >= minWeeks;
      }

      return true;
    });
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

export function generateData(interval?: { start: Date; end: Date }): Array<Activity> {
  const max = 10;
  const now = new Date();

  const days = eachDayOfInterval(
    interval ?? {
      start: startOfYear(now),
      end: endOfYear(now),
    },
  );

  return days.map(date => {
    const count = Math.max(0, Math.round(Math.random() * max - Math.random() * (0.8 * max)));
    const level = Math.floor((count / max) * LEVEL_COUNT) as Level;

    return {
      date: formatISO(date, { representation: 'date' }),
      count,
      level,
    };
  });
}
