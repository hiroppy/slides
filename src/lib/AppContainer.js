import React from 'react';
import Sidebar from './Sidebar';

function parseAttrs(content) {
  const res = {
    background: 'default',
    className: ''
  };

  if (content === undefined) return res;

  // background
  {
    const arr = content.match(/<!-- background: (.+) -->/);

    res.background =  arr ? arr[1] : 'default';
  }

  // section-title
  if (content.match(/<!-- sectionTitle -->/)) {
    res.background = 'section-title';
    res.className = 'section-title';
  }

  return res;
}

class AppContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      opened   : false,
      slideInfo: {
        total  : 0,
        current: 0
      }
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        slideInfo: {
          total  : `${this.props.slides.length}`.padStart(2, '0'),
          current: `${window.slide.bespoke.slide() + 1}`.padStart(2, '0')
        }
      });

      window.slide.bespoke.on('activate', () => {
        this.setState({
          slideInfo: {
            ...this.state.slideInfo,
            current: `${window.slide.bespoke.slide() + 1}`.padStart(2, '0')
          }
        });
      });
    }, 5000);
  }

  goTo = (num) => { // eslint-disable-line react/sort-comp
    window.slide.bespoke.slide(num);
  }

  onSetSidebarOpen = (opened) => {
    this.setState({ opened });
  }

  render() {
    const {
      slides
    } = this.props;

    return (
      <Sidebar
        goTo={this.goTo}
        opened={this.state.opened}
        onSetOpen={this.onSetSidebarOpen}
        slideInfo={this.state.slideInfo}
      >
        <article>
          {
            slides.map((slide, i) => {
              const meta = parseAttrs(slide);

              return (
                <section
                  key={i /* fix */}
                  className={meta.className}
                  data-bespoke-backdrop={meta.background}
                  dangerouslySetInnerHTML={{ __html: slide }}
                />
              );
            })
          }
        </article>
        <i
          className="btn-sidebar fa fa-bars"
          onClick={() => this.onSetSidebarOpen(true)}
        />
      </Sidebar>
    );
  }
}

export default AppContainer;
