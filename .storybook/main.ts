import { StorybookViteConfig } from '@storybook/builder-vite';

const config: StorybookViteConfig = {
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    return config;
  },
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  typescript: {
    reactDocgen: 'react-docgen',
  },
};

export default config;
