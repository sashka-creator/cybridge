jQuery(document).ready(function () {
     

 jQuery('.contact__btn').click( function() {
   var form = jQuery(this).closest('form');
   
   if ( form.valid() ) {
     form.css('opacity','1');
     var actUrl = form.attr('action');

     jQuery.ajax({
       url: actUrl,
       type: 'post',
       dataType: 'html',
       data: form.serialize(),
       success: function(data) {
         form.html(data);
         form.css('opacity','1');
                 //form.find('.status').html('форма отправлена успешно');
                 //$('#myModal').modal('show') // для бутстрапа
       },
       error:	 function() {
            form.find('.status').html('серверная ошибка');
       }
     });
   }
 });


});


$(window).on('load', function () {
    $('#preloader').fadeOut('slow', function() {});
    $("html,body").addClass("hidden");
      setTimeout(function () { 
      $("html,body").removeClass("hidden");   
      }, 2000);  
  });

$(document).ready(function() {
    $('.contact__board__active__btn, .close, .project__about__btn__more__more').click(function(event) {
      $('.modal').toggleClass('visib');
    });
  });

$(document).ready(function() {
    $('.burger, .modal__close').click(function(event) {
      $('.burger__modal').toggleClass('visib');
    });
  });  

  var swiper = new Swiper('.slider .swiper-container', {
    
    
    slidesPerView: 1,
    spaceBetween: 20,

    autoplay: {
        delay: 3000,
    },

    speed: 1000,
  });

  var swiper = new Swiper('.projects__slider__inner .swiper-container', {

    slidesPerView: 1,
    spaceBetween: 20,

    pagination: {

      el: '.swiper-pagination',
      clickable: true,

    },


    autoplay: {
        delay: 3000,
    },

    speed: 1000,
  });

  
  var swiper = new Swiper('.project__slider .swiper-container', {
    
    
    slidesPerView: 3,
    spaceBetween: 40,

    autoplay: {
        delay: 3000,
    },

    speed: 1000,
  });
    
  var swiper = new Swiper('.team__slider__inner .swiper-container', {
    
    
    slidesPerView: 2,
    spaceBetween: 20,

    autoplay: {
        delay: 3000,
    },

    speed: 1000,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {

      10: {
        slidesPerView: 1,
      },

      460: {
        slidesPerView: 1,
      },

      770: {
        slidesPerView: 2,
      },

      1000: {
        slidesPerView: 2,
        
      },
  },

  });

  $(".project__about__btn").click(function(){
    $(".project__about__text").slideUp('slow');
    $(".project__about__item").slideUp('slow');
    $(".project__about__rec").slideUp('slow');
    $(".project__about__text-more").slideDown('slow');
    $(".project__about__text-more").css("display", "block");
    $(".project__about__btn__more").fadeIn('slow');
    $(".project__about__btn__more__more").fadeIn('slow');
    $(".project__about__inner__text").css("margin-left", "745px");
    $(".project__about__inner__slider").css("right", "514px");
    $('.project__about__btn').slideUp('slow');
    $(".project__about__btn").css("display", "none");
 });

 $(".project__about__btn__more").click(function(){
  $(".project__about__text").slideDown('slow');
  $(".project__about__item").slideDown('slow');
  $(".project__about__rec").slideDown('slow');
  $(".project__about__text-more").slideUp('slow');
  $('.project__about__btn__more').slideUp('slow');
  $('.project__about__btn__more__more').slideUp('slow');
  $(".project__about__btn__more").css("display", "none");
  $(".project__about__inner__text").css("margin-left", "0");
  $(".project__about__inner__slider").css("right", "0");
  $('.project__about__btn').slideDown('slow');
  $(".project__about__btn").css("display", "flex");
});


$("#blockchain").click(function(){
  $('.blockchain').addClass('active');
  $('.bigdata').removeClass('active');
});

$("#bigdata").click(function(){
  $('.blockchain').removeClass('active');
  $('.bigdata').addClass('active');
});

jQuery(document).ready(function($) {
  $(window).load(function() {
    setTimeout(function() {
      $('.portfolio__rec').css("opacity", "1");
    }, 500);

  });
});

var body = document.querySelector('body')
window.addEventListener('scroll', (event) => {
  let scroll = this.scrollY;  

  if(scroll >= 0 || scroll <= 500) {
    $(".cube__item__item-1").css("top", "120px");
    $(".cube__item__item-1").css("right", "470px");
    $(".cube__item__item-2").css("top", "200px");
    $(".cube__item__item-2").css("right", "20px");
    $(".cube__item__item-3").css("top", "360px");
    $(".cube__item__item-3").css("right", "30px");
    $(".cube__item__item-4").css("left", "100px");
    $(".cube__item__item-4").css("bottom", "10px");
    $(".cube__item__item-9").css("top", "50px");
    $(".cube__item__item-9").css("right", "232px");
    $(".cube__item__item-10").css("top", "136px");
    $(".cube__item__item-10").css("right", "229px");
    $(".cube__item__item-12").css("top", "230px");
    $(".cube__item__item-13").css("top", "323px");
    $(".cube__item__item-14").css("top", "362px");
    $(".cube__item__item-15").css("top", "404px");
  }


  if(scroll > 300) {
    $(".cube__item__item-1").css("top", "185px");
    $(".cube__item__item-1").css("right", "377px");
  }

  if(scroll > 600) {
    $(".cube__item__item-2").css("top", "253px");
    $(".cube__item__item-2").css("right", "80px");
    $(".cube__item__item-10").css("top", "186px");
    $(".cube__item__item-10").css("right", "229px");
  }

  if(scroll > 900) {
    $(".cube__item__item-3").css("top", "276px");
    $(".cube__item__item-3").css("right", "229px");
    $(".cube__item__item-3").css("right", "229px");
    $(".cube__item__item-12").css("top", "270px");
    $(".cube__item__item-13").css("top", "338px");
    $(".cube__item__item-14").css("top", "353px");
    $(".cube__item__item-15").css("top", "372px");
  }

  if(scroll > 1200) {
    $(".cube__item__item-4").css("left", "178px");
    $(".cube__item__item-4").css("bottom", "97px");
    $(".cube__item__item-9").css("top", "77px");
    $(".cube__item__item-9").css("right", "229px");
  }
})

$(document).ready(function() {
  var w = $(window).width(); 
  if (w <= 1250) { 
    $('.map').attr('width', '630');
    $('.map').attr('height', '400');
  }
});

$(document).ready(function() {
  var w = $(window).width(); 
  if (w <= 1000) { 
    $('.map').attr('width', '430');
    $('.map').attr('height', '400');
  }
});

$(document).ready(function() {
  var w = $(window).width(); 
  if (w <= 770) { 
    $('.map').attr('width', '440');
    $('.map').attr('height', '300');
  }
});

// document.ondragstart = noselect;
//   document.onselectstart = noselect;
//   document.oncontextmenu = noselect;
//   function noselect() {return false;}


