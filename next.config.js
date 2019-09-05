const withTypescript = require('@zeit/next-typescript');
const Dotenv = require('dotenv-webpack');

module.exports = withTypescript({
  webpack(config, options) {
    config.plugins.push(new Dotenv());
    return config;
  },
});
