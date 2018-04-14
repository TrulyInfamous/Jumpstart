$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });
  var scrollDistance = 0;
  $( window ).scroll(function () {
    var distanceFromTop = $(this).scrollTop();
    if (distanceFromTop > scrollDistance + 50) {
      var navbarHeight = $(".navbar").css('height');
      $('.navbar').animate({top: '-' + navbarHeight}, 150);
      scrollDistance = distanceFromTop;
    } else if (scrollDistance > distanceFromTop + 50) {
      $('.navbar').animate({top: 0}, 150);
      scrollDistance = distanceFromTop;
    } else {
      scrollDistance = distanceFromTop;
    }
  });
});
