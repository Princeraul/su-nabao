'use strict';

(function($){
    $.fn.hoverDelay = function(options){
        var defaults = {
            hoverDuring: 200,
            outDuring: 200,
            hoverEvent: function(){
                $.noop();
            },
            outEvent: function(){
                $.noop();
            }
        };
        var sets = $.extend(defaults,options || {});
        var hoverTimer, outTimer;
        return $(this).each(function(){
            $(this).hover(function(){
                clearTimeout(outTimer);
                hoverTimer = setTimeout(sets.hoverEvent, sets.hoverDuring);
            },function(){
                clearTimeout(hoverTimer);
                outTimer = setTimeout(sets.outEvent, sets.outDuring);
            });
        });
    };

    $(".header-navbar li.item").each(function(){
        var $this = $(this);
        $this.hoverDelay({
            hoverEvent: function(){
                $this.find('.navbar-float').slideDown();
            },
            outEvent: function(){
                $('.navbar-float').slideUp();
            }
        });
    });

    $('#slides').slidesjs({
        width: 1920,
        height: 550,
        navigation: false,
        play: {
            auto: true,
            interval: 5000,
            swap: true
        }
    });

    $('#slider2').slidesjs({
        width: 1200,
        height: 430,
        navigation: false,
        play: {
            auto: true,
            interval: 5000,
            swap: true
        }
    });

    $(window).scroll(function() {
      var header = $('.header');
      var scrollTop = $('body').scrollTop();
      scrollTop > 1000 ? header.addClass('header-show') :  header.removeClass('header-show');
   })

   $('span[data-name="togglebar"]').on('click', function() {
      $(this).find('i').toggleClass('up');
      $(this).next().toggle();
   });

   $('.clickbtn').on('click', function() {
      $('.clickbtn').not(this).removeClass('active');
      $(this).toggleClass('active');
      if($(this).hasClass('active')) {
         var Top = $('#anchor').offset().top;
         $('.register').slideDown();
         $('html,body').animate({scrollTop: Top+1000})
      }else {
         $('.register').slideUp()
      }
   });

   var $qrcodetab = $('.qrcode-info-navbar a[data-name="qrcodetab"]');
   $qrcodetab.on('click', function() {
      var key = $(this).index('a[data-name="qrcodetab"]');
      $(this).addClass('selected').siblings('a[data-name="qrcodetab"]').removeClass('selected')
      $('.tabimg').removeClass('active').eq(key).addClass('active');
   })
})(jQuery);
