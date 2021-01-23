$(function () {
//アコーディオンメニュー
  // 最初のコンテンツ以外は非表示
  $(".js-faq__accordion--content:not(:first-of-type)").css("display", "none");
  // 矢印の向きを変えておく
  $(".js-faq__accordion--ttl:first-of-type").addClass("open");
 
  $(".js-faq__accordion--ttl").click(function () {
    $(".open").not(this).removeClass("open").next().slideUp(300);
    $(this).toggleClass("open").next().slideToggle(300);
  });


//ハンバーガーメニュー
  $('#nav__toggle').click(function() {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
        $('.header__nav').addClass('active');
    } else {
        $('.header__nav').removeClass('active');
    }
  });


  //ナビゲーションメニュークリックするとメニューを閉じる
  var $win = $(window);

  $win.on('load resize', function() {  
    if (window.matchMedia('(max-width:767px)').matches) {
      // SPの処理
      $('.header__list a[href]').on('click', function(event) {

        $('#nav__toggle').toggleClass('active');

        if ($('#nav__toggle').hasClass('active')) {
            $('.header__nav').addClass('active');
        } else {
            $('.header__nav').removeClass('active');
        }
      });
      //ボタンの方のお問い合わせでも閉じるように。 なぜかnav--wrap a[href]で一緒にできなかったため
      $('.header__nav--wrap>a[href]').on('click', function(event) {

        $('#nav__toggle').toggleClass('active');

        if ($('#nav__toggle').hasClass('active')) {
            $('.header__nav').addClass('active');
        } else {
            $('.header__nav').removeClass('active');
        }
      });
    }
  });

  //スムーススクロール

  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 400; // ミリ秒で記述
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });


});
