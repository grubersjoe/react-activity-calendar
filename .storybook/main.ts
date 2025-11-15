import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.stories.@(ts|tsx)', '../src/**/*.mdx'],
  addons: ['@storybook/addon-docs', '@storybook/addon-links', '@vueless/storybook-dark-mode'],
  features: {
    actions: false,
    interactions: false,
  },
  typescript: {
    reactDocgen: 'react-docgen',
  },
}

export default config
