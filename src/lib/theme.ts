import type { Color, Levels, Theme, ThemeInput } from '../types'
import { range } from './calendar'

export function createTheme(
  input?: ThemeInput,
  levels: Levels = { minLevel: 0, maxLevel: 4 },
): Theme {
  const defaultTheme = createDefaultTheme(levels)

  if (input) {
    const numberOfLevels = levels.maxLevel - levels.minLevel + 1
    validateThemeInput(input, numberOfLevels)

    input.light = input.light ?? defaultTheme.light
    input.dark = input.dark ?? defaultTheme.dark

    return {
      light: isPair(input.light)
        ? calcColorScale([input.light[1], input.light[0], input.light[1]], levels)
        : isTriple(input.light)
          ? calcColorScale(input.light, levels)
          : input.light,
      dark: isPair(input.dark)
        ? calcColorScale([input.dark[1], input.dark[0], input.dark[1]], levels)
        : isTriple(input.dark)
          ? calcColorScale(input.dark, levels)
          : input.dark,
    }
  }

  return defaultTheme
}

function createDefaultTheme(levels: Levels): Theme {
  return {
    light: calcColorScale(['hsl(0, 0%, 26%)', 'hsl(0, 0%, 92%)', 'hsl(0, 0%, 26%)'], levels),
    dark: calcColorScale(['hsl(0, 0%, 92%)', 'hsl(0, 0%, 22%)', 'hsl(0, 0%, 92%)'], levels),
  }
}

function validateThemeInput(input: ThemeInput, numberOfLevels: number) {
  const levelsHint =
    'The number of colors must match the number of activity levels controlled by the `minLevel` and `maxLevel` properties.'

  if (typeof input !== 'object' || (input.light === undefined && input.dark === undefined)) {
    throw new Error(
      `The theme object must contain at least one of the fields "light" and "dark" with exactly 2 or ${numberOfLevels} colors respectively. ${levelsHint}`,
    )
  }

  if (input.light) {
    const { length } = input.light
    if (length !== 2 && length !== 3 && length !== numberOfLevels) {
      throw new Error(
        `theme.light must contain exactly 2 or 3 or ${numberOfLevels} colors, ${length} passed. ${levelsHint}`,
      )
    }

    for (const c of input.light) {
      if (typeof window !== 'undefined' && !CSS.supports('color', c)) {
        throw new Error(`Invalid color "${c}" passed. All CSS color formats are accepted.`)
      }
    }
  }

  if (input.dark) {
    const { length } = input.dark
    if (length !== 2 && length !== 3 && length !== numberOfLevels) {
      throw new Error(
        `theme.dark must contain exactly 2 or 3 or ${numberOfLevels} colors, ${length} passed. ${levelsHint}`,
      )
    }

    for (const c of input.dark) {
      if (typeof window !== 'undefined' && !CSS.supports('color', c)) {
        throw new Error(`Invalid color "${c}" passed. All CSS color formats are accepted.`)
      }
    }
  }
}

function calcColorScale(
  [colorNeg, colorZero, colorPos]: [Color, Color, Color],
  { minLevel, maxLevel }: Levels,
): Array<Color> {
  return range(minLevel, maxLevel + 1).map(i => {
    if (i < 0) {
      if (i === minLevel) {
        return colorNeg
      }

      const pos = (1 - i / minLevel) * 100
      return `color-mix(in oklab, ${colorZero} ${parseFloat(pos.toFixed(2))}%, ${colorNeg})`
    }

    if (i === 0) {
      return colorZero
    }

    // i > 0
    if (i === maxLevel) {
      return colorPos
    }

    const pos = (i / maxLevel) * 100
    return `color-mix(in oklab, ${colorPos} ${parseFloat(pos.toFixed(2))}%, ${colorZero})`
  })
}

function isPair<T>(val: Array<T>): val is [T, T] {
  return val.length === 2
}

function isTriple<T>(val: Array<T>): val is [T, T, T] {
  return val.length === 3
}
