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
 * Extends the activity data based on smart logic:
 * - Same year data: Expand to full Jan-Dec of that year
 * - Multi-year data: Only render the specific months/range provided
 */
export function extendToCurrentYear(activities: Array<Activity>): Array<Activity> {
  if (activities.length === 0) {
    return generateEmptyData()
  }

  const calendar = new Map<string, Activity>(activities.map(a => [a.date, a]))
  const firstActivity = activities[0] as Activity
  const lastActivity = activities[activities.length - 1] as Activity

  const firstActivityDate = parseISO(firstActivity.date)
  const lastActivityDate = parseISO(lastActivity.date)

  const firstYear = firstActivityDate.getFullYear()
  const lastYear = lastActivityDate.getFullYear()

  // Check if all data is within the same year
  const isSameYear = firstYear === lastYear

  let startDate = firstActivityDate
  let endDate = lastActivityDate

  if (isSameYear) {
    // Same year data: Expand to full Jan-Dec of that year
    startDate = new Date(firstYear, 0, 1) // January 1st of the data year
    endDate = new Date(firstYear, 11, 31) // December 31st of the data year
  }
  // Multi-year data: Keep original range (no extension)

  return eachDayOfInterval({
    start: startDate,
    end: endDate,
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

export function getClassName(name: string) {
  return `${NAMESPACE}__${name}`
}

export function range(n: number) {
  return [...Array(n).keys()]
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

  const noise = whiteNoise(days.length, maxLevel, v => 0.9 * Math.pow(v, 2))

  return days.map((date, i) => {
    const level = noise[i] as number

    return {
      date: formatISO(date, { representation: 'date' }),
      count: Math.round(level * (maxCount / maxLevel)),
      level,
    }
  })
}

// Deterministically generates n white noise values from 0 to max (inclusive).
function whiteNoise(
  n: number,
  max: number,
  transformFn: (v: number) => number = v => v,
): Array<number> {
  const seed = 54321
  const random = mulberry32(seed)

  return Array.from({ length: n }, () => {
    const v = transformFn(random())
    return Math.floor(v * (max + 1))
  })
}

// Mulberry32 pseudorandom number generator
function mulberry32(seed: number) {
  let state = seed >>> 0 // ensure unsigned 32-bit integer

  return () => {
    state += 0x6d2b79f5
    let r = Math.imul(state ^ (state >>> 15), 1 | state)
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r)

    return ((r ^ (r >>> 14)) >>> 0) / 4294967296
  }
}

/**
 * Groups activities by weeks with proper month boundaries for split-by-month display.
 * Each month gets proper padding at the start and end to maintain correct day-of-week positioning.
 */
export function groupByWeeksForSplitByMonth(
  activities: Array<Activity>,
  weekStart: DayIndex = 0, // 0 = Sunday
): Array<Week> {
  const normalizedActivities = fillHoles(activities)

  // Group activities by month first
  const monthGroups = new Map<string, Array<Activity>>()

  normalizedActivities.forEach(activity => {
    const date = parseISO(activity.date)
    const monthKey = `${date.getFullYear()}-${date.getMonth()}`

    if (!monthGroups.has(monthKey)) {
      monthGroups.set(monthKey, [])
    }

    if (monthGroups.get(monthKey)) {
      monthGroups.get(monthKey)?.push(activity)
    }
  })

  const allWeeks: Array<Week> = []

  // Process each month separately
  for (const [, monthActivities] of monthGroups) {
    const firstActivity = monthActivities[0]
    const lastActivity = monthActivities[monthActivities.length - 1]

    if (!firstActivity || !lastActivity) {
      continue
    }

    const firstDate = parseISO(firstActivity.date)
    const lastDate = parseISO(lastActivity.date)

    // Calculate padding needed at the start of the month
    const firstDayOfWeek = getDay(firstDate)
    const startPadding = (firstDayOfWeek - weekStart + 7) % 7

    // Calculate padding needed at the end of the month to complete the last week
    const lastDayOfWeek = getDay(lastDate)
    const endPadding = (6 - ((lastDayOfWeek - weekStart + 7) % 7)) % 7

    // Create padded month activities
    const paddedMonthActivities = [
      ...(Array(startPadding).fill(undefined) as Array<Activity>),
      ...monthActivities,
      ...(Array(endPadding).fill(undefined) as Array<Activity>),
    ]

    // Group this month's activities into weeks
    const monthWeeks: Array<Week> = []
    for (let i = 0; i < paddedMonthActivities.length; i += 7) {
      monthWeeks.push(paddedMonthActivities.slice(i, i + 7))
    }

    allWeeks.push(...monthWeeks)

    // Add a gap week only if this month ends on the last day of the week
    // This creates natural spacing only when months are separated by week boundaries
    const lastDayOfWeekForWeekStart = (weekStart + 6) % 7
    if (lastDayOfWeek === lastDayOfWeekForWeekStart) {
      allWeeks.push(Array(7).fill(undefined) as Week)
    }
  }

  return allWeeks
}
