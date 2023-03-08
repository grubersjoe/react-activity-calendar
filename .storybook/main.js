module.exports = {
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite',
  },
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  typescript: {
    reactDocgen: 'react-docgen',
  },
};
