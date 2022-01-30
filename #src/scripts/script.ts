// filter //
import Filter from './modules/filter.js';

let projectsFilter = new Filter(
  '.projects__button',
  '.gallery__item',
)
let blogFilter = new Filter(
  '.blog-nav__button',
  '.blogs-content',
)

// scroll-elements //
import ScrollElement from './modules/scrollToElement.js';

let scrollElement = new ScrollElement(
  '[data-scroll-to]', // i recommend use this value.

  // '.fixed-header',
)

//? your scripts //
