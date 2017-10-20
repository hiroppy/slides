import React from 'react';
import ReactDOM from 'react-dom';
import nebula from 'bespoke-theme-nebula';
import createRoot from '../../lib/create-root';
import fetchSlides from '../../lib/fetch-slides';
import setupBespoke from '../../lib/setup-bespoke';
import AppContainer from '../../lib/AppContainer';
import '../../lib/setup-hljs';
import './style.css';
import 'highlight.js/styles/github.css';

const slidesInfo = fetchSlides(require.context('./slides'));

ReactDOM.render(<AppContainer slides={slidesInfo.slides} />, createRoot());

setupBespoke(nebula);
