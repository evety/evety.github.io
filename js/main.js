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

$('.fourth-slide .inner').hover(function(){
   $('.tooltip').css('-webkit-transform', 'translate(-600px, 0)');
}, function() {
   $('.tooltip').css('-webkit-transform', 'translate(0, 0)');
});
