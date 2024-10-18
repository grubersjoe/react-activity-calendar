import { getMonth, parseISO } from 'date-fns';
import type { Props } from '../component/ActivityCalendar';
import { DEFAULT_MONTH_LABELS } from '../constants';
import type { DayIndex, DayName, Week, WeekdayLabels } from '../types';

interface MonthLabel {
  weekIndex: number;
  label: string;
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

export function initWeekdayLabels(
  input: Props['showWeekdayLabels'],
  weekStart: DayIndex,
): WeekdayLabels {
  if (!input)
    return {
      byDayIndex: () => false,
      shouldShow: false,
    };

  // Default: Show every second day of the week.
  if (input === true) {
    return {
      byDayIndex: index => {
        return ((7 + index - weekStart) % 7) % 2 !== 0;
      },
      shouldShow: true,
    };
  }

  const indexed: Array<boolean> = [];
  for (const name of input) {
    const index = dayNameToIndex[name.toLowerCase() as DayName];
    indexed[index] = true;
  }

  return {
    byDayIndex: index => indexed[index] ?? false,
    shouldShow: input.length > 0,
  };
}

const dayNameToIndex: {
  [name in DayName]: DayIndex;
} = {
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6,
};
