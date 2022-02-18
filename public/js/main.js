"use strict"

$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows:true
});
	



$('.mobmenu-icon').click(function() {
  $('.mob-menu').show(200)
  $('.mob-menu').addClass('slide-right')
});



$('.closeBtn').click(function() {
  $('.mob-menu').hide(200)
  $('.mob-menu').removeClass('slide-right')
});



$('.mob-menu ul li a').click(function() {
  $('.mob-menu').hide(200)
  $('.mob-menu').removeClass('slide-right')
});