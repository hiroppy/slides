import '../common/style/social-box.css';

const twiter =
  '<a href="https://twitter.com/share" class="twitter-share-button" data-via="about_hiroppy">Tweet</a>';

const hatena =
'<a href="http://b.hatena.ne.jp/entry/" class="hatena-bookmark-button" data-hatena-bookmark-layout="basic-label-counter" data-hatena-bookmark-lang="en" data-hatena-bookmark-width="150" data-hatena-bookmark-height="20" title="このエントリーをはてなブックマークに追加"><img src="https://b.st-hatena.com/images/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;" /></a>';

/**
 * @param {string} slide - HTML
 */
const addSocialButtons = (slide) => {
  return `${slide }<br><div class="social-buttons">${twiter}${hatena}</div>`;
};

export default addSocialButtons;
