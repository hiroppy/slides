const base = require('../../.fusumarc');

const url = 'https://slides.hiroppy.me';
const title = 'webpackのイママデとコレカラ';

module.exports = {
  meta: {
    ...base.meta,
    url: `${url}/webpack-history`,
    title,
    name: title,
    description: 'webpackの歴史を辿っていき、機能を紹介していきます。',
    thumbnail: 'https://avatars1.githubusercontent.com/u/2105791?s=200&v=4'
  },
  slide: {
    theme: 'nebula'
  },
  extends: {
    css: 'style.css'
  }
};
