// Custom Scripts for Primal Template //

jQuery(function($) {
    "use strict";


        // get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
        var mainbottom = $('#main').offset().top;

        // on scroll,
        /*$(window).on('scroll',function(){

          // we round here to reduce a little workload
          stop = Math.round($(window).scrollTop());
          if(!$('.navbar').hasClass('faq')){
            if (stop > mainbottom) {
              $('.navbar').addClass('past-main');
              $('.navbar').addClass('effect-main')
            }
            else {
              $('.navbar').removeClass('past-main');
            }
          }
        });*/


  // Collapse navbar on click

  $(document).on('click.nav','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
    $(this).removeClass('in').addClass('collapse');
   }
  });



    /*-----------------------------------
    ----------- Scroll To Top -----------
    ------------------------------------*/

    $(window).scroll(function () {
      if ($(this).scrollTop() > 1000) {
          $('#back-top').fadeIn();
      } else {
          $('#back-top').fadeOut();
      }
    });
    // scroll body to 0px on click
    $('#back-top').on('click', function () {
      $('#back-top').tooltip('hide');
      $('body,html').animate({
          scrollTop: 0
      }, 600);
      return false;
    });





  /*-------- Owl Carousel ---------- */
    $(".reviews").owlCarousel({

    slideSpeed : 200,
    items: 1,
    singleItem: true,
    autoPlay : true,
    pagination : false
    });


  /* ------ Clients Section Owl Carousel ----- */

    $(".clients").owlCarousel({
    slideSpeed : 200,
    items: 5,
    singleItem: false,
    autoPlay : true,
    pagination : false
    });


  /* ------ jQuery for Easing min -- */

    $(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 600, 'easeInOutExpo');
        event.preventDefault();
    });
  });



/* --------- Wow Init ------ */

  new WOW().init();


  /* ----- Counter Up ----- */

$('.counter').counterUp({
		delay: 10,
		time: 1000
});


/*----- Preloader ----- */

    $(window).load(function() {
  		setTimeout(function() {
        $('#loading').fadeOut('slow', function() {
        });
      }, 3000);
    });


  /*$('li a.page-scroll').click(function(){

    $('.page-scroll').removeClass('selcted_menu');
    $(this).addClass('selcted_menu');
  });*/


  $('.anchore_lable').click(function(){
    if($(this).hasClass('collapsed')){
      $(this).find('.anchor_sign').removeClass('fa fa-plus').addClass('fa fa-minus');
    }
    else{
      $(this).find('.anchor_sign').removeClass('fa fa-minus').addClass('fa fa-plus');
    }
  });

  $('#get_access').click(function(){
    
    var con = 'html,body';
    
    $(con).animate({
        scrollTop: $('#get_access_div').offset().top-150
    });

  });
  
});
