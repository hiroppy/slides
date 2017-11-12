'use strict';

const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot        : true,
    port       : 8080,
    inline     : true,
    contentBase: '.'
  }
};
