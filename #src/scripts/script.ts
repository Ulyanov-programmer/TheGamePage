// filter //
import Filter from './modules/filter.js';

let filter = new Filter(
  '.filter__button',
  '.filter__item',
)

// scroll-elements //
import ScrollElement from './modules/scrollToElement.js';

let scrollElement = new ScrollElement(
  '[data-scroll-to]', // i recommend use this value.

  // '.fixed-header',
)

// parallax //
import { Parallax, ParallaxElement } from './modules/parallax.js';

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
