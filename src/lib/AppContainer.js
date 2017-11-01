import React from 'react';
import Sidebar from './Sidebar';

const selectBackground = (content) => {
  if (content === undefined) return 'default';
  const arr = content.match(/<!-- background: (.+) -->/);

  return arr ? arr[1] : 'default';
};

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
      window.slide.bespoke.on('activate', () => {
        this.setState({
          slideInfo: {
            total  : `${this.props.slides.length}`.padStart(2, '0'),
            current: `${window.slide.bespoke.slide() + 1}`.padStart(2, '0')
          }
        });
      });
    }, 0);
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
            slides.map((slide, i) => (
              <section
                data-bespoke-backdrop={selectBackground(slide)}
                dangerouslySetInnerHTML={{ __html: slide }}
                key={i /* fix */}
              />
            ))
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
