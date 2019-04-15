const webpackNodeExternals = require('webpack-node-externals');
const paths = require('./_paths');

module.exports = {
  mode: 'production',
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
        exclude: /node_modules/,
      },
      {
        test: /\.(sass|css|scss|svg)$/,
        use: 'ignore-loader',
      }
    ]
  },
  externals: [webpackNodeExternals()]
};