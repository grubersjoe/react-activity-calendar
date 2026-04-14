import { describe, expect, it } from 'vitest'
import type { Activity, Levels } from '../types'
import { range, validateActivities } from './calendar'

describe('validateActivities', () => {
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
