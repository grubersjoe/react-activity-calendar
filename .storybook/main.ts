import type { StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
  addons: ['@storybook/addon-essentials', 'storybook-dark-mode'],
  core: {
    builder: 'webpack5',
  },
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  typescript: {
    reactDocgen: 'react-docgen',
  },
  webpackFinal: async config => {
    if (config?.module?.rules) {
      // Replace shipped CSS rule to support CSS modules and SCSS
      config.module.rules = config.module.rules.map(rule => {
        if (rule.test?.toString() === '/\\.css$/') {
          return {
            test: /\.(c|sc|sa)ss$/,
            sideEffects: true,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  modules: {
                    auto: true, // Auto-detect CSS modules based on filename (.module.css)
                    localIdentName: '[hash:base64]',
                  },
                },
              },
              'sass-loader',
            ],
          };
        }

        return rule;
      });
    }

    return config;
  },
};

module.exports = config;
