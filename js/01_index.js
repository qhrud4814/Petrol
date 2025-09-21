// TODO : Swiper //
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// TODO : #fab 이모지 스크롤탑
$(function () {
  $(".Polygon1").click(function () {
      // #fab 를 클릭하면
      $("html").animate({scrollTop: 0},1000);
  })
})
