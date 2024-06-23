import { DocsContainer, type DocsContainerProps } from '@storybook/blocks';
import type { Preview } from '@storybook/react';
import { type ThemeVarsPartial, themes } from '@storybook/theming';
import { useEffect, useState } from 'react';

import './storybook.scss';

const baseTheme: ThemeVarsPartial = {
  base: 'light',
  brandTitle: 'React Activity Calendar',
  brandUrl: 'https://github.com/grubersjoe/react-activity-calendar',
};

const Container = (props: DocsContainerProps) => {
  // We can't simply use `useDarkMode()` because Storybook sucks:
  // "Storybook preview hooks can only be called inside decorators and story functions."
  const [theme, setTheme] = useState(
    document.body.classList.contains('dark') ? themes.dark : themes.light,
  );

  useEffect(() => {
    const observer = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'class') {
          setTheme(document.body.classList.contains('dark') ? themes.dark : themes.light);
        }
      }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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
