const base = require('../../.fusumarc');

const basePath = 'sourcemap-v3';

module.exports = {
  meta: {
    ...base.meta,
    title: '',
    description: '',
    url: `${base.meta.url}${basePath}`,
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
