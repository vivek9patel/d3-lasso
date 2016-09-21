import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'index.js',
  format: 'umd',
  globals: {
    "d3-selection": "d3"
  },
  moduleName: "d3",
  dest: 'build/d3-lasso.js',
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true,
      extensions: ['.js', '.jsx'],
      skip: [ 'd3-selection']
    }),
    commonjs({
      include: 'node_modules/**',
      exclude: [ 'node_modules/d3-selection/']
    })
  ]
};