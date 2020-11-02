$(".description-slider").slick({
  autoplay: true,
  dots: true,
});

var lightbox = new SimpleLightbox(".gallery a", {
  scaleImageToRatio: true,
  animationSpeed: 150,
});
