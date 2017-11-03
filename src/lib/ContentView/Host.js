/**
 * host for Presentation mode
 */

import React from 'react';
import '../../common/style/host.css';

class Host extends React.Component {
  constructor(props) {
    super();

    this.slides = props.slides; // TODO: separate from current reference

    const lastPage = { // TODO: display text
      meta: {
        note      : '',
        className : '',
        background: 'default'
      },
      content: '<h2>finish</h2>'
    };

    this.slides.shift(); // delete the first page
    this.slides = [...this.slides, lastPage];
  }

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
      <div className="host-container">
        <div className="host-note">
          {
            window.slide && window.slide.bespoke.slide() - 1 >= 0 ? (
              <pre>
                {
                  this.slides[window.slide.bespoke.slide() - 1].meta.note
                }
              </pre>
            ) : null
          }
        </div>
        <div className="host-info">
          <h2>next</h2>
          <article className="host-next-slide">
            {
              this.slides.map((slide, i) => (
                <section
                  key={i /* fix */}
                  className={slide.meta.className}
                  data-bespoke-backdrop={slide.meta.background}
                  dangerouslySetInnerHTML={{ __html: slide.context }}
                />
              ))
            }
          </article>
        </div>
      </div>
    );
  }
}

export default Host;
