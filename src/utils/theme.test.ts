import { beforeEach, describe, expect, it } from '@jest/globals';

import type { Theme, ThemeInput } from '../types';
import { createTheme } from './theme';

describe('createTheme', () => {
  const defaultTheme = {
    light: [
      'color-mix(in oklab, hsl(0, 0%, 26%) 0%, hsl(0, 0%, 92%))',
      'color-mix(in oklab, hsl(0, 0%, 26%) 25%, hsl(0, 0%, 92%))',
      'color-mix(in oklab, hsl(0, 0%, 26%) 50%, hsl(0, 0%, 92%))',
      'color-mix(in oklab, hsl(0, 0%, 26%) 75%, hsl(0, 0%, 92%))',
      'color-mix(in oklab, hsl(0, 0%, 26%) 100%, hsl(0, 0%, 92%))',
    ],
    dark: [
      'color-mix(in oklab, hsl(0, 0%, 92%) 0%, hsl(0, 0%, 22%))',
      'color-mix(in oklab, hsl(0, 0%, 92%) 25%, hsl(0, 0%, 22%))',
      'color-mix(in oklab, hsl(0, 0%, 92%) 50%, hsl(0, 0%, 22%))',
      'color-mix(in oklab, hsl(0, 0%, 92%) 75%, hsl(0, 0%, 22%))',
      'color-mix(in oklab, hsl(0, 0%, 92%) 100%, hsl(0, 0%, 22%))',
    ],
  };

  const explicitTheme: Theme = {
    light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
    dark: ['hsl(0, 0%, 22%)', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
  };

  beforeEach(() => {
    global.CSS = {
      // @ts-expect-error No clue how to fix this
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      supports: (_k, _v) => true,
    };
  });

  it('returns the default theme if no input is passed', () => {
    expect(createTheme()).toStrictEqual(defaultTheme);
  });

  it('throws an error if input is not an object', () => {
    // @ts-expect-error test invalid input
    expect(() => createTheme('invalid')).toThrow();
  });

  it('throws an error if neither "light" or "dark" inputs are set', () => {
    // @ts-expect-error test invalid input
    expect(() => createTheme({})).toThrow();
  });

  it('throws an error if too few colors are passed', () => {
    expect(() =>
      createTheme(
        {
          light: ['blue'],
        },
        2,
      ),
    ).toThrow();
  });

  it('throws an error if too many colors are passed', () => {
    expect(() =>
      createTheme(
        {
          dark: Array(4).fill('green'),
        },
        3,
      ),
    ).toThrow();
  });

  it('uses default dark color scale if undefined in input', () => {
    expect(
      createTheme({
        light: explicitTheme.light,
      }),
    ).toStrictEqual({
      light: explicitTheme.light,
      dark: defaultTheme.dark,
    });
  });

  it('uses default light color scale if undefined in input', () => {
    expect(
      createTheme({
        dark: explicitTheme.dark,
      }),
    ).toStrictEqual({
      light: defaultTheme.light,
      dark: explicitTheme.dark,
    });
  });

  it('throws if an invalid color is passed', () => {
    global.CSS = {
      // @ts-expect-error No clue how to fix this
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      supports: (_k, _v) => false,
    };
    expect(() =>
      createTheme({
        dark: ['#333', '🙃'],
      }),
    ).toThrow();
  });

  it('returns the same value for explicit inputs', () => {
    expect(createTheme(explicitTheme)).toStrictEqual(explicitTheme);
  });

  it('calculates color scales for minimal input', () => {
    const input: ThemeInput = {
      light: ['hsl(0, 0%, 92%)', 'hsl(0, 0%, 26%)'],
      dark: ['hsl(0, 0%, 20%)', 'hsl(0, 0%, 92%)'],
    };

    const actual = createTheme(input);
    expect(actual.light).toHaveLength(5);
    expect(actual.dark).toHaveLength(5);
  });

  it('calculates color scales with correct size', () => {
    const input: ThemeInput = {
      light: ['hsl(0, 0%, 92%)', 'hsl(0, 0%, 26%)'],
      dark: ['hsl(0, 0%, 20%)', 'hsl(0, 0%, 92%)'],
    };

    const actual = createTheme(input, 3);
    expect(actual.light).toHaveLength(3);
    expect(actual.dark).toHaveLength(3);
  });
});
