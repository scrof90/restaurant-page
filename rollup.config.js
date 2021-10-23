// rollup.config.js
import { terser } from 'rollup-plugin-terser';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';

const devMode = process.env.NODE_ENV === 'development';
console.log(`${devMode ? 'development' : 'production'} mode bundle`);

export default [
  {
    // ES6
    input: 'src/index.js',

    watch: {
      include: 'src/**',
      clearScreen: false
    },

    output: {
      file: 'build/bundle.js',
      format: 'es',
      sourcemap: devMode ? 'inline' : false,
      plugins: [
        terser({
          ecma: 2020,
          mangle: { toplevel: true },
          compress: {
            module: true,
            toplevel: true,
            unsafe_arrows: true,
            drop_console: !devMode,
            drop_debugger: !devMode
          },
          output: { quote_style: 1 }
        })
      ]
    }
  },
  {
    // ES5
    input: 'src/index.js',

    plugins: [
      // https://github.com/terser/terser#minify-options
      terser({
        ecma: '5',
        mangle: true,
        compress: {
          module: true,
          toplevel: true,
          unsafe_arrows: true,
          drop_console: !devMode,
          drop_debugger: !devMode
        }
      }),
      getBabelOutputPlugin({
        presets: [['@babel/preset-env']]
      })
    ],

    output: {
      file: 'build/bundle-es5.js',
      format: 'cjs',
      sourcemap: false
    }
  }
];
