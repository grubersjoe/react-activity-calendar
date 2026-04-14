import { beforeEach, describe, expect, it, vi } from 'vitest'
import type { Levels, Theme, ThemeInput } from '../types'
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

  const cssSupportsSpy = vi.fn<typeof global.CSS.supports>()

  beforeEach(() => {
    vi.stubGlobal('CSS', {
      supports: cssSupportsSpy.mockReturnValue(true),
    })
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
        { minLevel: 0, maxLevel: 2 },
      ),
    ).toThrow()
  })

  it('throws an error if too many colors are passed', () => {
    expect(() =>
      createTheme(
        {
          dark: Array(5).fill('green'),
        },
        { minLevel: 0, maxLevel: 3 },
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
    cssSupportsSpy.mockReturnValue(false)
    expect(() =>
      createTheme({
        dark: ['#333', '🙃'],
      }),
    ).toThrow()
  })

  it('returns the same theme for explicit inputs', () => {
    expect(createTheme(explicitTheme)).toStrictEqual(explicitTheme)
  })

  it('calculates color scales for two inputs', () => {
    const input: ThemeInput = {
      light: ['hsl(0, 0%, 92%)', 'hsl(0, 0%, 26%)'],
      dark: ['hsl(0, 0%, 22%)', 'hsl(0, 0%, 92%)'],
    }

    expect(createTheme(input)).toStrictEqual(defaultTheme)
  })

  it('calculates color scales for three inputs', () => {
    const input: ThemeInput = {
      light: ['hsl(0, 0%, 26%)', 'hsl(0, 0%, 92%)', 'hsl(0, 0%, 26%)'],
      dark: ['hsl(0, 0%, 92%)', 'hsl(0, 0%, 22%)', 'hsl(0, 0%, 92%)'],
    }

    expect(createTheme(input)).toStrictEqual(defaultTheme)
  })

  it('calculates color scale for specific color', () => {
    const input: ThemeInput = {
      light: ['hsl(0, 0%, 92%)', 'rebeccapurple'],
      dark: ['hsl(0, 0%, 22%)', 'hsl(225,92%,77%)'],
    }

    expect(createTheme(input)).toStrictEqual({
      light: [
        'hsl(0, 0%, 92%)',
        'color-mix(in oklab, rebeccapurple 25%, hsl(0, 0%, 92%))',
        'color-mix(in oklab, rebeccapurple 50%, hsl(0, 0%, 92%))',
        'color-mix(in oklab, rebeccapurple 75%, hsl(0, 0%, 92%))',
        'rebeccapurple',
      ],
      dark: [
        'hsl(0, 0%, 22%)',
        'color-mix(in oklab, hsl(225,92%,77%) 25%, hsl(0, 0%, 22%))',
        'color-mix(in oklab, hsl(225,92%,77%) 50%, hsl(0, 0%, 22%))',
        'color-mix(in oklab, hsl(225,92%,77%) 75%, hsl(0, 0%, 22%))',
        'hsl(225,92%,77%)',
      ],
    })
  })

  it.each([
    [
      { minLevel: 0, maxLevel: 3 },
      {
        light: [
          'hsl(0, 0%, 92%)',
          'color-mix(in oklab, hsl(0, 0%, 26%) 33.33%, hsl(0, 0%, 92%))',
          'color-mix(in oklab, hsl(0, 0%, 26%) 66.67%, hsl(0, 0%, 92%))',
          'hsl(0, 0%, 26%)',
        ],
        dark: [
          'hsl(0, 0%, 22%)',
          'color-mix(in oklab, hsl(0, 0%, 92%) 33.33%, hsl(0, 0%, 22%))',
          'color-mix(in oklab, hsl(0, 0%, 92%) 66.67%, hsl(0, 0%, 22%))',
          'hsl(0, 0%, 92%)',
        ],
      },
    ],
    [
      { minLevel: 1, maxLevel: 5 },
      {
        light: [
          'color-mix(in oklab, hsl(0, 0%, 26%) 20%, hsl(0, 0%, 92%))',
          'color-mix(in oklab, hsl(0, 0%, 26%) 40%, hsl(0, 0%, 92%))',
          'color-mix(in oklab, hsl(0, 0%, 26%) 60%, hsl(0, 0%, 92%))',
          'color-mix(in oklab, hsl(0, 0%, 26%) 80%, hsl(0, 0%, 92%))',
          'hsl(0, 0%, 26%)',
        ],
        dark: [
          'color-mix(in oklab, hsl(0, 0%, 92%) 20%, hsl(0, 0%, 22%))',
          'color-mix(in oklab, hsl(0, 0%, 92%) 40%, hsl(0, 0%, 22%))',
          'color-mix(in oklab, hsl(0, 0%, 92%) 60%, hsl(0, 0%, 22%))',
          'color-mix(in oklab, hsl(0, 0%, 92%) 80%, hsl(0, 0%, 22%))',
          'hsl(0, 0%, 92%)',
        ],
      },
    ],
    [
      { minLevel: -8, maxLevel: -7 },
      {
        light: ['hsl(0, 0%, 26%)', 'color-mix(in oklab, hsl(0, 0%, 92%) 12.5%, hsl(0, 0%, 26%))'],
        dark: ['hsl(0, 0%, 92%)', 'color-mix(in oklab, hsl(0, 0%, 22%) 12.5%, hsl(0, 0%, 92%))'],
      },
    ],
    [
      { minLevel: -1, maxLevel: 1 },
      {
        light: ['hsl(0, 0%, 26%)', 'hsl(0, 0%, 92%)', 'hsl(0, 0%, 26%)'],
        dark: ['hsl(0, 0%, 92%)', 'hsl(0, 0%, 22%)', 'hsl(0, 0%, 92%)'],
      },
    ],
  ] satisfies Array<[Levels, Theme]>)(
    'calculates correct color scales for levels %s',
    (levels, expected) => {
      const input: ThemeInput = {
        light: ['hsl(0, 0%, 92%)', 'hsl(0, 0%, 26%)'],
        dark: ['hsl(0, 0%, 22%)', 'hsl(0, 0%, 92%)'],
      }
      expect(createTheme(input, levels)).toStrictEqual(expected)
    },
  )
})
