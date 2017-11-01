import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';
import AppContainer from './AppContainer';
import createRoot from './create-root';
import setupBespoke from './setup-bespoke';

const createBody = (slides = [], theme) => {
  ReactDOM.render([
    <Loader />,
    <AppContainer slides={slides} />
  ], createRoot());

  // hmmm.... I have no idea
  // because DOM tree must be built when calling setupBespoke.
  window.slide = {}; // for AppContainer
  window.slide.bespoke = setupBespoke(theme);
};

export default createBody;
