import CopyPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import NodePolyfillWebpackPlugin from 'node-polyfill-webpack-plugin';
import path from 'path';
import 'webpack-dev-server';

module.exports = (env) => {
  const isProduction = env.NODE_ENV === 'production';
  return {
    mode: isProduction ? 'production' : 'development',
    entry: {
      offchain: './node_modules/offchain/dist/index.js',
      ui: path.resolve(__dirname, 'src/index.tsx'),
    },
    target: 'web',
    devtool: 'eval-source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
    },

    stats: { errorDetails: true },

    devServer: {
      hot: true,
      port: 4008,
      headers: {
        'Access-Control-Allow-Origin': env.ALLOW_ORIGIN,
        'Access-Control-Allow-Methods':
          'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers':
          'X-Requested-With, content-type, Authorization',
      },
      client: {
        overlay: false,
        webSocketURL: env.WEB_SOCKET_URL ?? 'ws://localhost:4008/ws',
      },
      proxy: {
        '/kupo': {
          // KUPO_HOST env variable must be set to the base URL of the Kupo
          // service, otherwise all requests to Kupo will fail.
          target: env.KUPO_HOST ?? 'http://localhost:1442',
          changeOrigin: true,
          pathRewrite: { '^/kupo': '' },
        },
      },
      historyApiFallback: true,
      allowedHosts: isProduction ? ['.donat-pool.io'] : 'auto',
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        inject: 'body',
        publicPath: '/',
      }),
      new CopyPlugin({
        patterns: [
          {
            from: 'node_modules/offchain/dist/',
            to: path.resolve(__dirname, 'dist'),
          },
        ],
      }),
      new NodePolyfillWebpackPlugin(),
      new Dotenv({
        path: `./.env.local`,
      }),
    ].filter(Boolean),
    experiments: {
      asyncWebAssembly: true,
      syncWebAssembly: true,
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: [
                  '@babel/preset-env',
                  ['@babel/preset-react', { runtime: 'automatic' }],
                  '@babel/preset-typescript',
                ],
                plugins: ['@babel/plugin-transform-runtime'],
              },
            },
          ],
        },
        {
          test: /\.plutus$/i,
          type: 'asset/source',
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(eot|svg|ttf|png|jpg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },

    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
  };
};
