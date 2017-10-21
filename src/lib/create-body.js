import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';
import AppContainer from './AppContainer';
import createRoot from './create-root';

const createBody = (slides = []) => {
  ReactDOM.render([
    <Loader />,
    <AppContainer slides={slides} />
  ], createRoot());
};

export default createBody;
