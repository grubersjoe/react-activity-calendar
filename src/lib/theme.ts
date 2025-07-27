import type { Color, ColorScale, Levels, Theme, ThemeInput } from '../types'
import { range } from './calendar'

export function createTheme(input?: ThemeInput, levels: Levels = { min: 0, max: 4 }): Theme {
  const defaultTheme = createDefaultTheme(levels)
  const steps = levels.max - levels.min + 1

  if (input) {
    validateThemeInput(input, steps)

    input.light = input.light ?? defaultTheme.light
    input.dark = input.dark ?? defaultTheme.dark

    return {
      light: isPair(input.light) ? calcColorScale(input.light, levels) : input.light,
      dark: isPair(input.dark) ? calcColorScale(input.dark, levels) : input.dark,
    }
  }

  return defaultTheme
}

function createDefaultTheme(levels: Levels): Theme {
  return {
    light: calcColorScale(['hsl(0, 0%, 92%)', 'hsl(0, 0%, 26%)'], levels),
    dark: calcColorScale(['hsl(0, 0%, 22%)', 'hsl(0, 0%, 92%)'], levels),
  }
}

function validateThemeInput(input: ThemeInput, steps: number) {
  const levelsHint =
    'The number of colors must match the number of activity levels controlled by the `levels` prop.'

  if (typeof input !== 'object' || (input.light === undefined && input.dark === undefined)) {
    throw new Error(
      `The theme object must contain at least one of the fields "light" and "dark" with exactly 2 or ${steps} colors respectively. ${levelsHint}`,
    )
  }

  if (input.light) {
    const { length } = input.light
    if (length !== 2 && length !== steps) {
      throw new Error(
        `theme.light must contain exactly 2 or ${steps} colors, ${length} passed. ${levelsHint}`,
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
    if (length !== 2 && length !== steps) {
      throw new Error(
        `theme.dark must contain exactly 2 or ${steps} colors, ${length} passed. ${levelsHint}`,
      )
    }

    for (const c of input.dark) {
      if (typeof window !== 'undefined' && !CSS.supports('color', c)) {
        throw new Error(`Invalid color "${c}" passed. All CSS color formats are accepted.`)
      }
    }
  }
}

function calcColorScale([start, end]: [Color, Color], levels: Levels): ColorScale {
  const maxIndex = levels.max + levels.min * -1
  const steps = levels.max - levels.min + 1

  return range(0, maxIndex + 1).map(i => {
    // In the loading animation the zero color is used.
    // However, Safari 16 crashes if a CSS color-mix expression like below is
    // combined with relative color syntax to calculate a hue variation for the
    // animation. Since the start and end colors do not need to be mixed, they
    // can be returned directly to work around this issue.
    switch (i) {
      case 0:
        return start
      case maxIndex:
        return end
      default: {
        const pos = (i / (steps - 1)) * 100
        return `color-mix(in oklab, ${end} ${parseFloat(pos.toFixed(2))}%, ${start})`
      }
    }
  })
}

function isPair<T>(val: Array<T>): val is [T, T] {
  return val.length === 2
}
