$(document).ready(function() {

    // active selecting
    $('#active').css({
        "color": "#222",
        "background-color": "#52ff42",
        "border-radius": "12px"
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