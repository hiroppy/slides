import nebula from 'bespoke-theme-nebula';
import createBody from '../../lib/create-body';
import insertSlide from '../../lib/insert-slide';
import fetchSlides, { fetchCommon } from '../../lib/fetch-slides';
import setupBespoke from '../../lib/setup-bespoke';
import '../../lib/setup-default';
import './style.css';

const common     = fetchCommon();
const profile    = common['self-introduction.md'];
const slidesInfo = fetchSlides(require.context('./slides'));
const slides     = insertSlide(slidesInfo.slides, profile, 1);

createBody(slides);
setupBespoke(nebula);
