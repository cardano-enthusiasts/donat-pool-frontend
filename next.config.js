const path = require('node:path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'node_modules/offchain/dist'),
            to: path.resolve(__dirname, 'public/offchain'),
          },
        ],
      }),
    );

    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  output: 'standalone',
};
