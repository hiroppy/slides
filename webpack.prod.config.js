'use strict';

const webpack       = require('webpack');
const OfflinePlugin = require('offline-plugin');

module.exports = {
  plugins: [
    new OfflinePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
