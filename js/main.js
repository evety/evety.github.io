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
   var image = slide4.find('.image-sliding');
   var sliding = slide4.find('.sliding');

   slide4.mouseenter(function() {
      image.css('margin-left', '-100%');
      sliding.css('margin-left', 'calc(-100% - 30px)');
   }).mouseleave(function() {
      image.css('margin', '0');
      sliding.css('margin', '0');
   });
});
