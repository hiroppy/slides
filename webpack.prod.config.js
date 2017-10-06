'use strict';

const webpack       = require('webpack');
const OfflinePlugin = require('offline-plugin');

module.exports = {
  plugins: [
    new OfflinePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output   : {comments: false},
      compress : {warnings: false},
      sourceMap: false
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
