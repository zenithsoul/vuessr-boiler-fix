const webpack = require('webpack');
const merge = require('webpack-merge');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const PATHS = {
  src: path.join(__dirname, './app')
}

const baseConfig = require('./webpack.base.js');

const isProduction = process.env.NODE_ENV === 'production';

let config = merge(baseConfig, {
  entry: ['./app/entry-client.js'],
  plugins: [new VueSSRClientPlugin()],
  output: {
    path: path.resolve('./dist/'),
    filename: '[name].[hash:8].js',
    publicPath: '/dist/',
  },
  module: {
    rules: [/*
      {
        test: /\.css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                // localIdentName: '[local]_[hash:base64:8]',
                localIdentName: '[sha1:hash:hex:4]',
              },
            },
          },
        ],
      },*/
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules:{
                // localIdentName: '[local]_[hash:base64:8]',
                // localIdentName: '_[hash:base64:4]',
                localIdentName: isProduction ? '_[hash:base64:4]' : '[local]_[hash:base64:8]',
              }
            }
          },
          'sass-loader',
        ]
      },
    ],
  },
});

if (!isProduction) {
  config = merge(config, {
    output: {
      filename: '[name].js',
      chunkFilename: '[name].chunk.js',
      publicPath: 'http://localhost:9999/dist/',
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devtool: 'source-map',
    devServer: {
      writeToDisk: true,
      contentBase: path.resolve(__dirname, 'dist'),
      publicPath: 'http://localhost:9999/dist/',
      hot: true,
      inline: true,
      historyApiFallback: true,
      port: 9999,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '_',
      }
    }
  });
} else {
  config = merge(config, {
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name]_[base64:8].css',
      }),
    ],
  });
}

module.exports = config;
