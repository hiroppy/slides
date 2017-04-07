'use strict';

const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('babel-polyfill');

const config = process.env.NODE_ENV !== 'production' ?
  require('./webpack.dev.config') :
  require('./webpack.prod.config');

let slides = [
  'hello',
  'node8',
  'node-whatwg-url'
];

module.exports = (env) => {
  if (process.env.NODE_ENV !== 'production') {
    slides.includes(env.name) ? slides = [env.name] : slides = ['hello'];
  }

  return slides.map((slide) => {
    const common = {
      name: slide,
      entry: [
        'babel-polyfill',
        path.resolve(__dirname, 'src', 'slides', slide, 'main.js')
      ],
      output: {
        path: path.resolve(__dirname, 'dist', slide),
        filename: '[hash].js'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use: [
              'babel-loader'
            ]
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader',
              'postcss-loader'
            ]
          },
          {
            test: /\.md$/,
            use: [
              'html-loader',
              'markdown-loader'
            ]
          },
          {
            test: /\.(png|jpg|gif|svg|woff2?)$/,
            use: [
              'file-loader'
            ]
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          title: `abouthiroppy/${slide}`
        })
      ]
    };

    return merge.smart(common, config);
  });
};
