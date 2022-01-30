// filter //
import Filter from './modules/filter.js';
let projectsFilter = new Filter('.projects__button', '.gallery__item');
let blogFilter = new Filter('.blog-nav__button', '.blogs-content');
// scroll-elements //
import ScrollElement from './modules/scrollToElement.js';
let scrollElement = new ScrollElement('[data-scroll-to]');
// let someParallaxMenu = new Parallax(
//   '.fullscreen__body',
//   768,
//   new ParallaxElement(
//     '.fullscreen__bg-img', 5),
//   // another variant 
//   // new ParallaxElement(
//   //   document.querySelector<HTMLElement>('.fullscreen__bg-img'), 5),
// )
//? your scripts //
