//Initialize masonry gallery

var masonry = null;

imagesLoaded(".masonry-grid", () => {
  masonry = new Masonry(".masonry-grid", {
    itemSelector: ".masonry-grid-item",
    columnWidth: ".masonry-grid-item",
    fitWidth: true,
    gutter: 40,
  });
});
