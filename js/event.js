$(document).ready(function() {

    // active selecting
    $('#active').css({
            "color": "#52ff42",
            "border-bottom": "2px solid"
        });

    // ป็อปอัปแกลลอรี่
    $('.gallerys').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
          },
      });

      // srcoll to top
      $(window).scroll(function() {
        if($(this).scrollTop() > 600) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').hide();
        }
    });

    $('#scroll-top').click(function() {
        $('html, body').animate({scrollTop : 0}, 0);
    });

});