const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true, url: false } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: 'styles.css' })],
});
