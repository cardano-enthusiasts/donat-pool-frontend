import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import 'webpack-dev-server';

const isProduction = process.env.NODE_ENV === 'production';

// const stylesHandler = isProduction
//   ? MiniCssExtractPlugin.loader
//   : 'style-loader';

const config = {
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
    port: 4010,
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
    proxy: {
      '/kupo': {
        // KUPO_HOST env variable must be set to the base URL of the Kupo
        // service, otherwise all requests to Kupo will fail.
        target: process.env.KUPO_HOST ?? 'http://localhost:1442',
        changeOrigin: true,
        pathRewrite: { '^/kupo': '' },
      },
    },
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'node_modules/offchain/dist/',
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
  ].filter(Boolean),

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
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(eot|svg|ttf|png|jpg|gif)$/i,
        type: 'asset',
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

export default config;
