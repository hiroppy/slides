import React from 'react';

const Base = (props) => (
  <article>
    {
      props.slides.map((slide, i) => {
        return (
          <section
            key={i /* fix */}
            className={slide.meta.className}
            data-bespoke-backdrop={slide.meta.background}
            dangerouslySetInnerHTML={{ __html: slide.context }}
          />
        );
      })
    }
  </article>
);

export default Base;
