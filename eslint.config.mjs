import eslint from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import pluginTypeScript from 'typescript-eslint'

export default pluginTypeScript.config(
  eslint.configs.recommended,
  pluginTypeScript.configs.strictTypeChecked,
  pluginTypeScript.configs.stylisticTypeChecked,
  {
    rules: {
      'no-console': 'error',
      '@typescript-eslint/array-type': ['error', { default: 'generic' }],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/non-nullable-type-assertion-style': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: pluginReactHooks.configs.recommended.rules,
  },
  {
    // Note: there must be no other properties in this object
    ignores: ['build/', 'coverage/', 'docs/', 'examples/', 'rollup.config.mjs'],
  },
)
