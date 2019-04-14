const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const paths = require('./_paths');
const common = require('./common.config.js');

const devConfig = {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(paths.appSrc),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sass|css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: ['./src/styles/variables.sass'],
            },
          },
        ],
      },
    ],
  },
};

module.exports = merge(common, devConfig);
