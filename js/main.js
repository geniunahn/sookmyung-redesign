// main.js

$(function () {
  let bgArr = [
    "../image/main-banner1.jpg",
    "../image/main-banner2.jpg",
    "../image/main-banner3.jpg",
  ];

  let bg_img_num = 0;

  // 배경이미지 변경

  setInterval(function () {
    bg_img_num++;
    if (bg_img_num >= bgArr.length) {
      bg_img_num = 0;
    }

    $("#main-banner .container").css({
      "background-image": `url(${bgArr[bg_img_num]})`,
    });
  }, 5000);
});

//  PC 사이트맵(모바일 GNB) 버튼

$(function () {
  $("#btn-toggle").on("click", function () {
    $("#site-map-menu").toggleClass("show");
  });

  $("#site-menu-close").on("click", function () {
    $("#site-map-menu").removeClass("show");
  });
});

$(function () {
  // GNB 1단계 a 기본 이벤트 제거
  $("#site-map-menu .site-menu .depth1 > li > div > a").on(
    "click",
    function (event) {
      // 여기다 toggle 기능 추가
      // 사이트맵 1번 a 태그의 형제 관계에 있는 depth2 ul 태그를 선택하여 클릭할 경우 show 클래스를 추가하여 display:block 으로 보이게 한다!  (당연히 기본적으로 모바일 style 시트에서 depth2 는 display:none 상태여야 한다.)
      $(this).next().toggleClass("show");
      event.preventDefault();
    }
  );
});
