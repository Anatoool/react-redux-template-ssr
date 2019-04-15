const webpackNodeExternals = require('webpack-node-externals');
const paths = require('./_paths');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: './server/index.js',
  output: {
    path: paths.appBuildServer,
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
        test: /\.(sass|css|scss)$/,
        use: 'ignore-loader',
      },
      {
        test: /\.svg$/,
        use: [
          { loader: 'svg-sprite-loader', options: {} },
          'svgo-loader',
        ],
      },
    ]
  },
  externals: [webpackNodeExternals()]
};