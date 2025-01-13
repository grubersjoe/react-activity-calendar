import { describe, expect, it } from '@jest/globals'
import type { DayIndex, Week } from '../types'
import { generateTestData, groupByWeeks } from './calendar'
import { getMonthLabels, initWeekdayLabels } from './label'

describe('getMonthLabels', () => {
  it('returns empty list for empty input', () => {
    expect(getMonthLabels([])).toStrictEqual([])
  })

  it('throws if a week has no activity defined', () => {
    const weeks = [Array(7).fill(undefined)] as Array<Week>

    expect(() => {
      expect(getMonthLabels(weeks)).toStrictEqual([])
    }).toThrow()
  })

  it('returns correct month labels', () => {
    const weeks = groupByWeeks(
      generateTestData({
        interval: {
          start: new Date(2023, 2, 12),
          end: new Date(2023, 5, 1),
        },
      }),
    )

    expect(getMonthLabels(weeks)).toStrictEqual([
      { label: 'Mar', weekIndex: 0 },
      { label: 'Apr', weekIndex: 3 },
      { label: 'May', weekIndex: 8 },
    ])
  })

  it('skips label for first month if it does not contain at least three weeks of data', () => {
    const weeks = groupByWeeks(
      generateTestData({
        interval: {
          start: new Date(2023, 9, 22),
          end: new Date(2023, 11, 31),
        },
      }),
    )

    expect(getMonthLabels(weeks)).toStrictEqual([
      { label: 'Nov', weekIndex: 2 },
      { label: 'Dec', weekIndex: 6 },
    ])
  })

  it('skips label for last month if it does not contain at least three weeks of data', () => {
    const weeks = groupByWeeks(
      generateTestData({
        interval: {
          start: new Date(2023, 3, 1),
          end: new Date(2023, 4, 20),
        },
      }),
    )

    expect(getMonthLabels(weeks)).toStrictEqual([{ label: 'Apr', weekIndex: 0 }])
  })

  it('skips first and last label if both months do not contain at least three weeks of data', () => {
    const weeks = groupByWeeks(
      generateTestData({
        interval: {
          start: new Date(2023, 1, 22),
          end: new Date(2023, 4, 10),
        },
      }),
    )

    expect(getMonthLabels(weeks)).toStrictEqual([
      { label: 'Mar', weekIndex: 2 },
      { label: 'Apr', weekIndex: 6 },
    ])
  })
})

describe('initWeekdayLabels', () => {
  const days: Array<DayIndex> = [0, 1, 2, 3, 4, 5, 6]

  it.each([[undefined], [false]])('should return false for `%p` as input', input => {
    for (const weekStart of days) {
      const actual = initWeekdayLabels(input, weekStart)

      expect(actual.shouldShow).toBe(false)
      for (const dayIndex of days) {
        expect(actual.byDayIndex(dayIndex)).toBe(false)
      }
    }
  })

  it.each([
    [0, [false, true, false, true, false, true, false]],
    [1, [false, false, true, false, true, false, true]],
    [2, [true, false, false, true, false, true, false]],
    [3, [false, true, false, false, true, false, true]],
    [4, [true, false, true, false, false, true, false]],
    [5, [false, true, false, true, false, false, true]],
    [6, [true, false, true, false, true, false, false]],
  ])(
    'should return true for every second weekday for `true` as input with %d as week start',
    (weekStart, expected) => {
      const actual = initWeekdayLabels(true, weekStart as DayIndex)

      expect(actual.shouldShow).toBe(true)
      for (const weekStart of days) {
        expect(actual.byDayIndex(weekStart)).toBe(expected[weekStart])
      }
    },
  )

  it('should return false for no days as input', () => {
    for (const weekStart of days) {
      const actual = initWeekdayLabels([], weekStart)

      expect(actual.shouldShow).toBe(false)
      for (const dayIndex of days) {
        expect(actual.byDayIndex(dayIndex)).toBe(false)
      }
    }
  })

  it('should return true for given days', () => {
    for (const weekStart of days) {
      const actual = initWeekdayLabels(['mon', 'wed', 'sat'], weekStart)

      expect(actual.shouldShow).toBe(true)
      expect(actual.byDayIndex(0)).toBe(false)
      expect(actual.byDayIndex(1)).toBe(true)
      expect(actual.byDayIndex(2)).toBe(false)
      expect(actual.byDayIndex(3)).toBe(true)
      expect(actual.byDayIndex(4)).toBe(false)
      expect(actual.byDayIndex(5)).toBe(false)
      expect(actual.byDayIndex(6)).toBe(true)
    }
  })

  it('should return true all days as input', () => {
    for (const weekStart of days) {
      const actual = initWeekdayLabels(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'], weekStart)

      expect(actual.shouldShow).toBe(true)
      for (const dayIndex of days) {
        expect(actual.byDayIndex(dayIndex)).toBe(true)
      }
    }
  })

  it('should handle wrong capitalization correctly', () => {
    // @ts-expect-error we want to test incorrect input
    const actual = initWeekdayLabels(['SUN'], 0)

    expect(actual.shouldShow).toBe(true)
    for (const dayIndex of days) {
      expect(actual.byDayIndex(dayIndex)).toBe(dayIndex === 0)
    }
  })
})
