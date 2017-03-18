import React from 'react';
import ReactDOM from 'react-dom';
import nebula from 'bespoke-theme-nebula';
import createRoot from '../../lib/create-root';
import fetchSlides, { fetchCommon } from '../../lib/fetch-slides';
import setupBespoke from '../../lib/setup-bespoke';
import setupHljs from '../../lib/setup-hljs';
import './style.css';
import '../../common/style/common.css';
import 'highlight.js/styles/github.css';

const root = createRoot();
let slidesInfo = fetchSlides('node-whatwg-url');

const profile = fetchCommon()['self-introduction.md'];

const selectBackground = (content) => {
  if (content === undefined) return 'default';
  const arr = content.match(/<!-- background: (.+) -->/);

  return arr ? arr[1] : 'default';
};

const App = () => {
  const slides = slidesInfo.slides.slice();
  slides.splice(1, 0, profile);

  return (
    <article>
      {
        slides.map((slide, i) => (
          <section
            data-bespoke-backdrop={selectBackground(slide)}
            dangerouslySetInnerHTML={{ __html: slide }}
            key={i /* fix */}
          />
        ))
      }
    </article>
  );
};


ReactDOM.render(<App />, root);

setupBespoke(nebula);

if (module.hot) {
  module.hot.accept(slidesInfo.id, () => {
    slidesInfo = fetchSlides('Test');
    ReactDOM.render(<App />, root);
  });
}
