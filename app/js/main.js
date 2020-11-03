$(document).ready(function() {
  $(".description-slider").slick({
    autoplay: true,
    dots: true,
  });
  
  var lightbox = new SimpleLightbox(".gallery a", {
    scaleImageToRatio: true,
    animationSpeed: 150,
  });

  $('.filter-btn').on('click', function() {
    $('.filter-form-toggle').toggleClass('is-show')
  })

  $('.tabs .tab').on('click', function() {
    $('.tabs .tab').removeClass('is-show')

    $(this).addClass('is-show')
  })
})

