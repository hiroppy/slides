const base = require('../../.fusumarc');

module.exports = {
  meta: {
    ...base.meta,
    title: 'introducing webpack asset modules',
    description: 'introducing how to use asset modules of webpack5',
    thumbnail: '',
  },
  slide: {
    showIndex: true,
    code: {
      languages: ['json', 'markdown', 'javascript', 'css'],
    },
  },
  extends: {
    css: 'style.css',
  },
};
