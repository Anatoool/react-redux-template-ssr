const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const paths = require('./_paths');
const config = require('./dev.config');

const { API_URL = 'http://localhost:4000' } = process.env;

const Port = 3000;
const Host = '0.0.0.0';

const options = {
  host: Host,
  hot: true,
  overlay: {
    warnings: false,
    errors: true,
  },
  quiet: false,
  noInfo: false,
  contentBase: paths.appSrc,
  // watchContentBase: true,
  historyApiFallback: true,
  proxy: {
    '/api/**': {
      target: API_URL,
      secure: false,
      changeOrigin: true,
    },
  },
};

WebpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, options);

server.listen(Port, Host, () => {});
process.stdout.write(`dev server is running: http://${Host}:${Port}\n`);
