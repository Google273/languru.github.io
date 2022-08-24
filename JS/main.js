const tl = gsap.timeline( {
  defaults : {ease: "powe1.out"}
});

tl.fromTo('nav, .first-colum', {opacity:0}, {opacity:1, duration : 1});

anime({
  targets: '.second-colum img',
  translateY: 0,
  opacity: 1
});
anime({
  targets: '.buttons',
  translateX: 0,
  easing: 'linear',
  opacity: 1,
});
let animation_close = anime({
  targets: '#close_btn',
  fill: "#000",
  rotate: 360,
  duration: 1000,
  loop: false,
  autoplay: false
});
let animation_open = anime({
  targets: '#menu_btn',
  fill: "#000",
  rotate: 360,
  duration: 1000,
  loop: false,
  autoplay: false
});




$(document).ready(function() {
  $(".burger-menu").click(function(event) {
    $("#mobile-menu, #menu-mobile ").toggleClass('active')
    $("html").toggleClass('lock')


  })
}) 
  
$("#menu_btn").click(function () {
    $("#menu_btn").hide();
    $("#close_btn").show();
    animation_close.play();
})
$("#close_btn").click(function () {
  $("#close_btn").hide();
  $("#menu_btn").show();
  animation_open.play();
})