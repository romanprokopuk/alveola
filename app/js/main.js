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
    $('.filter-form-toggle').toggleClass('is-toggle')
  })

  $('.sort-elem-popularity').on('click', function() {
    $('.arrow-forward-popularity').toggleClass('is-toggle')
  })

  $('.sort-elem-price').on('click', function() {
    $('.arrow-forward-price').toggleClass('is-toggle')
  })

  $('.sort-elem-name').on('click', function() {
    $('.arrow-forward-name').toggleClass('is-toggle')
  })

  $('.search-mobile-btn').on('click', function() {
    $('.search-mobile-btn').toggleClass('is-toggle');
    $('.main-search__mobile').toggleClass('is-toggle');
    $('.main-basket').toggleClass('is-active-search-mobile');
    $('.main-logo').toggleClass('is-active-search-mobile');
    $('.main-menu-btn').toggleClass('is-active-search-mobile')
  })

  $('.main-menu-btn').on('click', function() {
    $('.body').toggleClass('is-mobile-menu-toggle')
  })

  $('.to-close-btn').on('click', function() {
    $('.body').toggleClass('is-mobile-menu-toggle')
  })

  $('.main-input__order-btn').on('click', function() {
    $('.basket-form-wrap').toggleClass('is-toggle')
  })

  $('.tabs .tab').on('click', function() {
    $('.tabs .tab').removeClass('is-show')

    $(this).addClass('is-show')
  })
})

