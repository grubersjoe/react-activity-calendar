const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  typescript: {
    reactDocgen: 'react-docgen',
  },

  // CSS modules
  webpackFinal: async config => {
    config.module.rules = config.module.rules.filter(f => f.test.toString() !== '/\\.css$/');
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true, // <<<
          },
        },
      ],
      include: path.resolve(__dirname, '../src'),
    });

    return config;
  },
};
