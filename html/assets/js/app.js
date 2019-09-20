$(function () {
  // トップページボタン
  let appear = false;
  let pagetop = $('.page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'right': '1%' //右から0pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'right': '-50px' //右から-50pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
  // トップページボタンここまで

  // タイトル、要素をふわっとだす
  $(function () {
    $(window).scroll(function () {
      $("#about,#skills,#portfolios,#contact,#contactmail").each(function () {
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight / 5) {
          $(this).addClass("fade_on");
        } else {
          $(this).removeClass("fade_on");
        }
      });
    });
  });


  // タイトル、要素をふわっとだすここまで
});
