import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  core: {
    builder: '@storybook/builder-vite',
  },
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      },
    },
    '@storybook/addon-links',
    'storybook-dark-mode',
  ],
  typescript: {
    reactDocgen: 'react-docgen',
  },
};

export default config;
