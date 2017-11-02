/**
 * host for Presentation mode
 */

import React from 'react';

class Host extends React.Component {
  componentWillReceiveProps(p) {

    // to load when bespoke loading is completed
    if (p.loadedBespoke && !this.loaded) {
      window.slide.bespoke.on('activate', (e) => {
        localStorage.setItem('page', JSON.stringify({
          date: Date.now(),
          page: e.index
        }));
      });

      this.loaded = true;
    }
  }

  render() {
    return (
      <article>
        {
          this.props.slides.map((slide, i) => {
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
  }
}

export default Host;
