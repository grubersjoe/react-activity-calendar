import type { Color, ColorScale, Theme, ThemeInput } from '../types'
import { range } from './calendar'

export function createTheme(input?: ThemeInput, steps = 5): Theme {
  const defaultTheme = createDefaultTheme(steps)

  if (input) {
    validateThemeInput(input, steps)

    input.light = input.light ?? defaultTheme.light
    input.dark = input.dark ?? defaultTheme.dark

    return {
      light: isPair(input.light) ? calcColorScale(input.light, steps) : input.light,
      dark: isPair(input.dark) ? calcColorScale(input.dark, steps) : input.dark,
    }
  }

  return defaultTheme
}

function createDefaultTheme(steps: number): Theme {
  return {
    light: calcColorScale(['hsl(0, 0%, 92%)', 'hsl(0, 0%, 26%)'], steps),
    dark: calcColorScale(['hsl(0, 0%, 22%)', 'hsl(0, 0%, 92%)'], steps),
  }
}

function validateThemeInput(input: ThemeInput, steps: number) {
  const maxLevelHint = 'The number of colors is controlled by the "maxLevel" property.'

  if (typeof input !== 'object' || (input.light === undefined && input.dark === undefined)) {
    throw new Error(
      `The theme object must contain at least one of the fields "light" and "dark" with exactly 2 or ${steps} colors respectively. ${maxLevelHint}`,
    )
  }

  if (input.light) {
    const { length } = input.light
    if (length !== 2 && length !== steps) {
      throw new Error(
        `theme.light must contain exactly 2 or ${steps} colors, ${length} passed. ${maxLevelHint}`,
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
        `theme.dark must contain exactly 2 or ${steps} colors, ${length} passed. ${maxLevelHint}`,
      )
    }

    for (const c of input.dark) {
      if (typeof window !== 'undefined' && !CSS.supports('color', c)) {
        throw new Error(`Invalid color "${c}" passed. All CSS color formats are accepted.`)
      }
    }
  }
}

function calcColorScale([start, end]: [Color, Color], steps: number): ColorScale {
  return range(steps).map(i => {
    // In the loading animation the zero color is used.
    // However, Safari 16 crashes if a CSS color-mix expression like below is
    // combined with relative color syntax to calculate a hue variation for the
    // animation. Since the start and end colors do not need to be mixed, they
    // can be returned directly to work around this issue.
    switch (i) {
      case 0:
        return start
      case steps - 1:
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
