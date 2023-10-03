$(document).ready(function() {

    // active selecting
    $('#active').css({
        "color": "#222",
        "background-color": "#52ff42",
        "border-radius": "12px"
    });

    // show sidebar menu
    $('#sidebar-hamburger').click(function() {
        $('#sidebar, #sidebar-close').show(500)

        $('.logo-aom, #sidebar-hamburger').hide(300)

        if($(window).scrollTop() > 1000) {
            $('nav').css({'top': '-300px'})
        } else {
            $('nav').css({'top': '0px'})
        } 

        // show btn-darkMode
        $('#dark-light').show(500);
    });

    // hide sidebar menu
    $('#sidebar-close').click(function() {
        $(this).hide(300)

        $('#sidebar').hide(300)

        $('.logo-aom, #sidebar-hamburger').show(300) 

        $('nav').css({'top': '0px'})

        // hide btn-darkMode
        $('#dark-light').hide(300);
    });
    
    // dark mode
    $('#sun-mode').click(function() {
        $(this).hide(600), $('#moon-mode').show(600);

        $('body').addClass('dark-mode');

        $('#about').css({'background-color': '#181818'}), $('#seemore p').css({'color': '#fafafa'});

        $('hr').hide();

        $('#sidebar-close').css({'color': '#666'});

        $('.modal-box').css({'background-color': '#111'})

        $('#build-by').css({'color': '#555'});
    });

    // light mode
    $('#moon-mode').click(function() {
        $(this).hide(600), $('#sun-mode').show(600);

        $('body').removeClass('dark-mode');

        $('#about').css({'background-color': '#fafafa'}), $('#seemore p').css({'color': '#505050'});

        $('hr').show();

        $('#sidebar-close').css({'color': '#222'});

        $('.modal-box').css({'background-color': '#fff'})

        $('#build-by').css({'color': '#ccc'});
    });

    // srcoll to top
    $(window).scroll(function() {
        if($(this).scrollTop() > 1000) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').hide();
        }
    });

    $('#scroll-top').click(function() {
        $('html, body').animate({scrollTop : 0}, 0);
    });

    // srcoll to bottom
    $(window).scroll(function() {
        if($(this).scrollTop() > 1000) {
            $('#scroll-bottom').hide();
        } else {
            $('#scroll-bottom').fadeIn();
        }
    });

    $('#scroll-bottom').click(function() {
        $('html, body').animate({scrollTop : $(document).height()}, 'slow');
    });

});