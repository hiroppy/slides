const base = require('../../.fusumarc');

const url = 'https://slides.hiroppy.me';
const title = 'self introduction';

module.exports = {
  meta: {
    ...base.meta,
    url: `${url}/${title}`,
    title,
    name: title,
    description: 'me',
    thumbnail: ''
  },
  slide: {
    theme: 'nebula'
  },
  extends: {
    css: 'style.css'
  }
};
