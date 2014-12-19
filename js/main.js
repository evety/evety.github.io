//jQuery('document').ready(function($){
//   var menu = $('.top-menu');
//
//   $(window).scroll(function(){
//      if($(this).scrollTop() > 806){
//         //console.log($(this).scrollTop());
//         menu.addClass('top-menu-fixed');
//      } else {
//         menu.removeClass('top-menu-fixed');
//      }
//   });
//});
$.stellar({
   horizontalOffset: 50
});

//$('.fourth-slide .inner').hover(function(){
//   $('.tooltip').css('-webkit-transform', 'translate(-600px, 0)');
//}, function() {
//   $('.tooltip').css('-webkit-transform', 'translate(0, 0)');
//});

jQuery(document).ready(function($) {
   var slide4 = $('.fourth-slide .first');
   var image = slide4.find('.image');
   var sliding = slide4.find('.sliding');

   slide4.mouseover(function() {
      image.css('background', 'url("/images/landing2.png") no-repeat center center');
      sliding.css('margin-left', 'calc(-100% - 30px)');
   }).mouseout(function() {
      image.css('background', 'url("/images/landing.png") no-repeat center center');
      sliding.css('margin', '0');
   });
});
