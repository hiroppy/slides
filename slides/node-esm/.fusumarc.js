const base = require('../../.fusumarc');

const url = 'https://slides.hiroppy.me';
const title = 'Introduce ESM of Node.js';

module.exports = {
  meta: {
    ...base.meta,
    url: `${url}/${title}`,
    title,
    name: title,
    description:
      'Node.js is implementing ECMAScript Modules. This talk will introduce how it resolves modules.',
    thumbnail: 'https://avatars3.githubusercontent.com/u/9950313?s=200&v=4',
    sns: ['twitter']
  },
  slide: {
    theme: 'nebula'
  },
  extends: {
    css: 'style.css'
  }
};
