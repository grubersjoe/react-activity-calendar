import { LEVEL_COUNT } from '../constants';
import { Theme, ThemeInput } from '../types';
import { createTheme, defaultTheme } from './theme';

describe('createTheme', () => {
  const explicitTheme: Theme = {
    light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
    dark: ['hsl(0, 0%, 22%)', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
    layers: {
      "layer_0": "red",
      "layer_1": "blue"
    }
  };

  test('returns the default theme if no input is passed', () => {
    expect(createTheme()).toEqual(defaultTheme);
  });

  test('throws an error if input is not an object', () => {
    expect(() =>
      createTheme(
        // @ts-ignore
        'invalid',
      ),
    ).toThrowError();
  });

  test('throws an error if neither "light" or "dark" inputs are set', () => {
    expect(() =>
      createTheme(
        // @ts-ignore
        {},
      ),
    ).toThrowError();
  });

  test('throws an error if too few colors are passed', () => {
    expect(() =>
      createTheme({
        // @ts-ignore
        light: ['blue'],
      }),
    ).toThrowError();
  });

  test('throws an error if too many colors are passed', () => {
    expect(() =>
      createTheme({
        // @ts-ignore
        dark: Array(LEVEL_COUNT + 1).fill('blue'),
      }),
    ).toThrowError();
  });

  test('uses default dark color scale if undefined in input', () => {
    expect(
      createTheme({
        light: explicitTheme.light,
      }),
    ).toEqual<Theme>({
      light: explicitTheme.light,
      dark: defaultTheme.dark,
    });
  });

  test('uses default light color scale if undefined in input', () => {
    expect(
      createTheme({
        dark: explicitTheme.dark,
      }),
    ).toEqual<Theme>({
      light: defaultTheme.light,
      dark: explicitTheme.dark,
    });
  });

  test('throws if an invalid color is passed', () => {
    expect(() =>
      createTheme({
        dark: ['#333', '🙃'],
      }),
    ).toThrowError();
  });

  test('returns the same value for explicit inputs', () => {
    expect(createTheme(explicitTheme)).toEqual(explicitTheme);
  });

  test('calculates color scales for minimal input', () => {
    const input: ThemeInput = {
      light: ['hsl(0, 0%, 92%)', 'hsl(0, 0%, 26%)'],
      dark: ['hsl(0, 0%, 20%)', 'hsl(0, 0%, 92%)'],
    };

    const actual = createTheme(input);
    expect(actual.light).toHaveLength(LEVEL_COUNT);
    expect(actual.dark).toHaveLength(LEVEL_COUNT);
  });

  test('throws if invalid color configured on layers', () => {
    const input: ThemeInput = {
      light: ['hsl(0, 0%, 92%)', 'hsl(0, 0%, 26%)'],
      dark: ['hsl(0, 0%, 20%)', 'hsl(0, 0%, 92%)'],
      layers: {
        a: '🤪'
      }
    };
    expect(() => 
      createTheme(input),
    ).toThrowError();
  });
});
