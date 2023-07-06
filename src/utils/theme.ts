import chroma from 'chroma-js';

import { LEVEL_COUNT } from '../constants';
import { Color, ColorScale, Theme, ThemeInput } from '../types';

export const defaultTheme = createTheme({
  light: ['hsl(0, 0%, 92%)', 'hsl(0, 0%, 26%)'],
  dark: ['hsl(0, 0%, 20%)', 'hsl(0, 0%, 92%)'],
});

export function createTheme(theme?: ThemeInput): Theme {
  if (theme) {
    validateTheme(theme);

    theme.light = theme.light ?? defaultTheme.light;
    theme.dark = theme.dark ?? defaultTheme.dark;

    return {
      light: isColorScale(theme.light) ? theme.light : createColorScale(theme.light),
      dark: isColorScale(theme.dark) ? theme.dark : createColorScale(theme.dark),
      layers: theme.layers,
    };
  }

  return defaultTheme;
}

function validateTheme(theme: ThemeInput) {
  if (typeof theme !== 'object' || (theme.light === undefined && theme.dark === undefined)) {
    throw new Error(
      `The theme object must contain at least one of the fields "light" and "dark" with exactly 2 or ${LEVEL_COUNT} colors respectively.`,
    );
  }

  if (theme.light) {
    const { length } = theme.light;
    if (length !== 2 && length !== LEVEL_COUNT) {
      throw new Error(
        `theme.light must contain exactly 2 or ${LEVEL_COUNT} colors, ${length as number} passed.`,
      );
    }
  }

  if (theme.dark) {
    const { length } = theme.dark;
    if (length !== 2 && length !== LEVEL_COUNT) {
      throw new Error(
        `theme.dark must contain exactly 2 or ${LEVEL_COUNT} colors, ${length as number} passed.`,
      );
    }
  }

  if (theme.layers) {
    Object.values(theme.layers).forEach(c => {
      if (!chroma.valid(c)) {
        throw new Error(`theme.layers has invalid color ${c}`);
      }
    });
  }
}

function isColorScale(colors: Array<unknown>): colors is ColorScale {
  const invalidColor = colors.find(color => !chroma.valid(color));

  if (invalidColor) {
    throw new Error(`Invalid color "${invalidColor}" passed. All CSS color formats are accepted.`);
  }

  return colors.length === LEVEL_COUNT;
}

function createColorScale(colors: [from: Color, to: Color]): ColorScale {
  return chroma.scale(colors).mode('lch').colors(LEVEL_COUNT) as ColorScale;
}
