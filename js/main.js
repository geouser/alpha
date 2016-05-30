// Global parameters
window.params = {
  widthFull: 750,
  maxRowHeight: 0,
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
};

jQuery(document).ready(function($) {

/*---------------------------
                              ADD CLASS ON SCROLL
---------------------------*/
$(function() { 
  var $document = $(document),
      $element = $('.menu-button'),
      $element2 = $('header'),
      className = 'hasScrolled';

  $document.scroll(function() {
    $element.toggleClass(className, $document.scrollTop() >= 1);
    $element2.toggleClass(className, $document.scrollTop() >= 1);
  });
});


/*---------------------------
                              MENU TOGGLE
---------------------------*/
$('.menu-button').on('click', function(event) {
  event.preventDefault();
  $(this).toggleClass('active');
  $(this).siblings('header').toggleClass('active');
  if ($('header').hasClass('active')) {
      $('body, html').css('overflow', 'hidden');
    } else {
      $('body, html').css('overflow', 'visible');
    }
});


/*-------------------------------------------------------*/
  $('.clients__slider').slick({
    dots: false,
    arrows: true,
    lazyLoad: 'ondemand',
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});




$(window).load(function () {
    var heights = $('.tab__info').map(function ()
    {
       if ($(this).height() > 429) {
          var x = Math.floor($(this).height()/429) + 1;
          $(this).addClass('height-' + x );
          $(this).attr('data-num', x);
        }
    }).get();
    $('.tabs').tabs();


    var now = 1;
    var top = 0;

    $('.next').click(function(){
        var position = parseInt($(this).siblings().attr('data-num'));
        if (now < position) {
            top -= 430
            $(this).siblings('.tab__info').css("top", top + "px");
            now ++;
        }
    });
    $('.prev').click(function(){
        if (now > 1) {
            top +=  430;
            $(this).siblings('.tab__info').css("top", "-" + top + "px")
            now --;
        }
    });

});  