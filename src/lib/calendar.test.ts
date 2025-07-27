import { describe, expect, it } from '@jest/globals'
import type { Activity, LevelBounds } from '../types'
import { range, validateActivities, validateLevelBounds } from './calendar'

describe('validateActivities', () => {
  it.each([
    ['empty array', [], { min: 0, max: 4 }],
    ['invalid date', [{ date: 'invalid', count: 0, level: 0 }], { min: 0, max: 4 }],
    ['non-existing date', [{ date: '2023-02-29', count: 0, level: 0 }], { min: 0, max: 4 }],
    [
      'level out of bounds negative',
      [{ date: '2024-01-01', count: 0, level: -1 }],
      { min: 0, max: 4 },
    ],
    [
      'level out of bounds positive',
      [{ date: '2024-01-01', count: 0, level: 1 }],
      { min: -4, max: 0 },
    ],
  ] satisfies Array<[string, Array<Activity>, LevelBounds]>)(
    'should throw error for invalid input: %s',
    (_, activities, levelBounds) => {
      expect(() => {
        validateActivities(activities, levelBounds)
      }).toThrow()
    },
  )

  it.each([
    [[{ date: '2024-01-01', count: 0, level: 0 }], { min: 0, max: 4 }],
    [[{ date: '2024-02-29', count: 4, level: 4 }], { min: 0, max: 4 }],
    [[{ date: '2024-12-31', count: 10, level: 10 }], { min: 0, max: 10 }],
  ] satisfies Array<[Array<Activity>, LevelBounds]>)(
    'should accept valid input',
    (activities, levelBounds) => {
      expect(() => {
        validateActivities(activities, levelBounds)
      }).not.toThrow()
    },
  )
})

describe('validateLevelBounds', () => {
  it.each([
    ['same value', { min: 0, max: 0 }],
    ['min greater than max', { min: 1, max: 0 }],
    ['max less than min', { min: 0, max: -1 }],
  ] satisfies Array<[string, LevelBounds]>)(
    'should throw error for invalid input: %s',
    (_, bounds) => {
      expect(() => {
        validateLevelBounds(bounds)
      }).toThrow()
    },
  )

  it.each([
    ['default', { min: 0, max: 4 }],
    ['positive', { min: 1, max: 5 }],
    ['negative', { min: -10, max: -5 }],
    ['mixed', { min: -5, max: 5 }],
  ] satisfies Array<[string, LevelBounds]>)('should accept valid input: %s', (_, bounds) => {
    expect(() => {
      validateLevelBounds(bounds)
    }).not.toThrow()
  })
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
