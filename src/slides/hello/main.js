import nebula from 'bespoke-theme-nebula';
import createBody from '../../lib/create-body';
import fetchSlides from '../../lib/fetch-slides';
import setupBespoke from '../../lib/setup-bespoke';
import '../../lib/setup-default';
import './style.css';

const slidesInfo = fetchSlides(require.context('./slides'));

createBody(slidesInfo.slides);
setupBespoke(nebula);
