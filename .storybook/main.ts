import { StorybookConfig } from '@storybook/react-webpack5';

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
  webpackFinal: config => {
    if (config.module?.rules) {
      // Replace shipped CSS rule to support CSS modules and SCSS
      config.module.rules = config.module.rules.map(rule => {
        if (!rule || rule === '...') {
          return rule;
        }

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

        // Ignore asset/source imports (see below)
        if (rule.test?.toString() === '/\\.(mjs|tsx?|jsx?)$/') {
          return {
            ...rule,
            resourceQuery: { not: [/raw/] },
          };
        }

        return rule;
      });

      config.module.rules.push({
        resourceQuery: /raw/,
        type: 'asset/source',
        loader: 'string-replace-loader',
        options: {
          multiple: [{ search: '// @ts-nocheck\n', replace: '' }],
        },
      });
    }

    return config;
  },
};

export default config;
