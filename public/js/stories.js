$(document).ready(function() {

    // active selecting
    $('#active').css({
        "color": "#52ff42",
        "border-bottom": "2px solid"
    });

    // show sidebar menu
    $('#sidebar-hamburger').click(function() {
        $('#sidebar, #sidebar-close').show(500);

        $('.logo-aom, #sidebar-hamburger').hide(300);

        if($(window).scrollTop() > 1000) {
            $('nav').css({'top': '-300px'});
        } else {
            $('nav').css({'top': '0px'});
        } 

        // show btn-darkMode
        $('#dark-light').show(500);
    });

    // hide sidebar menu
    $('#sidebar-close').click(function() {
        $(this).hide(300);

        $('#sidebar').hide(300);

        $('.logo-aom, #sidebar-hamburger').show(300) ;

        $('nav').css({'top': '0px'});

        // hide btn-darkMode
        $('#dark-light').hide(300);
    });

    // light mode
    $('#sun-mode').click(function() {
        $(this).hide(600), $('#moon-mode').show(600);

        $('body').addClass('dark-mode');

        $('.even-story').css({'background-color': '#181818'});

        $('hr').hide();

        $('#sidebar-close').css({'color': '#666'});
        
        $('.modal-box').css({'background-color': '#111'})

        // hover panagination-story
        $('#panagination-story').mouseover(function() {
            $(this).css({'background-color': '#222'})
        }).mouseout(function(){
            $(this).css({'background': 'none'});
          });;

        $('#build-by').css({'color': '#555'});
    });

    // dark mode
    $('#moon-mode').click(function() {
        $(this).hide(600), $('#sun-mode').show(600);

        $('body').removeClass('dark-mode');

        $('.even-story').css({'background-color': '#fafafa'});

        $('hr').show();

        $('#sidebar-close').css({'color': '#222'});

        $('.modal-box').css({'background-color': '#fff'})

        // hover panagination-story
        $('#panagination-story').mouseover(function() {
            $(this).css({'background-color': '#ddd'});
        }).mouseout(function(){
            $(this).css({'background': 'none'});
          });;

        $('#build-by').css({'color': '#ccc'});
    });

     // toggle show hide panagination story
     $('#btn-panagi').click(function() {
        $(this).toggleClass('focus-btn-panagi');

        $('#panagination-story').fadeToggle(600);
    });

    // srcoll to top
    $(window).scroll(function() {
        if($(this).scrollTop() > 4000) {
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
        if($(this).scrollTop() > 4000) {
            $('#scroll-bottom').hide();
        } else {
            $('#scroll-bottom').fadeIn();
        }
    });

    $('#scroll-bottom').click(function() {
        $('html, body').animate({scrollTop : $(document).height()}, 'slow');
    });

});