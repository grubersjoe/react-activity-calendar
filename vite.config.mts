import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { replaceCodePlugin as replace } from 'vite-plugin-replace';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
    replace({
      replacements: [
        {
          from: '// @ts-nocheck', // examples
          to: '',
        },
      ],
    }),
  ],
});
