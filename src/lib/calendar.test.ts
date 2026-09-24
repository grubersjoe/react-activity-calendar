import { describe, expect, it } from 'vitest'
import type { Activity, Levels } from '../types'
import {
  generateEmptyData,
  getEmptyLevel,
  groupByWeeks,
  range,
  validateActivities,
  validateLevels,
} from './calendar'

describe('validateLevels', () => {
  it.each([0.5, -0.5, NaN, Infinity, -Infinity])('rejects non-integer bounds %s', level => {
    expect(() => {
      validateLevels({ minLevel: level, maxLevel: 4 })
    }).toThrow(new RangeError(`Minimum activity level ${level} must be an integer.`))

    expect(() => {
      validateLevels({ minLevel: 0, maxLevel: level })
    }).toThrow(new RangeError(`Maximum activity level ${level} must be an integer.`))
  })

  it.each([
    { minLevel: 0, maxLevel: 0 },
    { minLevel: 4, maxLevel: 0 },
  ])('rejects invalid bounds %j', levels => {
    expect(() => {
      validateLevels(levels)
    }).toThrow(
      new RangeError(
        `Minimum activity level must be less than maximum level. Got ${levels.minLevel} and ${levels.maxLevel}.`,
      ),
    )
  })
})

describe.each([
  [{ minLevel: 0, maxLevel: 4 }, 0],
  [{ minLevel: 1, maxLevel: 5 }, 1],
  [{ minLevel: -4, maxLevel: 0 }, 0],
  [{ minLevel: -5, maxLevel: -1 }, -1],
  [{ minLevel: -2, maxLevel: 4 }, 0],
] satisfies Array<[Levels, number]>)('empty activities for %j', (levels, expectedLevel) => {
  it('uses the valid level closest to zero', () => {
    expect(getEmptyLevel(levels)).toBe(expectedLevel)
  })

  it('fills missing days without changing supplied activities', () => {
    const first = { date: '2024-01-01', count: 3, level: levels.minLevel }
    const last = { date: '2024-01-03', count: 7, level: levels.maxLevel }
    const weeks = groupByWeeks([first, last], 0, getEmptyLevel(levels))

    expect(weeks).toStrictEqual([
      [undefined, first, { date: '2024-01-02', count: 0, level: expectedLevel }, last],
    ])
    expect(weeks[0]?.[1]).toBe(first)
    expect(weeks[0]?.[3]).toBe(last)
  })

  it('generates valid loading data with no activity', () => {
    const data = generateEmptyData(getEmptyLevel(levels))

    expect(data.length).toBeGreaterThanOrEqual(365)
    expect(data.every(activity => activity.count === 0 && activity.level === expectedLevel)).toBe(
      true,
    )
    expect(() => {
      validateActivities(data, levels)
    }).not.toThrow()
  })
})

describe('validateActivities', () => {
  it.each([0.5, -0.5, NaN, Infinity, -Infinity])('rejects non-integer level %s', level => {
    expect(() => {
      validateActivities([{ date: '2024-01-01', count: 0, level }], {
        minLevel: 0,
        maxLevel: 4,
      })
    }).toThrow(new RangeError(`Activity level ${level} for 2024-01-01 must be a finite integer.`))
  })

  it.each([
    ['empty', [], { minLevel: 0, maxLevel: 4 }],
    ['invalid date', [{ date: 'invalid', count: 0, level: 0 }], { minLevel: 0, maxLevel: 4 }],
    [
      'non-existing date',
      [{ date: '2023-02-29', count: 0, level: 0 }],
      { minLevel: 0, maxLevel: 4 },
    ],
    [
      'level out of bounds negative',
      [{ date: '2024-01-01', count: 0, level: -1 }],
      { minLevel: 0, maxLevel: 4 },
    ],
    [
      'level out of bounds positive',
      [{ date: '2024-01-01', count: 0, level: 1 }],
      { minLevel: -4, maxLevel: 0 },
    ],
  ] satisfies Array<[string, Array<Activity>, Levels]>)(
    'should throw error for invalid input: %s',
    (_, activities, levels) => {
      expect(() => {
        validateActivities(activities, levels)
      }).toThrow()
    },
  )

  it.each([
    [[{ date: '2024-01-01', count: 0, level: 0 }], { minLevel: 0, maxLevel: 4 }],
    [[{ date: '2024-02-29', count: 4, level: 4 }], { minLevel: 0, maxLevel: 4 }],
    [[{ date: '2024-12-31', count: 10, level: 10 }], { minLevel: 0, maxLevel: 10 }],
    [[{ date: '2024-01-01', count: -3, level: -2 }], { minLevel: -2, maxLevel: 0 }],
  ] satisfies Array<[Array<Activity>, Levels]>)(
    'should accept valid input',
    (activities, levels) => {
      expect(() => {
        validateActivities(activities, levels)
      }).not.toThrow()
    },
  )
})

describe('range', () => {
  it.each([
    ['0', [0]],
    ['-1 ', [-1]],
    ['same start and end', [1, 1]],
    ['end less than start', [0, -1]],
  ] as Array<[string, [number, number?]]>)(
    'should throw error for invalid input: %s',
    (_, args) => {
      expect(() => {
        range(...args)
      }).toThrow()
    },
  )

  it.each([
    [[5], [0, 1, 2, 3, 4]],
    [
      [0, 5],
      [0, 1, 2, 3, 4],
    ],
    [
      [-2, 2],
      [-2, -1, 0, 1],
    ],
  ] as Array<[[number, number?], Array<number>]>)(
    'should range correctly for input: %s',
    (args, expected) => {
      expect(range(...args)).toStrictEqual(expected)
    },
  )
})
