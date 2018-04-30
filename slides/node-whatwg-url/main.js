import nebula from 'bespoke-theme-nebula';
import createBody from '../../lib/create-body';
import insertSlide from '../../lib/insert-slide';
import fetchSlides, { fetchCommon } from '../../lib/fetch-slides';
import '../../lib/setup-default';
import './style.css';

const common     = fetchCommon();
const profile    = common['self-introduction.md'];
const community  = common['node-community.md'];
const end        = common['node-end.md'];
const slidesInfo = fetchSlides(require.context('./slides'));

let slides = insertSlide(slidesInfo.slides, profile, 1);
slides = insertSlide(slides, community, slides.length);
slides = insertSlide(slides, end, slides.length);

createBody(slides, nebula);
