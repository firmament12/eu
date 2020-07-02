$(function(){
    
// bxslider
  $('.slider').bxSlider({
    mode: 'fade',
    auto: true,
    pager: false,
    pause: 6400,
    speed: 1400
  });
    
// ハンバーガーメニュー
  $('#nav').on('click',function(){
    $('#gnav').toggleClass('click');
    if ($('#gnav').hasClass('click')) {
      $('body').css('position','fixed').css('overflow','hidden');
      $('#gnav').animate({'left':'0','top':'60px'},200);
    } else {
      $('body').css('position','static').css('overflow','auto');
      $('#gnav').animate({'left':'100%','top':'60px'},200);
    }
    $(this).toggleClass('hamburger');
  });
    
// アコーディオンパネル
  $('dt').on('click',function(){
    if ($(this).hasClass('current')) {
      $(this).removeClass('current');
      $(this).next().slideUp(400);
      $('#A,#B').css('border-bottom','1px solid #fff');
  } else {
      $('dt').removeClass('current');
      $(this).addClass('current');
        if ($(this).next().css('display') === 'none') {
          $('dd').slideUp(400);
          $(this).next().slideDown(500);
        }
      $('#A,#B').css('border-bottom','1px solid #fff');
      $(this).css('border-bottom','0');
    }
  });
    
// 日時
  setInterval(function(){
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth()+1;
    var date = now.getDate();
    var day = now.getDay();
    var week = ['日','月','火','水','木','金','土'];
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var mm = ('0' + month).slice(-2);
    var dd = ('0' + date).slice(-2);
    var hh = ('0' + hour).slice(-2);
    var mi = ('0' + minute).slice(-2);
    var ss = ('0' + second).slice(-2);
    $('#now').html(year+'年'+mm+'月'+dd+'日'+week[day]+'曜日<br>'+hh+'時'+mi+'分'+ss+'秒');
  }, 1000);
    
// くじ
    var fortune = ['大吉','吉','中吉','小吉','末吉','凶','大凶'];
  $('#result').on('click',function(){
    var rnd = Math.floor(Math.random()*fortune.length);
    var raffle = fortune[rnd];
    $('#ans').css('font-size','28px');
    if (raffle === '大吉') {
      $('#ans').addClass('good');
      $('#ans').animate({'font-size':'40px'},300);
    } else {
      $('#ans').removeClass('good');
    }
    if (raffle === '大凶') {
      $('#ans').addClass('bad');
    } else {
      $('#ans').removeClass('bad');
    }
    $('#result').text('もう一度占う');
    $('#ans').html('<span>「</span>' +raffle+ '<span>」</span>');
    if (fortune.length === 7) {
      fortune.splice(rnd,1);
      localStorage['add'] = raffle
    } else {
      fortune.splice(rnd,1);
      fortune.splice(5,0,localStorage['add']);
      localStorage['add'] = raffle
    }
  });
    
// ページトップナビボタン
  $(window).scroll(function(){
    if ($(this).scrollTop()>170) {
        $('#top').fadeIn(300);
    } else {
        $('#top').fadeOut(300);
  }});
  $('#top>a').on('touchend click',function(){
    $('html,body').animate({'scrollTop':'0'},500);
    return false;
  });
    
});