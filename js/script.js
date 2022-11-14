jQuery(document).ready(function () {
     
  $(".phone").mask("+380 (99) 999-99-99"); 
 

 jQuery('.info__section__link').click( function() {
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

let time = 1800;
const countDownEl = document.getElementById('done__timer')

setInterval(updateCountdown, 1000);

function  updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? '0' + seconds:seconds;
  countDownEl.innerHTML = `${minutes}:${seconds}`;
  time--;

}


$( "#item-1" ).click(function() {
    $('.exchange__inner__item-1').toggleClass('active');
    $('.exchange__inner__item-2').removeClass('active');
    $('.exchange__inner__item-3').removeClass('active');
    $('.exchange__inner__item-4').removeClass('active');
    $('.exchange__inner__item-5').removeClass('active');
    $('.exchange__inner__item-6').removeClass('active');
    $('.exchange__inner__item-7').removeClass('active');
    $('.exchange__inner__item-8').removeClass('active');
    $('.exchange__inner__item-9').removeClass('active');
    $('.exchange__inner__right__bottom__text-1').html('Bitcoin BTC');
    $(".exchange__inner__right__item-3").css("display", "none");
    $(".exchange__inner__right__item-4").css("display", "none");
    $(".exchange__inner__right__item-5").css("display", "none");
    $(".exchange__inner__right__item-1").css("display", "none");
    $(".exchange__inner__right__item-2").css("display", "none");
  });

  $( "#item-2" ).click(function() {
    $('.exchange__inner__item-1').removeClass('active');
    $('.exchange__inner__item-2').toggleClass('active');
    $('.exchange__inner__item-3').removeClass('active');
    $('.exchange__inner__item-4').removeClass('active');
    $('.exchange__inner__item-5').removeClass('active');
    $('.exchange__inner__item-6').removeClass('active');
    $('.exchange__inner__item-7').removeClass('active');
    $('.exchange__inner__item-8').removeClass('active');
    $('.exchange__inner__item-9').removeClass('active');
    $('.exchange__inner__right__bottom__text-1').html('Ethereun ETH');
    $(".exchange__inner__right__item-3").css("display", "none");
    $(".exchange__inner__right__item-4").css("display", "none");
    $(".exchange__inner__right__item-5").css("display", "none");
    $(".exchange__inner__right__item-1").css("display", "none");
    $(".exchange__inner__right__item-2").css("display", "none");
  });
  
  $( "#item-3" ).click(function() {
    $('.exchange__inner__item-1').removeClass('active');
    $('.exchange__inner__item-2').removeClass('active');
    $('.exchange__inner__item-3').toggleClass('active');
    $('.exchange__inner__item-4').removeClass('active');
    $('.exchange__inner__item-5').removeClass('active');
    $('.exchange__inner__item-6').removeClass('active');
    $('.exchange__inner__item-7').removeClass('active');
    $('.exchange__inner__item-8').removeClass('active');
    $('.exchange__inner__item-9').removeClass('active');
    $('.exchange__inner__right__bottom__text-1').html('USDT TRC20');
    $(".exchange__inner__right__item-3").css("display", "block");
    $(".exchange__inner__right__item-4").css("display", "block");
    $(".exchange__inner__right__item-5").css("display", "block");
    $(".exchange__inner__right__item-1").css("display", "block");
    $(".exchange__inner__right__item-2").css("display", "block");
  });

  $( "#item-4" ).click(function() {
    $('.exchange__inner__item-1').removeClass('active');
    $('.exchange__inner__item-2').removeClass('active');
    $('.exchange__inner__item-3').removeClass('active');
    $('.exchange__inner__item-4').toggleClass('active');
    $('.exchange__inner__item-5').removeClass('active');
    $('.exchange__inner__item-6').removeClass('active');
    $('.exchange__inner__item-7').removeClass('active');
    $('.exchange__inner__item-8').removeClass('active');
    $('.exchange__inner__item-9').removeClass('active');
  });

  $( "#item-5" ).click(function() {
    $('.exchange__inner__item-1').removeClass('active');
    $('.exchange__inner__item-2').removeClass('active');
    $('.exchange__inner__item-3').removeClass('active');
    $('.exchange__inner__item-4').removeClass('active');
    $('.exchange__inner__item-5').toggleClass('active');
    $('.exchange__inner__item-6').removeClass('active');
    $('.exchange__inner__item-7').removeClass('active');
    $('.exchange__inner__item-8').removeClass('active');
    $('.exchange__inner__item-9').removeClass('active');
  });


  $( "#item-6" ).click(function() {
    $('.exchange__inner__right__item-1').toggleClass('active');
    $('.exchange__inner__right__item-2').removeClass('active');
    $('.exchange__inner__right__item-3').removeClass('active');
    $('.exchange__inner__right__item-4').removeClass('active');
    $('.exchange__inner__right__item-5').removeClass('active');
    $('.exchange__inner__right__item-6').removeClass('active');
    $('.exchange__inner__right__item-7').removeClass('active');
    $('.exchange__inner__right__item-8').removeClass('active');
    $('.exchange__inner__right__item-9').removeClass('active');
    $('.exchange__inner__right__bottom__text-2').html('Privat24 UAH');
  });

  $( "#item-7" ).click(function() {
    $('.exchange__inner__right__item-1').removeClass('active');
    $('.exchange__inner__right__item-2').toggleClass('active');
    $('.exchange__inner__right__item-3').removeClass('active');
    $('.exchange__inner__right__item-4').removeClass('active');
    $('.exchange__inner__right__item-5').removeClass('active');
    $('.exchange__inner__right__item-6').removeClass('active');
    $('.exchange__inner__right__item-7').removeClass('active');
    $('.exchange__inner__right__item-8').removeClass('active');
    $('.exchange__inner__right__item-9').removeClass('active');
    $('.exchange__inner__right__bottom__text-2').html('Monobank UAH');
  });

  $( "#item-8" ).click(function() {
    $('.exchange__inner__right__item-1').removeClass('active');
    $('.exchange__inner__right__item-2').removeClass('active');
    $('.exchange__inner__right__item-3').toggleClass('active');
    $('.exchange__inner__right__item-4').removeClass('active');
    $('.exchange__inner__right__item-5').removeClass('active');
    $('.exchange__inner__right__item-6').removeClass('active');
    $('.exchange__inner__right__item-7').removeClass('active');
    $('.exchange__inner__right__item-8').removeClass('active');
    $('.exchange__inner__right__item-9').removeClass('active');
    $('.exchange__inner__right__bottom__text-2').html('Tinkoff RUB');
  });

  $( "#item-9" ).click(function() {
    $('.exchange__inner__right__item-1').removeClass('active');
    $('.exchange__inner__right__item-2').removeClass('active');
    $('.exchange__inner__right__item-3').removeClass('active');
    $('.exchange__inner__right__item-4').toggleClass('active');
    $('.exchange__inner__right__item-5').removeClass('active');
    $('.exchange__inner__right__item-6').removeClass('active');
    $('.exchange__inner__right__item-7').removeClass('active');
    $('.exchange__inner__right__item-8').removeClass('active');
    $('.exchange__inner__right__item-9').removeClass('active');
    $('.exchange__inner__right__bottom__text-2').html('Sbernank RUB');
  });

  $( "#item-10" ).click(function() {
    $('.exchange__inner__right__item-1').removeClass('active');
    $('.exchange__inner__right__item-2').removeClass('active');
    $('.exchange__inner__right__item-3').removeClass('active');
    $('.exchange__inner__right__item-4').removeClass('active');
    $('.exchange__inner__right__item-5').toggleClass('active');
    $('.exchange__inner__right__item-6').removeClass('active');
    $('.exchange__inner__right__item-7').removeClass('active');
    $('.exchange__inner__right__item-8').removeClass('active');
    $('.exchange__inner__right__item-9').removeClass('active');
    $('.exchange__inner__right__bottom__text-2').html('Alfabank RUB');
  });

  $( "#item-11" ).click(function() {
    $('.exchange__inner__right__item-1').removeClass('active');
    $('.exchange__inner__right__item-2').removeClass('active');
    $('.exchange__inner__right__item-3').removeClass('active');
    $('.exchange__inner__right__item-4').removeClass('active');
    $('.exchange__inner__right__item-5').removeClass('active');
    $('.exchange__inner__right__item-6').toggleClass('active');
    $('.exchange__inner__right__item-7').removeClass('active');
    $('.exchange__inner__right__item-8').removeClass('active');
    $('.exchange__inner__right__item-9').removeClass('active');
    $('.exchange__inner__right__bottom__text-2').html('V/M RUB');
  });

  $( "#item-12" ).click(function() {
    $('.exchange__inner__right__item-1').removeClass('active');
    $('.exchange__inner__right__item-2').removeClass('active');
    $('.exchange__inner__right__item-3').removeClass('active');
    $('.exchange__inner__right__item-4').removeClass('active');
    $('.exchange__inner__right__item-5').removeClass('active');
    $('.exchange__inner__right__item-6').removeClass('active');
    $('.exchange__inner__right__item-7').toggleClass('active');
    $('.exchange__inner__right__item-8').removeClass('active');
    $('.exchange__inner__right__item-9').removeClass('active');
    $('.exchange__inner__right__bottom__text-2').html('V/M UAH');
  });

  $( "#item-13" ).click(function() {
    $('.exchange__inner__right__item-1').removeClass('active');
    $('.exchange__inner__right__item-2').removeClass('active');
    $('.exchange__inner__right__item-3').removeClass('active');
    $('.exchange__inner__right__item-4').removeClass('active');
    $('.exchange__inner__right__item-5').removeClass('active');
    $('.exchange__inner__right__item-6').removeClass('active');
    $('.exchange__inner__right__item-7').removeClass('active');
    $('.exchange__inner__right__item-8').toggleClass('active');
    $('.exchange__inner__right__item-9').removeClass('active');
    $('.exchange__inner__right__bottom__text-2').html('V/M USD');
  });

  $( "#item-14" ).click(function() {
    $('.exchange__inner__right__item-1').removeClass('active');
    $('.exchange__inner__right__item-2').removeClass('active');
    $('.exchange__inner__right__item-3').removeClass('active');
    $('.exchange__inner__right__item-4').removeClass('active');
    $('.exchange__inner__right__item-5').removeClass('active');
    $('.exchange__inner__right__item-6').removeClass('active');
    $('.exchange__inner__right__item-7').removeClass('active');
    $('.exchange__inner__right__item-8').removeClass('active');
    $('.exchange__inner__right__item-9').toggleClass('active');
    $('.exchange__inner__right__bottom__text-2').html('N26 EUR');
  });

  function moneyConverterA(valNum) {
    document.getElementById('result-a').innerHTML=valNum*65.7 + " RUB";
  } 

  function moneyConverterB(valNum) {
    document.getElementById('result-b').innerHTML=valNum*65.7 + " RUB";
} 

function moneyConverterC(valNum) {
  document.getElementById('result-c').innerHTML=valNum*65.7 + " RUB";
} 

function moneyConverterD(valNum) {
  document.getElementById('result-d').innerHTML=valNum*41.5 + " UAH";
} 

function moneyConverterE(valNum) {
  document.getElementById('result-e').innerHTML=valNum*41.5 + " UAH";
} 

function moneyConverterF(valNum) {
  document.getElementById('result-f').innerHTML=valNum*65.7 + " RUB";
} 

function moneyConverterG(valNum) {
  document.getElementById('result-g').innerHTML=valNum*41.5 + " UAH";
} 

function moneyConverterH(valNum) {
  document.getElementById('result-h').innerHTML=valNum*1 + " USD";
} 

function moneyConverterI(valNum) {
  document.getElementById('result-i').innerHTML=valNum*1.5 + " EUR";
} 


  function copy(copyId){
    var $inp=$("<input>");
    $("body").append($inp);
    $inp.val($(""+copyId).text()).select();
    document.execCommand("copy");
    $inp.remove();
  }
  $(document).ready(function(){
    $("#copyButton1").click(function(){
      copy('#text1');
    });
  });

  $(".copy, .done__title").click(function(){
    let temp = $("<input>");
    $("body").append(temp);
    temp.val($(".done__title").text()).select();
    document.execCommand("copy");
    temp.remove();
  })

// $(".info__section__btn").click(function(){
//   $(".info__section__4").slideDown('slow');
//   $("#rec").slideDown('slow');
//   $(".info__section__btn").css("display", "none");
//   $(".info__section__link").css("margin-top", "0");

// });


  var btc = document.querySelector('.exchange__inner__item-1')
  var privat = document.querySelector('.exchange__inner__right__item-1')

  
  $('.exchange__inner__right__bottom__link').click(function(){
    if($(".exchange__inner__right__item-3").hasClass('active') & $(".exchange__inner__item-3").hasClass('active')) {
        $('.exchange__inner__right__bottom__link').attr('href', 'exchange-usdt-tinkof.html');
      } else if ($(".exchange__inner__right__item-4").hasClass('active') & $(".exchange__inner__item-3").hasClass('active')) {
        $('.exchange__inner__right__bottom__link').attr('href', 'exchange-usdt-sber.html');
      } else if ($(".exchange__inner__right__item-5").hasClass('active') & $(".exchange__inner__item-3").hasClass('active')) {
        $('.exchange__inner__right__bottom__link').attr('href', 'exchange-usdt-alfa.html');
      } else if ($(".exchange__inner__right__item-1").hasClass('active') & $(".exchange__inner__item-3").hasClass('active')) {
        $('.exchange__inner__right__bottom__link').attr('href', 'exchange-usdt-privat.html');
      } else if ($(".exchange__inner__right__item-2").hasClass('active') & $(".exchange__inner__item-3").hasClass('active')) {
        $('.exchange__inner__right__bottom__link').attr('href', 'exchange-usdt-mono.html');
      } else if ($(".exchange__inner__right__item-6").hasClass('active') & $(".exchange__inner__item-3").hasClass('active')) {
        $('.exchange__inner__right__bottom__link').attr('href', 'exchange-usdt-vm-rub.html');
      } else if ($(".exchange__inner__right__item-7").hasClass('active') & $(".exchange__inner__item-3").hasClass('active')) {
        $('.exchange__inner__right__bottom__link').attr('href', 'exchange-usdt-vm-uah.html');
      } else if ($(".exchange__inner__right__item-8").hasClass('active') & $(".exchange__inner__item-3").hasClass('active')) {
        $('.exchange__inner__right__bottom__link').attr('href', 'exchange-usdt-vm-usd.html');
      } else if ($(".exchange__inner__right__item-9").hasClass('active') & $(".exchange__inner__item-3").hasClass('active')) {
        $('.exchange__inner__right__bottom__link').attr('href', 'exchange-usdt-n26.html');
      } else {
        alert('Please, selecty what you give or what you get');
      }
  });


  