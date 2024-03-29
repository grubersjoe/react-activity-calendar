import { DocsContainer } from '@storybook/addon-docs';
import { DocsContainerProps } from '@storybook/blocks';
import { Preview } from '@storybook/react';
import { ThemeVarsPartial, themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';

import './storybook.scss';

const common: ThemeVarsPartial = {
  base: 'light',
  brandTitle: 'React Activity Calendar',
  brandUrl: 'https://github.com/grubersjoe/react-activity-calendar',
};

export const preview: Preview = {
  parameters: {
    docs: {
      toc: true,
      container: (props: DocsContainerProps) => (
        <DocsContainer
          {...props}
          theme={{ ...common, ...(useDarkMode() ? themes.dark : themes.light) }}
        />
      ),
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
