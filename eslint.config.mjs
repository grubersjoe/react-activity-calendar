// @ts-check
import { fixupPluginRules } from '@eslint/compat';
import eslint from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';
import typescript from 'typescript-eslint';

export default typescript.config(
  eslint.configs.recommended,
  ...typescript.configs.strictTypeChecked,
  {
    ignores: [
      'build/',
      'coverage/',
      'docs/',
      'examples/',
      'eslint.config.mjs',
      'rollup.config.mjs',
      'vite.config.mts',
    ],
  },
  {
    rules: {
      '@typescript-eslint/restrict-template-expressions': 'off',
      'no-console': 'error',
    },
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    ...react,
    languageOptions: {
      ...react.languageOptions,
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/display-name': 1,
      'react/react-in-jsx-scope': 0,
    },
  },
  {
    plugins: {
      'react-hooks': fixupPluginRules(reactHooks),
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
);
