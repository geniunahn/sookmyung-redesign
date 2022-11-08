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

// 사이트맵 버튼

$(function () {
  $("#btn-toggle").on("click", function () {
    $("#site-map-menu").addClass("show");
  });

  $("#site-menu-close").on("click", function () {
    $("#site-map-menu").removeClass("show");
  });
});
