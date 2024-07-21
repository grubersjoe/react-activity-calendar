import { DocsContainer, type DocsContainerProps } from '@storybook/blocks';
import type { Preview } from '@storybook/react';
import { type ThemeVarsPartial, themes } from '@storybook/theming';
import { useEffect, useState } from 'react';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';

import './storybook.scss';

const baseTheme: ThemeVarsPartial = {
  base: 'light',
  brandTitle: 'React Activity Calendar',
  brandUrl: 'https://github.com/grubersjoe/react-activity-calendar',
};

const Container = (props: DocsContainerProps) => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState(prefersDark ? themes.dark : themes.light);

  // useDarkMode() cannot be used for doc pages anymore:
  // https://github.com/hipstersmoothie/storybook-dark-mode/issues/282
  // Workaround:
  useEffect(() => {
    const listener = (isDark: boolean) => {
      setTheme(isDark ? themes.dark : themes.light);
    };

    props.context.channel.on(DARK_MODE_EVENT_NAME, listener);

    return () => {
      props.context.channel.removeListener(DARK_MODE_EVENT_NAME, listener);
    };
  }, [props.context.channel]);

  return (
    <DocsContainer
      {...props}
      theme={{
        ...baseTheme,
        ...theme,
      }}
    />
  );
};

export const preview: Preview = {
  parameters: {
    docs: {
      toc: true,
      container: Container,
      source: {
        language: 'tsx',
      },
    },
    darkMode: {
      stylePreview: true,
      dark: { ...baseTheme, ...themes.dark },
      light: { ...baseTheme, ...themes.light },
    },
  },
};

export default preview;
