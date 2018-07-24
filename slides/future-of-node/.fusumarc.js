const base = require('../../.fusumarc');

const url = 'https://slides.hiroppy.me';
const title = 'future-of-node';

module.exports = {
  meta: {
    ...base.meta,
    url: `${url}/${title}`,
    title,
    name: title,
    description: 'Introduce the current stability 1 modules and hot topics.',
    thumbnail: 'https://avatars3.githubusercontent.com/u/9950313?s=200&v=4'
  },
  slide: {
    theme: 'nebula'
  },
  extends: {
    css: 'style.css'
  }
};
