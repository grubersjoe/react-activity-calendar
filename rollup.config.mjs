import babel from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';
import external from 'rollup-plugin-peer-deps-external';
import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';

import pkg from './package.json' assert { type: "json" };

const extensions = [ '.ts', '.tsx'];

export default {
  input: 'src/index.ts',
  output: {
    file: pkg.main,
    format: 'cjs',
    sourcemap: true,
    exports: 'named',
  },
  plugins: [
    external({
      includeDependencies: true,
    }),
    postcss({
      modules: true,
    }),
    babel({
      extensions,
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    resolve({
      extensions,
    }),
    copy({
      targets: [{ src: 'src/*.d.ts', dest: 'build/' }],
    }),
    filesize(),
  ],
};
