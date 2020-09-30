var square = document.getElementsByClassName('square');

for(var i = 0; i<square.length; i++){
  square[i].addEventListener('mouseenter', function(){
    this.classList.add("rubberBand");
    this.addEventListener("animationend", function(){
      this.classList.remove("rubberBand");
    }, false);
  })
};


$(function(){
  var 
      $fv = $('.header'),
      $header = $('header'),
      fvHeight = $fv.outerHeight();

    $(window).on('load scroll',function(){
      var value = $(this).scrollTop();
      if($(window).width() > 768){
        if( value > fvHeight){
          $header.addClass('fixed');
        }else{
          $header.removeClass('fixed');
        }
      }
    });
});


$(function(){
  $(window).scroll(function (){
      $('.fadein').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 200){
            $(this).addClass('active');
          }else{
            $(this).removeClass('active') ;
        }
      });
  });
});

$('#menu a[href^="#"]').click(function() {
  
      var speed = 400;
  
      var href= $(this).attr("href");
  
      var target = $(href == "#" || href == "" ? 'html' : href);
  
      var position = target.offset().top;
  
      $('body,html').animate({scrollTop:position}, speed, 'swing');
  
      return false;
  
    });
  
    $(function(){
      $('.burger-btn').on('click', function() {
        $('header-nav').slideToggle();
        $(this).toggleClass('active');
    
        if ($(this).hasClass('active')) {
          $('.header-nav').addClass('active');
      } else {
          $('.header-nav').removeClass('active');
      }
      });
    });


    $('.header-nav ul li a').on('click', function() {
      
          $('.header-nav').slideToggle();
      
          $('.header-nav').removeClass('active');
      
      });
      
var $work1 = $('#work1');
  var $work2 = $('#work2');
  var $workModal1 = $('#work1-modal');
  var $workModal2 = $('#work2-modal');
  var touch_start_y;
  var $mask = $('.mask');
  var $close = $('.mask, .close-modal')

    // タッチしたとき開始位置を保存しておく
    $(window).on('touchstart', function(event) {
      touch_start_y = event.originalEvent.changedTouches[0].screenY;
    });

    // つぶやきをクリック
    $work1.on('click', function() {
      // スワイプしているとき
      $(window).on('touchmove.noscroll', function(event) {
        var current_y = event.originalEvent.changedTouches[0].screenY,
            height = $workModal1.outerHeight(),
            is_top = touch_start_y <= current_y && $workModal1[0].scrollTop === 0,
            is_bottom = touch_start_y >= current_y && $workModal1[0].scrollHeight - $workModal1[0].scrollTop === height;
        
        // スクロール対応モーダルの上端または下端のとき
        if (is_top || is_bottom) {
          // スクロール禁止
          event.preventDefault();
        }
      });
      
      // スクロール禁止
      $('html, body').css('overflow', 'hidden');
      
      // モーダルをフェードイン
      $workModal1.fadeIn();
      $mask.fadeIn();
    });

    // つぶやきをクリック
    $work2.on('click', function() {
      // スワイプしているとき
      $(window).on('touchmove.noscroll', function(event) {
        var current_y = event.originalEvent.changedTouches[0].screenY,
            height = $workModal2.outerHeight(),
            is_top = touch_start_y <= current_y && $workModal2[0].scrollTop === 0,
            is_bottom = touch_start_y >= current_y && $workModal2[0].scrollHeight - $workModal2[0].scrollTop === height;
        
        // スクロール対応モーダルの上端または下端のとき
        if (is_top || is_bottom) {
          // スクロール禁止
          event.preventDefault();
        }
      });
      
      // スクロール禁止
      $('html, body').css('overflow', 'hidden');
      
      // モーダルをフェードイン
      $workModal2.fadeIn();
      $mask.fadeIn();
    });

    $close.click ( function() {
      $workModal1.fadeOut();
      $workModal2.fadeOut();
      $mask.fadeOut();
      $('html, body').removeAttr('style');
      // イベントを削除
      $(window).off('touchmove.noscroll');
    });
}



