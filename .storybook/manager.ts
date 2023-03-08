import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'React Activity Calendar',
    brandUrl: 'https://github.com/grubersjoe/react-activity-calendar',
  }),
});
