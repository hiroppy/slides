'use strict';

const webpack           = require('webpack');
const MinifyPlugin      = require('babel-minify-webpack-plugin');
const OfflinePlugin     = require('offline-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use : ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use     : [
            'css-loader', // dont't use css-modules
            'postcss-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new OfflinePlugin(),
    new MinifyPlugin(),
    new ExtractTextPlugin('[contenthash].css'),
    new webpack.LoaderOptionsPlugin({ minimize: true }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
