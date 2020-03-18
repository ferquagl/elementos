var screenWidth = $(document).width();
var screenHeight = $(window).height();
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

paceOptions = {
    // Configuration goes here. Example:
    elements: false,
    restartOnPushState: false,
    restartOnRequestAfter: false,
    document: true,
};

Pace.on("done", function () {

    $("#preloader").fadeOut(1000);
    $('body').addClass('overflow-auto');

});

$(function () {
    $('a[href*="#"]:not([href="#"])').on("click", function () {
        id = $(this).attr('href');
        if (id != 'video-play') {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                var path = location.pathname;
                var url = path + id;
                history.pushState(null, null, url);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1500);
                    return false;
                }
            }
        }

    });

    $('a:not([href*="#"])').on("click", function () {

        if ($(this).attr('id') != 'video-play') {

            var address = $(this).attr("href");

            if ($(this).attr("target")) {
                window.open(address);
            } else {
                window.location.href = address;
            }

        }
    });

});


var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: false, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    scrollContainer: null // optional scroll container selector, otherwise use window
});
wow.init();


$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    var alTop = false;

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        if (st < screenHeight) {
           $('header').removeClass('nav-down').addClass('nav-up');
     } else {
            $('header').removeClass('nav-down').addClass('nav-up');
        }
        if (st > screenHeight) {
            //setInterval(function() {
            $('header').addClass('gray-header');
        //  }, 500);
        }
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');

            if (st < screenHeight / 2) {
                $('header').removeClass('gray-header');
            }
        }
    }

    lastScrollTop = st;
}

$(document).on('ready', function () {

    $('#soymayor').click(function () {
        age = 'si';
        $.cookie("elementos", age, {
            expires: 10
        });
        $('.age-filter').fadeOut();
        $("body").css('overflow', 'auto');
    });

    var homeSlider = new Swiper('.slider-home', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
        grabCursor: true
    });

    if (isMobile.tablet) {

        var wineSlider = new Swiper('.grid', {
            pagination: '#pagination-wines',
            slidesPerView: 3,
            centeredSlides: true,
            paginationClickable: true,
            spaceBetween: 10,
            grabCursor: true,
            loop: true
        });

    }

    if (isMobile.phone) {

        var wineSlider = new Swiper('.grid', {
            pagination: '#pagination-wines',
            slidesPerView: 1,
            centeredSlides: true,
            paginationClickable: true,
            spaceBetween: 10,
            grabCursor: true,
            loop: true
        });

    }

});
