'use strict';

const path              = require('path');
const webpack           = require('webpack');
const merge             = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let slides              = require('./slides-list');

const config = process.env.NODE_ENV !== 'production' ?
  require('./webpack.dev.config') :
  require('./webpack.prod.config');

const urlPrefix = 'https://abouthiroppy.github.io/slides/';
const convertPath = (title) => title.replace(/ /g, '-');

module.exports = (env) => {
  if (env && typeof env.name === 'string' && env.name !== '') {
    slides.some((slide, i) => {
      if (convertPath(slide.title) === env.name) {
        slides = [slides[i]];
        return true;
      }
    });
  }

  return slides.map((slide) => {
    const url = `${urlPrefix}${convertPath(slide.title)}`;

    const common = {
      name  : slide.title,
      entry : path.resolve(__dirname, 'src', 'slides', convertPath(slide.title), 'main.js'),
      output: {
        path    : path.resolve(__dirname, 'dist', convertPath(slide.title)),
        filename: '[hash].js'
      },
      module: {
        rules: [
          {
            test   : /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use    : 'babel-loader'
          },
          {
            test: /\.css$/,
            use : [
              'style-loader',
              'css-loader', // dont't use css-modules
              'postcss-loader'
            ]
          },
          {
            test: /\.md$/,
            use : [
              'html-loader',
              'markdown-loader'
            ]
          },
          {
            test: /\.(png|jpg|gif|svg?)$/,
            use : [
              'file-loader',
              'image-webpack-loader'
            ]
          },
          {
            test: /\.(eot|ttf|woff2?)$/,
            use : 'file-loader'
          }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.URL'     : JSON.stringify(url),
          'process.env.TITLE'   : JSON.stringify(slide.title),
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new HtmlWebpackPlugin({
          url,
          filename   : 'index.html',
          title      : slide.title,
          template   : './template.ejs',
          image      : slide.image,
          description: slide.description
        })
      ]
    };

    return merge.smart(common, config);
  });
};
