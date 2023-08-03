/** @type {import('next').NextConfig} */

const path = require('node:path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: './node_modules/offchain/dist',
            to: path.resolve(__dirname, 'public/offchain'),
          },
        ],
      }),
    );

    return config;
  },
};
