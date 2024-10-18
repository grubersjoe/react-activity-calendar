import { useEffect, useState } from 'react';
import type { Color, ColorScale, Theme, ThemeInput } from '../types';
import { range } from '../utils/calendar';

export function useTheme(input?: ThemeInput, steps: number = 5): Theme {
  const defaultTheme = createDefaultTheme(steps);
  input = useValidatedInput(input, steps);

  if (input) {
    input.light = input.light ?? defaultTheme.light;
    input.dark = input.dark ?? defaultTheme.dark;

    return {
      light: isPair(input.light) ? calcColorScale(input.light, steps) : input.light,
      dark: isPair(input.dark) ? calcColorScale(input.dark, steps) : input.dark,
    };
  }

  return defaultTheme;
}

function createDefaultTheme(steps: number): Theme {
  return {
    light: calcColorScale(['hsl(0, 0%, 92%)', 'hsl(0, 0%, 26%)'], steps),
    dark: calcColorScale(['hsl(0, 0%, 22%)', 'hsl(0, 0%, 92%)'], steps),
  };
}

function useValidatedInput(input: ThemeInput | undefined, steps: number) {
  const [validated, setValidated] = useState<ThemeInput>();

  // Make the input object comparable
  const inputKey = JSON.stringify(input);

  useEffect(() => {
    if (input === undefined) {
      setValidated(input);
      return;
    }

    if (typeof input !== 'object' || (input.light === undefined && input.dark === undefined)) {
      throw new Error(
        `The theme object must contain at least one of the fields "light" and "dark" with exactly 2 or ${steps} colors respectively.`,
      );
    }

    if (input.light) {
      const { length } = input.light;
      if (length !== 2 && length !== steps) {
        throw new Error(`theme.light must contain exactly 2 or ${steps} colors, ${length} passed.`);
      }

      for (const c of input.light) {
        if (!CSS.supports('color', c)) {
          throw new Error(
            `Invalid color "${String(c)}" passed. All CSS color formats are accepted.`,
          );
        }
      }
    }

    if (input.dark) {
      const { length } = input.dark;
      if (length !== 2 && length !== steps) {
        throw new Error(`theme.dark must contain exactly 2 or ${steps} colors, ${length} passed.`);
      }

      for (const c of input.dark) {
        if (!CSS.supports('color', c)) {
          throw new Error(
            `Invalid color "${String(c)}" passed. All CSS color formats are accepted.`,
          );
        }
      }
    }

    setValidated(input);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputKey, steps]);

  return validated;
}

function calcColorScale(colors: [from: Color, to: Color], steps: number): ColorScale {
  return range(steps).map(i => {
    const mixFactor = (i / (steps - 1)) * 100;
    return `color-mix(in oklab, ${colors[1]} ${parseFloat(mixFactor.toFixed(2))}%, ${colors[0]})`;
  });
}

function isPair<T>(val: T[]): val is [T, T] {
  return val.length === 2;
}
