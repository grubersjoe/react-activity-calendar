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

import { DEFAULT_MONTH_LABELS, NAMESPACE } from '../constants';
import type { Activity, Week } from '../types';

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
  const firstActivity = normalizedActivities[0] as Activity;
  const firstDate = parseISO(firstActivity.date);
  const firstCalendarDate =
    getDay(firstDate) === weekStart ? firstDate : subWeeks(nextDay(firstDate, weekStart), 1);

  // To correctly group activities by week, it is necessary to left-pad the list
  // because the first date might not be set start weekday.
  const paddedActivities = [
    ...(Array(differenceInCalendarDays(firstDate, firstCalendarDate)).fill(
      undefined,
    ) as Array<Activity>),
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
  if (activities.length === 0) {
    return [];
  }

  const calendar = new Map<string, Activity>(activities.map(a => [a.date, a]));
  const firstActivity = activities[0] as Activity;
  const lastActivity = activities[activities.length - 1] as Activity;

  return eachDayOfInterval({
    start: parseISO(firstActivity.date),
    end: parseISO(lastActivity.date),
  }).map(day => {
    const date = formatISO(day, { representation: 'date' });

    if (calendar.has(date)) {
      return calendar.get(date) as Activity;
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

      if (!month) {
        const monthName = new Date(firstActivity.date).toLocaleString('en-US', { month: 'short' });
        throw new Error(`Unexpected error: undefined month label for ${monthName}.`);
      }

      const prevLabel = labels[labels.length - 1];

      if (weekIndex === 0 || !prevLabel || prevLabel.label !== month) {
        return [...labels, { weekIndex, label: month }];
      }

      return labels;
    }, [])
    .filter(({ weekIndex }, index, labels) => {
      // Labels should only be shown if there is "enough" space (data).
      // This is a naive implementation that does not take the block size,
      // font size, etc. into account.
      const minWeeks = 3;

      // Skip the first month label if there is not enough space to the next one.
      if (index === 0) {
        return labels[1] && labels[1].weekIndex - weekIndex >= minWeeks;
      }

      // Skip the last month label if there is not enough data in that month
      // to avoid overflowing the calendar on the right.
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

export function generateTestData(args: {
  interval?: { start: Date; end: Date };
  maxLevel?: number;
}): Array<Activity> {
  const maxCount = 20;
  const maxLevel = args.maxLevel ? Math.max(1, args.maxLevel) : 4;
  const now = new Date();

  const days = eachDayOfInterval(
    args.interval ?? {
      start: startOfYear(now),
      end: endOfYear(now),
    },
  );

  return days.map(date => {
    // The random activity count is shifted by up to 80% towards zero.
    const c = Math.round(Math.random() * maxCount - Math.random() * (0.8 * maxCount));
    const count = Math.max(0, c);
    const level = Math.ceil((count / maxCount) * maxLevel);

    return {
      date: formatISO(date, { representation: 'date' }),
      count,
      level,
    };
  });
}

export function maxWeekdayLabelLength(
  firstWeek: Week,
  weekStart: number,
  labels: string[],
  fontSize: number,
): number {
  if (labels.length !== 7) {
    throw new Error('Exactly 7 labels, one for each weekday must be passed.');
  }

  return firstWeek.reduce((maxLength, _, index) => {
    if (index % 2 !== 0) {
      const dayIndex = (index + weekStart) % 7;
      const label = labels[dayIndex] as string;
      const curLength = Math.ceil(calcTextDimensions(label, fontSize).width);

      return Math.max(maxLength, curLength);
    }

    return maxLength;
  }, 0);
}

function calcTextDimensions(text: string, fontSize: number) {
  if (typeof document === 'undefined' || typeof window === 'undefined') {
    throw new Error(
      'Unexpected error: text dimensions can only be calculated on the client, not the server.',
    );
  }

  if (fontSize < 1) {
    throw new RangeError('fontSize must be positive');
  }

  if (text.length === 0) {
    return { width: 0, height: 0 };
  }

  const namespace = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(namespace, 'svg');

  svg.style.position = 'absolute';
  svg.style.visibility = 'hidden';
  svg.style.fontFamily = window.getComputedStyle(document.body).fontFamily;
  svg.style.fontSize = `${fontSize}px`;

  const textNode = document.createElementNS(namespace, 'text');
  textNode.textContent = text;

  svg.appendChild(textNode);
  document.body.appendChild(svg);
  const boundingBox = textNode.getBBox();

  document.body.removeChild(svg);

  return { width: boundingBox.width, height: boundingBox.height };
}
