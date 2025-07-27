import { beforeEach, describe, expect, it, jest } from '@jest/globals'
import type { LevelBounds, Theme, ThemeInput } from '../types'
import { createTheme } from './theme'

describe('createTheme', () => {
  const defaultTheme = {
    light: [
      'hsl(0, 0%, 92%)',
      'color-mix(in oklab, hsl(0, 0%, 26%) 25%, hsl(0, 0%, 92%))',
      'color-mix(in oklab, hsl(0, 0%, 26%) 50%, hsl(0, 0%, 92%))',
      'color-mix(in oklab, hsl(0, 0%, 26%) 75%, hsl(0, 0%, 92%))',
      'hsl(0, 0%, 26%)',
    ],
    dark: [
      'hsl(0, 0%, 22%)',
      'color-mix(in oklab, hsl(0, 0%, 92%) 25%, hsl(0, 0%, 22%))',
      'color-mix(in oklab, hsl(0, 0%, 92%) 50%, hsl(0, 0%, 22%))',
      'color-mix(in oklab, hsl(0, 0%, 92%) 75%, hsl(0, 0%, 22%))',
      'hsl(0, 0%, 92%)',
    ],
  }

  const explicitTheme: Theme = {
    light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
    dark: ['hsl(0, 0%, 22%)', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
  }

  const cssSpy = jest.fn<typeof global.CSS.supports>()

  beforeEach(() => {
    // @ts-expect-error only this method needs to be mocked
    global.CSS = {
      supports: cssSpy.mockReturnValue(true),
    }
  })

  it('returns the default theme if no input is passed', () => {
    expect(createTheme()).toStrictEqual(defaultTheme)
  })

  it('throws an error if input is not an object', () => {
    // @ts-expect-error test invalid input
    expect(() => createTheme('invalid')).toThrow()
  })

  it('throws an error if neither "light" or "dark" inputs are set', () => {
    // @ts-expect-error test invalid input
    expect(() => createTheme({})).toThrow()
  })

  it('throws an error if too few colors are passed', () => {
    expect(() =>
      createTheme(
        {
          light: ['blue'],
        },
        { min: 0, max: 2 },
      ),
    ).toThrow()
  })

  it('throws an error if too many colors are passed', () => {
    expect(() =>
      createTheme(
        {
          dark: Array(5).fill('green'),
        },
        { min: 0, max: 3 },
      ),
    ).toThrow()
  })

  it('uses default dark color scale if undefined in input', () => {
    expect(
      createTheme({
        light: explicitTheme.light,
      }),
    ).toStrictEqual({
      light: explicitTheme.light,
      dark: defaultTheme.dark,
    })
  })

  it('uses default light color scale if undefined in input', () => {
    expect(
      createTheme({
        dark: explicitTheme.dark,
      }),
    ).toStrictEqual({
      light: defaultTheme.light,
      dark: explicitTheme.dark,
    })
  })

  it('throws if an invalid color is passed', () => {
    cssSpy.mockReturnValue(false)
    expect(() =>
      createTheme({
        dark: ['#333', '🙃'],
      }),
    ).toThrow()
  })

  it('returns the same theme for explicit inputs', () => {
    expect(createTheme(explicitTheme)).toStrictEqual(explicitTheme)
  })

  it('calculates color scales for minimal input', () => {
    const input: ThemeInput = {
      light: ['hsl(0, 0%, 92%)', 'hsl(0, 0%, 26%)'],
      dark: ['hsl(0, 0%, 20%)', 'hsl(0, 0%, 92%)'],
    }

    const actual = createTheme(input)
    expect(actual.light).toHaveLength(5)
    expect(actual.dark).toHaveLength(5)
  })

  it.each([
    [
      { min: 0, max: 3 },
      {
        light: [
          'hsl(0, 0%, 92%)',
          'color-mix(in oklab, hsl(0, 0%, 26%) 33.33%, hsl(0, 0%, 92%))',
          'color-mix(in oklab, hsl(0, 0%, 26%) 66.67%, hsl(0, 0%, 92%))',
          'hsl(0, 0%, 26%)',
        ],
        dark: [
          'hsl(0, 0%, 20%)',
          'color-mix(in oklab, hsl(0, 0%, 92%) 33.33%, hsl(0, 0%, 20%))',
          'color-mix(in oklab, hsl(0, 0%, 92%) 66.67%, hsl(0, 0%, 20%))',
          'hsl(0, 0%, 92%)',
        ],
      },
    ],
    [
      { min: 1, max: 5 },
      {
        dark: [
          'hsl(0, 0%, 20%)',
          'color-mix(in oklab, hsl(0, 0%, 92%) 25%, hsl(0, 0%, 20%))',
          'color-mix(in oklab, hsl(0, 0%, 92%) 50%, hsl(0, 0%, 20%))',
          'color-mix(in oklab, hsl(0, 0%, 92%) 75%, hsl(0, 0%, 20%))',
          'hsl(0, 0%, 92%)',
        ],
        light: [
          'hsl(0, 0%, 92%)',
          'color-mix(in oklab, hsl(0, 0%, 26%) 25%, hsl(0, 0%, 92%))',
          'color-mix(in oklab, hsl(0, 0%, 26%) 50%, hsl(0, 0%, 92%))',
          'color-mix(in oklab, hsl(0, 0%, 26%) 75%, hsl(0, 0%, 92%))',
          'hsl(0, 0%, 26%)',
        ],
      },
    ],
    [
      { min: -8, max: -7 },
      {
        dark: ['hsl(0, 0%, 20%)', 'hsl(0, 0%, 92%)'],
        light: ['hsl(0, 0%, 92%)', 'hsl(0, 0%, 26%)'],
      },
    ],
    [
      { min: -1, max: 1 },
      {
        dark: [
          'hsl(0, 0%, 20%)',
          'color-mix(in oklab, hsl(0, 0%, 92%) 50%, hsl(0, 0%, 20%))',
          'hsl(0, 0%, 92%)',
        ],
        light: [
          'hsl(0, 0%, 92%)',
          'color-mix(in oklab, hsl(0, 0%, 26%) 50%, hsl(0, 0%, 92%))',
          'hsl(0, 0%, 26%)',
        ],
      },
    ],
  ] satisfies Array<[LevelBounds, Theme]>)(
    'calculates correct color scales for different level bounds %s',
    (bounds, expected) => {
      const input: ThemeInput = {
        light: ['hsl(0, 0%, 92%)', 'hsl(0, 0%, 26%)'],
        dark: ['hsl(0, 0%, 20%)', 'hsl(0, 0%, 92%)'],
      }
      expect(createTheme(input, bounds)).toStrictEqual(expected)
    },
  )
})
