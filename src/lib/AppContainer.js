import React from 'react';

const selectBackground = (content) => {
  if (content === undefined) return 'default';
  const arr = content.match(/<!-- background: (.+) -->/);

  return arr ? arr[1] : 'default';
};

const AppContainer = (props) => (
  <div>
    {
      props.children
    }
    <article>
      {
        props.slides.map((slide, i) => (
          <section
            data-bespoke-backdrop={selectBackground(slide)}
            dangerouslySetInnerHTML={{ __html: slide }}
            key={i /* fix */}
          />
        ))
      }
    </article>
  </div>
);

export default AppContainer;
