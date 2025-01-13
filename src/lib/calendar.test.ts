import { describe, expect, it } from '@jest/globals'
import type { Activity } from '../types'
import { validateActivities } from './calendar'

describe('validateActivities', () => {
  it.each([
    ['empty array', [], 4],
    ['invalid date', [{ date: 'invalid', count: 0, level: 0 }], 4],
    ['non-existing date', [{ date: '2023-02-29', count: 0, level: 0 }], 4],
    ['negative count', [{ date: '2024-01-01', count: -1, level: 0 }], 4],
    ['negative level', [{ date: '2024-01-01', count: 0, level: -1 }], 4],
    ['invalid level', [{ date: '2024-01-01', count: 0, level: 5 }], 4],
  ] as Array<[string, Array<Activity>, number]>)(
    'should throw error for invalid input: %s',
    (_, activities, maxLevel) => {
      expect(() => {
        validateActivities(activities, maxLevel)
      }).toThrow()
    },
  )

  it.each([
    [[{ date: '2024-01-01', count: 0, level: 0 }], 4],
    [[{ date: '2024-02-29', count: 4, level: 4 }], 4],
    [[{ date: '2024-12-31', count: 10, level: 10 }], 10],
  ] as Array<[Array<Activity>, number]>)('should accept valid input', (activities, maxLevel) => {
    expect(() => {
      validateActivities(activities, maxLevel)
    }).not.toThrow()
  })
})
