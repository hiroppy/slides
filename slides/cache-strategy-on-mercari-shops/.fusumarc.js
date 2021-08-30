const base = require('../../.fusumarc');

const basePath = 'cache-strategy-on-mercari-shops';

module.exports = {
  meta: {
    ...base.meta,
    title: 'メルカリShopsのキャッシュ戦略',
    description: 'メルカリShopsのブログで紹介したものをスライド化しました',
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
