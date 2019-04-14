const webpackNodeExternals = require('webpack-node-externals');
const paths = require('./_paths');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './server/index.js',
  output: {
    path: paths.appBuild,
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  externals: [webpackNodeExternals()]
};