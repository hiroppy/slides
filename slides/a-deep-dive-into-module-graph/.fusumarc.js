const base = require('../../.fusumarc');

const basePath = 'a-deep-dive-into-module-graph';

module.exports = {
  meta: {
    ...base.meta,
    title: 'A Deep Dive into Module Graph',
    description: 'Introducing how to create/run module graph',
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
