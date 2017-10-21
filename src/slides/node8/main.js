import nebula from 'bespoke-theme-nebula';
import createBody from '../../lib/create-body';
import insertSlide from '../../lib/insert-slide';
import fetchSlides, { fetchCommon } from '../../lib/fetch-slides';
import setupBespoke from '../../lib/setup-bespoke';
import addSocialButtons from '../../lib/add-social-buttons';
import '../../lib/setup-default';
import './style.css';

const common     = fetchCommon();
const profile    = common['self-introduction.md'];
const end        = common['node-end.md'];
const slidesInfo = fetchSlides(require.context('./slides'));

let slides = insertSlide(slidesInfo.slides, profile, 1);

slides = insertSlide(slides, end, slides.length);
slides[0] = addSocialButtons(slides[0]);

createBody(slides);
setupBespoke(nebula);
