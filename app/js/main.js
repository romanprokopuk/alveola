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

  $('.sort-elem-popularity').on('click', function() {
    $('.arrow_forward__up-popularity').toggleClass('is_down')
  })

  $('.sort-elem-price').on('click', function() {
    $('.arrow_forward__up-price').toggleClass('is_down')
  })

  $('.sort-elem-name').on('click', function() {
    $('.arrow_forward__up-name').toggleClass('is_down')
  })

  $('.tabs .tab').on('click', function() {
    $('.tabs .tab').removeClass('is-show')

    $(this).addClass('is-show')
  })
})

