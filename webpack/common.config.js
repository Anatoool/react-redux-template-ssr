const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const paths = require('./_paths');

const API_URL = process.env.API_URL || 'http://localhost:4000';
const API_VERSION = process.env.API_VERSION || '0.1';

module.exports = {
  entry: {
    vendor: paths.appVendorsJs,
    app: paths.appIndexJs,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    new CopyWebpackPlugin([
      { from: paths.appAssets, to: paths.appBuildAssets },
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: JSON.stringify(API_URL),
        API_VERSION: JSON.stringify(API_VERSION),
      },
    }),
    new ProgressBarPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.(woff2?|ttf|otf|eot)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.svg$/,
        use: [
          { loader: 'svg-sprite-loader', options: {} },
          'svgo-loader',
        ],
      },
    ],
  },
};
