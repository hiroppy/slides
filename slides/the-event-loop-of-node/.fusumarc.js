const base = require('../../.fusumarc');

const url = 'https://slides.hiroppy.me';
const title = 'The event loop of node';

module.exports = {
  meta: {
    ...base.meta,
    url: `${url}/${title}`,
    title,
    name: title,
    description: 'introduce the mechanism of the event loop',
    thumbnail: 'https://avatars3.githubusercontent.com/u/9950313?s=200&v=4'
  },
  slide: {
    theme: 'nebula'
  },
  extends: {
    css: 'style.css'
  }
};
