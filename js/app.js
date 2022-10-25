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


  //POPUP

  $('#popup-trigger').on('click', () => {
    $('#popup').show();
  })

  $('#popup-hide').on('click', () => {
    $('#popup').hide();
  })

  // Menu Mobile
  $('#menu-trigger').on('click', () => {
    $('#menu-mobile').show();
  })

  $('#menu-hide').on('click', () => {
    $('#menu-mobile').hide();
  })
  $('.menu-mobile__link').on('click', () => {
    $('#menu-mobile').hide();
  })

//Header MENU
  $('.header__menu--show').on('mouseover', () => {
    $('.menu').fadeIn();
  })

  $('.header__menu--show').on('click', () => {
    $('.menu').fadeOut();
  })

  $('.menu').on('mouseover', () => {
    $('.menu').fadeIn();
  })
  // $('.menu').on('mouseout', () => {
  //   $('.menu').fadeOut();
  // })
  $('.page').on('click', () => {
    $('.menu').fadeOut();
  })

});


