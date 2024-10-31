import {
  differenceInCalendarDays,
  eachDayOfInterval,
  endOfYear,
  formatISO,
  getDay,
  isValid,
  nextDay,
  parseISO,
  startOfYear,
  subWeeks,
} from 'date-fns'
import { NAMESPACE } from '../constants'
import type { Activity, DayIndex, Week } from '../types'

export function validateActivities(activities: Array<Activity>, maxLevel: number) {
  if (activities.length === 0) {
    throw new Error('Activity data must not be empty.')
  }

  for (const { date, level, count } of activities) {
    if (!isValid(parseISO(date))) {
      throw new Error(`Activity date '${date}' is not a valid ISO 8601 date string.`)
    }

    if (count < 0) {
      throw new RangeError(`Activity count must not be negative, found ${count}.`)
    }

    if (level < 0 || level > maxLevel) {
      throw new RangeError(
        `Activity level ${level} for ${date} is out of range. It must be between 0 and ${maxLevel}.`,
      )
    }
  }
}

export function groupByWeeks(
  activities: Array<Activity>,
  weekStart: DayIndex = 0, // 0 = Sunday
): Array<Week> {
  const normalizedActivities = fillHoles(activities)

  // Determine the first date of the calendar. If the first date is not the
  // passed weekday, the respective weekday one week earlier is used.
  const firstActivity = normalizedActivities[0] as Activity
  const firstDate = parseISO(firstActivity.date)
  const firstCalendarDate =
    getDay(firstDate) === weekStart ? firstDate : subWeeks(nextDay(firstDate, weekStart), 1)

  // To correctly group activities by week, it is necessary to left-pad the list
  // because the first date might not be the set start weekday.
  const paddedActivities = [
    ...(Array(differenceInCalendarDays(firstDate, firstCalendarDate)).fill(
      undefined,
    ) as Array<Activity>),
    ...normalizedActivities,
  ]

  const numberOfWeeks = Math.ceil(paddedActivities.length / 7)

  // Finally, group activities by week
  return range(numberOfWeeks).map(weekIndex =>
    paddedActivities.slice(weekIndex * 7, weekIndex * 7 + 7),
  )
}

/**
 * The calendar expects a continuous sequence of days,
 * so fill gaps with empty activity data.
 */
function fillHoles(activities: Array<Activity>): Array<Activity> {
  const calendar = new Map<string, Activity>(activities.map(a => [a.date, a]))
  const firstActivity = activities[0] as Activity
  const lastActivity = activities[activities.length - 1] as Activity

  return eachDayOfInterval({
    start: parseISO(firstActivity.date),
    end: parseISO(lastActivity.date),
  }).map(day => {
    const date = formatISO(day, { representation: 'date' })

    if (calendar.has(date)) {
      return calendar.get(date) as Activity
    }

    return {
      date,
      count: 0,
      level: 0,
    }
  })
}

/**
 * Following the BEM (block, element, modifier) naming convention
 * https://getbem.com/naming/
 */
export function getClassName(element: string) {
  return `${NAMESPACE}__${element}`
}

export function generateEmptyData(): Array<Activity> {
  const year = new Date().getFullYear()
  const days = eachDayOfInterval({
    start: new Date(year, 0, 1),
    end: new Date(year, 11, 31),
  })

  return days.map(date => ({
    date: formatISO(date, { representation: 'date' }),
    count: 0,
    level: 0,
  }))
}

export function generateTestData(args: {
  interval?: { start: Date; end: Date }
  maxLevel?: number
}): Array<Activity> {
  const maxCount = 20
  const maxLevel = args.maxLevel ? Math.max(1, args.maxLevel) : 4
  const now = new Date()

  const days = eachDayOfInterval(
    args.interval ?? {
      start: startOfYear(now),
      end: endOfYear(now),
    },
  )

  return days.map(date => {
    // The random activity count is shifted by up to 80% towards zero.
    const c = Math.round(Math.random() * maxCount - Math.random() * (0.8 * maxCount))
    const count = Math.max(0, c)
    const level = Math.ceil((count / maxCount) * maxLevel)

    return {
      date: formatISO(date, { representation: 'date' }),
      count,
      level,
    }
  })
}

export function range(n: number) {
  return [...Array(n).keys()]
}
