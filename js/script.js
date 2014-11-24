var menuItems = [], topMenuHeight;


$(document).ready(function() {
    processMenuStart();

    $("a.animated-scroll").click(function () {
        var elementClick = $($(this).attr("href"));
        var destination = elementClick.size() === 0 ? 0 : elementClick.offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });

    $("#our-works").owlCarousel({navigation : false});
      var owl = $("#our-works").data('owlCarousel');
      $('.next-work').on('click', function(event) {
        owl.next()   // Go to next slide
      });
      $('.prev-work').on('click', function(event) {
        owl.prev()   // Go to previous slide
      });
});

function processMenuStart() {
var lastId,
    topMenu = $("#menu");
    topMenuHeight = topMenu.outerHeight() + 50;
    // All list items
    menuItems = topMenu.find("a");
    // Anchors corresponding to menu items
    var scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

    menuItems.click(function(e){
        var id = $(this).attr("href");
        for(var i=0; i<5; i++) {
            $(menuItems[i]).removeClass("active_tab");
            // $(menuItems[i]).filter("[href="+id+"]").addClass("active_tab");
        };
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+50;
      $('html, body').stop().animate({ 
          scrollTop: offsetTop
      }, 800);
      // e.preventDefault();
    });

    $(window).scroll(function(){
           var fromTop = $(this).scrollTop()+topMenuHeight;
           // console.log(fromTop)

           var sect_id = "";
           var i = 0;
           var cur = scrollItems.map(function(){
            sect_id = $(this).selector;

            // console.log(this.offset().top)
            i++;
             if ($(this).offset().top < fromTop)
               return this;
            });

           cur.sort(function (a, b) {
            return a.offset().top - b.offset().top;
           })

           cur = cur[cur.length-1];

           var id = cur && cur.length ? cur[0].id : "";
           
           if (lastId !== id) {
               lastId = id;

               processScroll(id);

               for(var i=0; i<5; i++) {
                    $(menuItems[i]).removeClass("active_tab");
                    $(menuItems[i]).filter("[href=#"+id+"]").addClass("active_tab");
                };
           }                   
        });

    function processScroll(id) {
    }
}


function buttonClicked() {
    var id = "contacts";
    for(var i=0; i<5; i++) {
        $(menuItems[i]).removeClass("active_tab");
        // $(menuItems[i]).filter("[href="+id+"]").addClass("active_tab");
    };
  var href = "#" + id,
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+50;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 800);
  e.preventDefault();
}
