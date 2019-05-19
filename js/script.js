$(function() {
    var windowWidth = $(window).width();
    var WindowSmt = 1024;

    if (windowWidth <= WindowSmt) { // スマホサイズ
        $('.slider').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            prevArrow: '<button class="slide-arrow prev-arrow"></button>',
            nextArrow: '<button class="slide-arrow next-arrow"></button>',
            autoplay: true,
            autoplaySpeed: 2000,
        });
    
        $('#nav_toggle').click(function(){
            $('header').toggleClass('open');
            $('nav').slideToggle(500);
        });
    } else { // PCサイズ
        $('.slider').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            prevArrow: '<button class="slide-arrow prev-arrow"></button>',
            nextArrow: '<button class="slide-arrow next-arrow"></button>',
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }

});