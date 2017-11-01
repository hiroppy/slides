'use strict';

const webpack       = require('webpack');
const MinifyPlugin  = require('babel-minify-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

module.exports = {
  plugins: [
    new OfflinePlugin(),
    new MinifyPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
