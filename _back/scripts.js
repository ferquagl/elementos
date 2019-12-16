var screenWidth = $(document).width();
var screenHeight  = $(window).height();
var header = 'hero';
var range = 200;
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
var calc = 2;
var offset = 0;//$('#'+header).offset().top;
var headerId = $('header').attr('id');
var moveUp = 0;
var moveDown = 0;
var move = 0;
var activeList;
var activeHeight;
var lastScrollTop = 0;
var clases = [];

window.paceOptions = {
    ajax: false,
    restartOnRequestAfter: false,
};

Pace.on("done", function(){
  $("#preloader").fadeOut(1000);
  $('body').addClass('overflow-auto');
});

$(function() {
    $('a[href*="#"]:not([href="#"]):not(.searchButton)').on("click", function() {

        if ($(this).attr('id') != 'video-play') {
              if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                  $('html, body').animate({
                    scrollTop: target.offset().top
                  }, 1500);
                  return false;
                }
              }
        }

    });

    $('a:not([href*="#"]):not(.searchButton)').on("click", function() {
        if ($(this).attr('id') != 'video-play') {

            var address = $(this).attr("href");

            if ($(this).attr("target")){
                window.open(address);
            } else {
                window.location.href=address;
            }
        }
    });
});

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1500);
          return false;
        }
      }
    });
});

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

$(window).on('scroll', function () {

    var scrollTop = $(this).scrollTop();

    if($('#'+header).length) {

        offset = $('#'+header).offset().top;
        var height = $('#'+header).outerHeight();
        offset = offset + height / 1.25;
        calc = 1 - (scrollTop - offset + range) / range;

        $('#'+header).css({ 'opacity': calc });

        if ( calc > '1' ) {
          $('#'+header).css({ 'opacity': 1 });
          $('header').removeClass('gray-nav');
          menuButton(false);
        } else if ( calc < '0' ) {
          $('#'+header).css({ 'opacity': 0 });
          $('header').addClass('gray-nav');
        }

    }

    didScroll = true;

});

function menuButton(black){

    if(headerId != 'full-nav'){

        if (black === true) {
            //NEGRO
            $('#nav-icon').addClass('white-icon');
            $('header .menu').addClass('no-back');
        } else {
            //BLANCO
            $('#nav-icon').removeClass('white-icon');
            $('header .menu').removeClass('no-back');
        }
    }
}

setInterval(function() {
    if (didScroll) {
        scrollNav();
        didScroll = false;
    }
}, 250);

function scrollNav() {

    var st = $(this).scrollTop() + offset;
    var alTop = false;

    if(st + $(window).height() == $(document).height()) {
        menuButton(false);
        alTop = true;
        return;
    }

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
    return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down

        $('header').removeClass('nav-down').addClass('nav-up');
        alTop = false;
        menuButton(true);

    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
      }

  lastScrollTop = st;
}

$( window ).load(function() {

    if(screenWidth > 720) {

        var $grid = $('#news-grid');

        $grid.imagesLoaded( function() {
          // init Isotope after all images have loaded
          $grid.isotope({
            itemSelector: '.news',
            percentPosition: true
          });

        }); 
    }

    if(screenWidth > 550) {
        var $labels = $('#labels-grid');

        $labels.imagesLoaded( function() {
          // init Isotope after all images have loaded
          $labels.isotope({
            itemSelector: '.label',
            percentPosition: true
          });

        });

    }

    if(screenWidth < 850) {
        $('.full-video').remove();
        $('.wines').addClass('owl-carousel');
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            touchDrag: true,
            mouseDrag: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                800:{
                    items:2
                }
            }
        });
    }

    if(screenWidth < 720) {

            $('#news-grid').addClass('owl-carousel');

            $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                touchDrag: true,
                mouseDrag: true,
                autoHeight : true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    800:{
                        items:2
                    }
                }
            });

            $('#prizes-carousel').addClass('owl-carousel');

            $('#prizes-carousel').owlCarousel({
                loop:true,
                margin:10,
                touchDrag: true,
                mouseDrag: true,
                autoHeight : true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    800:{
                        items:11
                    }
                }
            });

    }

    $('#events-carousel').owlCarousel({
        margin: 8,
        loop: false,
        items:1,
        dots: false,
        nav: true,
        navText: ['&#10094;','&#10095;'],
        responsive:{
                    400:{
                        items:1
                    },
                    700:{
                        items:2
                    },
                    1200:{
                        items:3
                    },
                    1300:{
                        items:3
                    }
        }
    });

    var $gridNews = $('#news-grid-full');

    $gridNews.imagesLoaded( function() {
          // init Isotope after all images have loaded
        $gridNews.isotope({
            itemSelector: '.news',
            percentPosition: true
        });

    });

	$gridNews.bind('DOMNodeInserted DOMNodeRemoved', function(event) {
    if (event.type == 'DOMNodeInserted') {
	    //alert('cargo');
        $gridNews.isotope( 'layout' );
    }
});
	
});

function safariAddressBar() {
    $(window).on('resize', function () {
        //alert(screenHeight);
        //alert($(window).height());

       $('.selection-overlay').css('height', 600);
    });
}


$(document).on('ready', function(){

    var ua = window.navigator.userAgent;

    if (ua.indexOf('iPhone') !== -1 && ua.indexOf('Safari') !== -1){
        safariAddressBar();
    }

    function listHeight(listName) {
        var number = 0;
        var name = listName + ' li';

        $(name).each( function() {
            number += 1;
        });

        var liHeight = $(listName + ' li').outerHeight();
        return liHeight * number;
    }

	$('#nav-icon').click(function(){

        if ($('.menu-overlay').hasClass('menu-open')){
            if ( calc > '1' ) {
                menuButton(false);
            }
        } else {
            menuButton(true);
        }

        $('.menu-overlay').removeClass('menu-delay');

        $('.menu-overlay a').toggleClass('show-links');
        $(this).toggleClass('open');
        $('.menu-overlay').toggleClass('menu-open');
        $('.menu-overlay a').toggleClass('show-links');
        $('.search-bt').toggleClass('no-opacity');
        $('header').toggleClass('no-back');
        $('header a').toggleClass('no-opacity');

        $('.wrapper').toggleClass('body-overflow');
        $('.cont-wrapper').toggleClass('body-overflow');
        $('html,body').toggleClass('body-overflow');


        screenHeight = $(window).height();
        //alert(screenHeight);
        //$('.menu-overlay').css('height', screenHeight );

	});

  var $bottles = $('#bottles-grid');
      $bottles.imagesLoaded( function() {
        // init Isotope after all images have loaded
        $bottles.isotope({
          itemSelector: '.bottle',
          percentPosition: true
        });
  });

      // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  $('.vinos.selection-overlay ul li').on("click", function() {
     $(this).toggleClass('selected');
     clases = [];
     cepasV = [];
     lineasV = [];
     ocasionesV = [];

     var cepas = $("#lista-cepa .selected");
     cepas = (cepas.length == 0)?[false]:cepas;

     var lineas = $("#lista-linea .selected");
     lineas = (lineas.length == 0)?[false]:lineas;

     var ocasiones = $("#lista-ocasion .selected");
     ocasiones = (ocasiones.length == 0)?[false]:ocasiones;

     $.each(cepas, function(j, cepa) {
        var auxCepa = (cepa!=false)?'.'+$(cepa).attr('data-filter'):'';
        $.each(lineas, function(i, linea) {
            var auxLinea = (linea!=false)?auxCepa+'.'+$(linea).attr('data-filter'):auxCepa;
            $.each(ocasiones, function(o, oca) {
                var auxOca = (oca!=false)?auxLinea+'.'+$(oca).attr('data-filter'):auxLinea;
                clases.push(auxOca);
            });
        });
     });
  });

  var $filterTags = $('ul.filter-tags');
  var $filters = $('.selection-overlay ul li');

  $('.selection-overlay .filter').on("click", function() {
    if (clases.length > 0 && clases != null) {

        $bottles.isotope({filter: clases.join(", ")});

        $filterTags.find('li').addClass('hidden');

        $.each($filters, function(f, filter) {
            if ( $(filter).hasClass('selected') ) {
                var klass = $(filter).attr('data-filter');
                $filterTags.find('li.'+klass).removeClass('hidden');
            }
        })
    }

    //ocultar selection-overlay
    $('.selection-overlay').removeClass('show');
    $('html, body').removeClass('body-overflow');
    moveUp = 0;
    moveDown = 0;
    move = 0;
    activeList = 0;
    activeHeight = 0;
    lastScrollTop = 0;
  });
	
	$('.selection-overlay .right-apply').on("click", function() {
    if (clases.length > 0 && clases != null) {

        $bottles.isotope({filter: clases.join(", ")});

        $filterTags.find('li').addClass('hidden');

        $.each($filters, function(f, filter) {
            if ( $(filter).hasClass('selected') ) {
                var klass = $(filter).attr('data-filter');
                $filterTags.find('li.'+klass).removeClass('hidden');
            }
        })
    }

    //ocultar selection-overlay
    $('.selection-overlay').removeClass('show');
    $('html, body').removeClass('body-overflow');
    moveUp = 0;
    moveDown = 0;
    move = 0;
    activeList = 0;
    activeHeight = 0;
    lastScrollTop = 0;
  });

    //clicked label - hide label and remove filter
    $filterTags.on("click", "li", function(){

        var tagClass = $(this).attr('class');
        var $filter = $('.selection-overlay li[data-filter="'+tagClass+'"]');
        $filter.removeClass('selected');

        clases = [];
        cepasV = [];
        lineasV = [];
        ocasionesV = [];

        var cepas = $("#lista-cepa .selected");
        cepas = (cepas.length == 0)?[false]:cepas;

        var lineas = $("#lista-linea .selected");
        lineas = (lineas.length == 0)?[false]:lineas;

        var ocasiones = $("#lista-ocasion .selected");
        ocasiones = (ocasiones.length == 0)?[false]:ocasiones;

        $.each(cepas, function(j, cepa) {
            var auxCepa = (cepa!=false)?'.'+$(cepa).attr('data-filter'):'';
            $.each(lineas, function(i, linea) {
                var auxLinea = (linea!=false)?auxCepa+'.'+$(linea).attr('data-filter'):auxCepa;
                $.each(ocasiones, function(o, oca) {
                    var auxOca = (oca!=false)?auxLinea+'.'+$(oca).attr('data-filter'):auxLinea;
                    clases.push(auxOca);
                });
            });
        });

        if (clases.length > 0) {
            $('.selection-overlay .filter').trigger('click');
        } else {
            $bottles.isotope({ filter: '*' });
        }
    })

    $('.selection li').on("click", function() {

        if (!$(this).hasClass('bt-delete')) {

            $('.wrapper').toggleClass('body-overflow');
            $('.cont-wrapper').toggleClass('body-overflow');
            $('html,body').toggleClass('body-overflow');

            id = $(this).attr("id");
            $('.selection-overlay ul').css('display','none');
            switch(id) {
                case 'cepa':
                    $('.selection-overlay h2').html('Seleccione la cepa');
                    activeList = '#lista-cepa';
                    break;
                case 'linea':
                    $('.selection-overlay h2').html('Seleccione la linea');
                    activeList = '#lista-linea';
                    break;
                case 'ocasion':
                    $('.selection-overlay h2').html('Seleccione la ocasión');
                    activeList = '#lista-ocasion';
                    break;
            }
            $('#lista-'+id).css('display','inline-block');
            $('.selection-overlay').toggleClass('show');

            activeHeight = listHeight(activeList);


            if(screenWidth < 720 || screenWidth > 550 ) {

                $(activeList).bind('scroll', function() {
                    var st = $(this).scrollTop();
                    if (st > lastScrollTop){
                        movingDown(false);
                    } else {
                       movingUp(false);
                    }
                    lastScrollTop = st;
                });

                if ( $(activeList).outerHeight() > activeHeight ) {
                    $('#down').css('display','none');
                    $('#up').css('display','none');
                }

            } else {
                $('.arrows-list').css('display', 'none');
            }

            if (screenWidth < 550) {
                //alert(screenHeight);
                $('.arrows-list').css('display', 'none');
                $(activeList).css('height', screenHeight - $('header').outerHeight());
            }

            $('html, body').css('body-overflow');

        } else { //detele filters button
            clases = [];
            $bottles.isotope({ filter: '*' });
            $('.selection-overlay ul li.selected').removeClass('selected');

            //oculto filter tags
            $('.filter-tags li').each(function(element){
              $(this).addClass('hidden');
            });
            history.pushState(null, '', '#');
        }

    });

    var $containerPremiosBodega = $('#container-premios-bodega');
    var $containerPremiosLinea = $('#container-premios-lineas');
    var $prizesList = $containerPremiosLinea.find('.prizes-list');

    //muestra los premios de la bodega
    $('.show-bodega-premios').on("click", function() {
        $containerPremiosBodega.removeClass('hide');
        $containerPremiosLinea.addClass('hide');
        return false;
    });

    //muestra los premios por lineas
    $('.linea-premios').on("click", function() {
        $('#lista-linea').css('display','inline-block');
        $('.selection-overlay').toggleClass('show');
        return false;
    });

    var $filterPrizeLine = $('.prizes-template.selection-overlay ul li');
    $filterPrizeLine.on("click", function() {
        $.each($filterPrizeLine, function(){
         $(this).removeClass('selected');
       })
        $(this).toggleClass('selected');
    });

    //mostrar premios de la linea seleccionada
    // $('.prizes-filter').on("click touchstart", function() {
    //     $containerPremiosLinea.removeClass('hide');
    //     $containerPremiosBodega.addClass('hide');
    //     $('.selection-overlay').toggleClass('show');

    //     $selected = $('.selection-overlay ul li.selected').attr('data-value');
    //     $selected = $selected.toLowerCase();
    //     $selected = $selected.replaceAll(" ", "-");

    //     $.each($prizesList, function() {
    //         if ($(this).attr("data-value") === $selected) {
    //             if ($(this).hasClass('hide')) {
    //                 $(this).removeClass('hide');
    //             }
    //         } else {
    //             if (!$(this).hasClass('hide')) {
    //                 $(this).addClass('hide');
    //             }
    //         }
    //     });
    //     return false;
    // });

    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
    };

    $(document).ready(function(){
      if(!window.localStorage.getItem('age-filter')){
        $('#age-filter').css('display', 'block');
      }
    })

    $(document).ready(function(){
      $('#age-filter .submit').on("click", function() {
        if ( $('.age').prop('checked') ) {
  				window.localStorage.setItem('age-filter', true);
          $('#age-filter').css('display', 'none');
  			} else {
          window.localStorage.setItem('age-filter', false);
        }
      })
    })

    $('#reservas-resmio').on("click", function(e) {
        e.preventDefault();
        $('.resmio').toggleClass('resmio-show');
        if (screenWidth < 550) {
          $('html, body').css('overflow','hidden');
        }
        return false;
    });
	$('#reservas-resmio2').on("click", function(e) {
        e.preventDefault();
        $('.resmio').toggleClass('resmio-show');
        if (screenWidth < 550) {
          $('html, body').css('overflow','hidden');
        }
        return false;
    });

    $('.close-resmio').on("click", function(e) {
        e.preventDefault();
        $('.resmio').toggleClass('resmio-show');
        if (screenWidth < 550) {
            $('html, body').css('overflow','auto');
        }
        return false;
    });

    $('.contact-link').on("click", function(e) {
        e.preventDefault();
        $('.contact').toggleClass('show');
        $('html, body').css('overflow','hidden');
        return false;
    });

    $('.close-contact').on("click", function() {
       $('.contact').toggleClass('show');
       $('html, body').css('overflow','auto');
    });

    $('.close-selection').on("click", function() {
       $('.selection-overlay').toggleClass('show');
       $('html, body').removeClass('body-overflow');
       moveUp = 0;
       moveDown = 0;
       move = 0;
       activeList = 0;
       activeHeight = 0;
       lastScrollTop = 0;
    });

    function getProducts(){

      var cepas = '';
      $('#lista-cepa .selected').each(function(index, element){
        cepas = cepas + $(element).attr('data-value') + ',';
      })
      cepas = cepas.substring(0, cepas.length - 1);

      var lineas = '';
      $('#lista-linea .selected').each(function(index, element){
        lineas = lineas + $(element).attr('data-value') + ',';
      })
      lineas = lineas.substring(0, lineas.length - 1);

      var url = $('#productsurl').val();
      if(cepas.length > 0){
        url += '?c=' + cepas;
      }
      if (lineas.length > 0){
        if(cepas.length > 0){
          url += '&l=' + lineas;
        }else{
          url += '?l=' + lineas;
        }
      }
      $('#bottles-grid').load( url + ' #bottles-grid > *');
    }

    $('.search-bt').on("click", function() {
        $('.search').toggleClass('show');
        $('.wrapper').toggleClass('body-overflow');
        $('.cont-wrapper').toggleClass('body-overflow');
        $('html,body').toggleClass('body-overflow');
    });

    $('.select-option').on("click", function() {
        id = $(this).attr("id");
        $('.selection-overlay ul').css('display','none');
        $('#lista-recommended').css('display','inline-block');
        $('.selection-overlay').toggleClass('show');
    });

    $('#grid-filters').on("click", function(e) {
        e.preventDefault();
        $('.selection').toggleClass('show-filters');
        return false;
    });

    function movingUp(arrowMove) {

        moveUp = moveUp - $(activeList).outerHeight();
        moveDown = moveUp;
        $('#down').removeClass('arrow-disabled');
        if (arrowMove) {
            $(activeList).animate({ scrollTop: $(activeList).offset().top + moveUp }, 800);

            if (moveDown < activeHeight/2){
                $('#down').removeClass('arrow-disabled');
            }

            if (moveUp < 0){
                $('#up').addClass('arrow-disabled');
                moveUp = 0;
            }
        } else {
            if (lastScrollTop>=0){
               $('#up').addClass('arrow-disabled');
            }
        }
    };

    /*$("#up").click(function (){
        movingUp(true);
    });*/

    function movingDown(arrowMove) {
        moveDown = moveDown + $(activeList).outerHeight();
        $('#up').removeClass('arrow-disabled');

        moveUp = moveDown;

        if (arrowMove) {
            $(activeList).animate({ scrollTop: $(activeList).offset().top + moveDown }, 800);

            if (moveDown >= activeHeight/2){
                $('#down').addClass('arrow-disabled');
                moveDown = 0;
            }

            if (moveUp > 0){
                $('#up').removeClass('arrow-disabled');
            }
        } else {
            if (lastScrollTop>=($(activeList).outerHeight()/3)-1){
                $('#down').addClass('arrow-disabled');
            }
        }
    }

    /*$("#down").click(function (){
        movingDown(true);
    });*/

    /*$("#more").click(function (){
        alert(activeList);
        move += $(activeList).outerHeight();
        //alert(move);
        $(activeList).animate({ scrollTop: $(activeList).offset().top + move }, 800);
    });*/

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
        grabCursor: true
    });


    $(document).ready(function() {

        $('.campo input').on('focus', function(){
            value = $(this).val();
            if(value === '') {
                $(this).parent().find('label').toggleClass('text-focus');
                $(this).parent().find('span').toggleClass('line-focus');
            }

        });

        $('.campo input').on('blur', function(){
            value = $(this).val();
            if(value === '') {
                $(this).parent().find('label').toggleClass('text-focus');
                $(this).parent().find('span').toggleClass('line-focus');
            }
        });

    });

    $('.enviar').on("click", function() {
      var allComplete = true;

      $(this).parent().find('input').each(function(index, element){
        value = $(this).val();
        if(value === '') {
          $(element).addClass('required-input-contact');
          allComplete = false;
        } else {
          $(element).removeClass('required-input-contact');
        }
      });

      var optionSelected = $(this).parent().find('select').val();
      if (!optionSelected){
        $(this).parent().find('select').addClass('required-input-contact');
        allComplete = false;
      } else {
        $(this).parent().find('select').removeClass('required-input-contact');
      }
    });

    $('#load-page-submit').on('click', function(){
        var url = $('#load-page-input').val();
        $('#loaded-content').attr("src", url);
    });

    $bottles.on( 'arrangeComplete', function( event, filteredItems ) {
    if (history.pushState) {
      if ( typeof clases == 'object' &&  clases.length ) {
        history.pushState(null, '', '#' + clases.join('|'));
      }
    } else {
      console.warn('History is not enabled');
    }
  });

  // apply filters with the querystring
  if ( window.location.hash.length ) {
    var filters = window.location.hash.slice(1);
    clases = filters.split('|');

    // parse querystring into individual clases
    var individualClasses = [];
    clases.forEach(function(c) {
      c.split('.').forEach(function(f){
        individualClasses.push(f);
      })
    });

    // Add selected class to filters
    individualClasses.forEach(function(klass) {
      if (klass.length) {
        $('#lista-cepa li')
          .filter('[data-filter="'+klass+'"]')
          .addClass('selected');

        $('#lista-linea li')
          .filter('[data-filter="'+klass+'"]')
          .addClass('selected');

        $('#lista-ocasion li')
          .filter('[data-filter="'+klass+'"]')
          .addClass('selected');
      }
    });

    // Trigger filter button. It should filter/sort
    // the products and add the filter tags
    $('.selection-overlay .filter').trigger('click');
  }

	
});
