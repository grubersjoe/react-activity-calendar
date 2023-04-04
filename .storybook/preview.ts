import { ThemeVars, themes } from '@storybook/theming';

import './storybook.scss';

const common: ThemeVars = {
  base: 'light',
  brandTitle: 'React Activity Calendar',
  brandUrl: 'https://github.com/grubersjoe/react-activity-calendar',
};

export const parameters = {
  darkMode: {
    stylePreview: true,
    dark: { ...common, ...themes.dark },
    light: { ...common, ...themes.light },
  },
};
