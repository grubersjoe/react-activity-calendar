import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    brandTitle: 'React Activity Calendar',
    brandUrl: 'https://github.com/grubersjoe/react-activity-calendar',
  }),
});
