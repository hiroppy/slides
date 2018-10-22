const base = require('../../.fusumarc');

const url = 'https://slides.hiroppy.me';
const title = 'The event loop of node';

module.exports = {
  meta: {
    ...base.meta,
    url: `${url}/${title}`,
    title,
    name: title,
    description: 'introduce the event loop of node.js',
    thumbnail: ''
  },
  slide: {
    theme: 'nebula'
  },
  extends: {
    css: 'style.css'
  }
};
