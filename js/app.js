$(document).ready(function(){
  new WOW().init({
    animateClass: 'animate__animated'
  });

  $('#slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }]
  });


  $('#popup-trigger').on('click', () => {
    $('#popup').show();
    // fadeIn
  })
  $('#popup-hide').on('click', () => {
    $('#popup').hide();
    // fadeOut
  })

  $('#menu-trigger').on('click', () => {
    $('#menu-mobile').show();
    // fadeIn
  })
  $('#menu-hide').on('click', () => {
    $('#menu-mobile').hide();
    // fadeOut
  })


});

