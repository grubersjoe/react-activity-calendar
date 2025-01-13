import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import copy from 'rollup-plugin-copy'
import filesize from 'rollup-plugin-filesize'
import externalDeps from 'rollup-plugin-peer-deps-external'
import { visualizer } from 'rollup-plugin-visualizer'

const extensions = ['.ts', '.tsx']

// Pass EXTERNAL_DEPS=false to bundle this project including all dependencies.
// Useful to analyze the bundle size.
const useExternal = process.env.EXTERNAL_DEPS?.toLowerCase() !== 'false'

export default {
  input: 'src/index.tsx',
  output: {
    file: 'build/index.js',
    format: 'cjs',
    sourcemap: true,
    exports: 'named',
    // Use 'auto' instead of 'default' for better interoperability with CRA etc.
    // https://rollupjs.org/guide/en/#outputinterop
    interop: 'auto',
    // Rollup does not support this React Server Components directive yet:
    // https://github.com/rollup/rollup/issues/4699
    banner: `'use client';`,
  },
  plugins: [
    replace({
      preventAssignment: true, // recommended to set this to true, will be default in the next major version
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    ...(useExternal ? [externalDeps({ includeDependencies: true })] : [commonjs()]),
    babel({
      extensions,
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    resolve({
      extensions,
    }),
    copy({
      targets: [{ src: 'src/*.d.ts', dest: 'build/' }],
    }),
    filesize(),
    visualizer({
      filename: 'bundle.html',
    }),
  ],
  onwarn(warning, warn) {
    if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.includes('use client')) {
      return // ignore the error for now
    }
    warn(warning)
  },
}
