var flickity = new Flickity(".intro-carousel", {
  wrapAround: true,
  draggable: true,
  autoPlay: 10000,
  prevNextButtons: false,
  contain: true,
  pageDots: false,
  imagesLoaded: true,
  friction: 0.65,
  selectedAttraction:0.02
});

function nextSlide() {
  flickity.next(true, false);
}

function previousSlide() {
  flickity.previous(true, false);
}
