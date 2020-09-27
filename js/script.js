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

$(function(){
  $('.burger-btn').on('click', function() {
    $(this).toggleClass('active');
    // return false;

    if ($(this).hasClass('active')) {
      $('.header-nav').addClass('active');
  } else {
      $('.header-nav').removeClass('active');
  }
  });
});

// ハンバーガー メニュー
// $('.burger-btn').on('click',function(){
//   $('.header-nav').fadeToggle(300);
//   $(this).toggleClass('active');
  
//   if ($(this).hasClass('active')) {
//     $('.header-nav').addClass('active');
// } else {
//     $('.header-nav').removeClass('active');
// });
