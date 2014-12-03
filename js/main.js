jQuery('document').ready(function($){
   var menu = $('.top-menu');

   $(window).scroll(function(){
      if($(this).scrollTop() > 1){
         menu.css('position', 'fixed');
      }
   });
});
