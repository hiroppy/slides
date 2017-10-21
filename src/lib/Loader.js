import React from 'react';
import ReactLoading from 'react-loading';

class Loader extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      displayed: true
    };
  }

  componentWillMount() {
    window.onload = () => {
      setTimeout(() => {
        this.setState({ displayed: false });
      }, 500);
    };
  }

  render() {
    return (
      <div className={this.state.displayed ? 'page-loader' : 'page-loader-fadeout'}>
        <ReactLoading type="bars" />
      </div>
    );
  }
}

export default Loader;
