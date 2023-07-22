import { StorybookConfig } from '@storybook/react-webpack5';
import { RuleSetRule } from 'webpack';

const config: StorybookConfig = {
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
  core: {},
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  docs: {
    autodocs: true,
  },
  typescript: {
    reactDocgen: 'react-docgen',
  },
  webpackFinal: async config => {
    if (config?.module?.rules) {
      // Replace shipped CSS rule to support CSS modules and SCSS
      config.module.rules = config.module.rules.map(rule => {
        if ((rule as RuleSetRule).test?.toString() === '/\\.css$/') {
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
                    auto: true,
                    // Auto-detect CSS modules based on filename (.module.css)
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
