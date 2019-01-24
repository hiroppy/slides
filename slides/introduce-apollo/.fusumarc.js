const base = require('../../.fusumarc');

const url = 'https://slides.hiroppy.me';
const title = 'introduce-apollo';

module.exports = {
  meta: {
    ...base.meta,
    url: `${url}/${title}`,
    title,
    name: title,
    description: '',
    thumbnail: 'https://avatars2.githubusercontent.com/u/17189275?s=200&v=4'
  },
  slide: {
    theme: 'nebula'
  },
  extends: {
    css: 'style.css'
  }
};
