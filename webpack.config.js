'use strict';

const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('babel-polyfill');

const config = process.env.NODE_ENV !== 'production' ?
  require('./webpack.dev.config') :
  require('./webpack.prod.config');

const urlPrefix = 'https://abouthiroppy.github.io/slides/';

let slides = [
  {
    title: 'hello',
    image: '',
    description: ''
  },
  {
    title: 'node8',
    image: 'https://avatars1.githubusercontent.com/u/9950313?v=3&s=200',
    description: 'Node@8.0.0の紹介スライド'
  },
  {
    title: 'node-whatwg-url',
    image: '',
    description: 'whatwg-url in Node'
  },
  {
    title: 'nicohaco',
    image: '',
    description: 'NicoHacoというNicoBoxのPC版アプリを作った'
  }
];

module.exports = (env) => {
  if (process.env.NODE_ENV !== 'production') {
    slides.some((slide, i) => {
      if (slide.title === env.name) {
        slides = [slides[i]];
        return true;
      }
    });
  }

  return slides.map((slide) => {
    const common = {
      name: slide.title,
      entry: [
        'babel-polyfill',
        path.resolve(__dirname, 'src', 'slides', slide.title, 'main.js')
      ],
      output: {
        path: path.resolve(__dirname, 'dist', slide.title),
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
              'css-loader', // dont't use css-modules
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
            test: /\.(png|jpg|gif|svg|ttf|woff2?)$/,
            use: [
              'url-loader'
            ]
          },
          {
            test: /\.eot$/,
            use: [
              'file-loader'
            ]
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          title: `abouthiroppy/${slide.title}`,
          template: './template.ejs',
          url: `${urlPrefix}${slide.title}`,
          image: slide.image,
          description: slide.description
        })
      ]
    };

    return merge.smart(common, config);
  });
};
