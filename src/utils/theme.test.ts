import { Theme, ThemeInput } from '../types';
import { createTheme } from './theme';

describe('createTheme', () => {
  const defaultTheme = {
    light: ['#ebebeb', '#bdbdbd', '#929292', '#696969', '#424242'],
    dark: ['#333333', '#5c5c5c', '#898989', '#b9b9b9', '#ebebeb'],
  };

  const explicitTheme: Theme = {
    light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
    dark: ['hsl(0, 0%, 22%)', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
  };

  test('returns the default theme if no input is passed', () => {
    expect(createTheme()).toStrictEqual(defaultTheme);
  });

  test('throws an error if input is not an object', () => {
    // @ts-ignore
    expect(() => createTheme('invalid')).toThrow();
  });

  test('throws an error if neither "light" or "dark" inputs are set', () => {
    // @ts-ignore
    expect(() => createTheme({})).toThrow();
  });

  test('throws an error if too few colors are passed', () => {
    expect(() =>
      createTheme(
        {
          light: ['blue'],
        },
        2,
      ),
    ).toThrow();
  });

  test('throws an error if too many colors are passed', () => {
    expect(() =>
      createTheme(
        {
          dark: Array(4).fill('green'),
        },
        3,
      ),
    ).toThrow();
  });

  test('uses default dark color scale if undefined in input', () => {
    expect(
      createTheme({
        light: explicitTheme.light,
      }),
    ).toStrictEqual<Theme>({
      light: explicitTheme.light,
      dark: defaultTheme.dark,
    });
  });

  test('uses default light color scale if undefined in input', () => {
    expect(
      createTheme({
        dark: explicitTheme.dark,
      }),
    ).toStrictEqual<Theme>({
      light: defaultTheme.light,
      dark: explicitTheme.dark,
    });
  });

  test('throws if an invalid color is passed', () => {
    expect(() =>
      createTheme({
        dark: ['#333', '🙃'],
      }),
    ).toThrow();
  });

  test('returns the same value for explicit inputs', () => {
    expect(createTheme(explicitTheme)).toStrictEqual(explicitTheme);
  });

  test('calculates color scales for minimal input', () => {
    const input: ThemeInput = {
      light: ['hsl(0, 0%, 92%)', 'hsl(0, 0%, 26%)'],
      dark: ['hsl(0, 0%, 20%)', 'hsl(0, 0%, 92%)'],
    };

    const actual = createTheme(input);
    expect(actual.light).toHaveLength(5);
    expect(actual.dark).toHaveLength(5);
  });

  test('calculates color scales with correct size', () => {
    const input: ThemeInput = {
      light: ['hsl(0, 0%, 92%)', 'hsl(0, 0%, 26%)'],
      dark: ['hsl(0, 0%, 20%)', 'hsl(0, 0%, 92%)'],
    };

    const actual = createTheme(input, 3);
    expect(actual.light).toHaveLength(3);
    expect(actual.dark).toHaveLength(3);
  });
});
