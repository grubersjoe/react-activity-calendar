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
import type { Activity, DayIndex, Levels, Week } from '../types'

export function validateActivities(activities: Array<Activity>, { minLevel, maxLevel }: Levels) {
  if (activities.length === 0) {
    throw new Error('Activity data must not be empty.')
  }

  for (const { date, level } of activities) {
    if (!isValid(parseISO(date))) {
      throw new Error(`Activity date '${date}' is not a valid ISO 8601 date string.`)
    }

    if (level < minLevel || level > maxLevel) {
      throw new RangeError(
        `Activity level ${level} for ${date} is out of range. It must be between ${minLevel} and ${maxLevel}.`,
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
  const calendar = new Map(activities.map(a => [a.date, a]))
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

/**
 * Returns the sequence of numbers in range.
 * @example
 * range(3) -> [0, 1, 2]
 * range(2, 5) -> [2, 3, 4]
 */
export function range(fromArg: number, toArg?: number) {
  const from = toArg === undefined ? 0 : fromArg
  const to = toArg ?? fromArg

  if (to <= from) {
    throw new RangeError('Invalid range: to must be greater than from')
  }

  return Array.from({ length: to - from }, (_, i) => from + i)
}

export function generateTestData(args?: {
  interval?: { start: Date; end: Date }
  minLevel?: number
  maxLevel?: number
}): Array<Activity> {
  const minLevel = args?.minLevel ?? 0
  const maxLevel = args?.maxLevel ?? 4

  const now = new Date()
  const days = eachDayOfInterval(
    args?.interval ?? {
      start: startOfYear(now),
      end: endOfYear(now),
    },
  )

  const transformFn = minLevel < 0 ? (v: number) => v : (v: number) => 0.9 * Math.pow(v, 2)
  const noise = whiteNoise(days.length, minLevel, maxLevel, transformFn)

  return days.map((date, i) => {
    const level = noise[i] as number

    return {
      date: formatISO(date, { representation: 'date' }),
      count: level * 5,
      level,
    }
  })
}

// Deterministically generates n white noise values from min to max (inclusive).
function whiteNoise(
  n: number,
  min: number,
  max: number,
  transformFn: (v: number) => number = v => v,
): Array<number> {
  const seed = 54321
  const random = mulberry32(seed)

  return Array.from({ length: n }, () => {
    const v = transformFn(random())
    return Math.floor(v * (max - min + 1)) + min
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
