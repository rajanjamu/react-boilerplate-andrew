const path = require('path');
const webpack = require('webpack');
require('dotenv').config({ path: '.env' });

module.exports = {
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public', 'dist'),
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'FIREBASE_API_KEY',
      'FIREBASE_AUTH_DOMAIN',
      'FIREBASE_DATABASE_URL',
      'FIREBASE_PROJECT_ID',
      'FIREBASE_STORAGE_BUCKET',
      'FIREBASE_MESSAGING_SENDER_ID',
      'FIREBASE_APP_ID',
      'FIREBASE_MEASUREMENT_ID',
    ]),
  ],
};
