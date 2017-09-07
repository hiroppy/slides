'use strict';

const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output   : {comments: false},
      compress : {warnings: false},
      sourceMap: false
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
