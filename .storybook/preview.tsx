import { DocsContainer } from '@storybook/addon-docs';
import type { DocsContainerProps } from '@storybook/blocks';
import type { Preview } from '@storybook/react';
import { type ThemeVarsPartial, themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';

import './storybook.scss';

const common: ThemeVarsPartial = {
  base: 'light',
  brandTitle: 'React Activity Calendar',
  brandUrl: 'https://github.com/grubersjoe/react-activity-calendar',
};

const Container = (props: DocsContainerProps) => (
  <DocsContainer
    {...props}
    theme={{
      ...common,
      ...(useDarkMode() ? themes.dark : themes.light),
    }}
  />
);

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
      dark: { ...common, ...themes.dark },
      light: { ...common, ...themes.light },
    },
  },
};

export default preview;
