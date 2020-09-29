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
      



