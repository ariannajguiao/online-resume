$(document).ready(function () {
  var workSwiper = new Swiper('.swiper-container.work-swiper', {
    slidesPerView: 1,
    loop: true,
    observer: true,
    observeParents: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    // breakpoints: {
    //   991: {
    //     slidesPerView: 4,
    //   },
    //   767: {
    //     slidesPerView: 3,
    //   },
    //   320: {
    //     slidesPerView: 1
    //   }
    // }
  });
});

$(document).ready(function () {

  $('.progress-bar').each(function () {
    $(this).find('.progress-content').animate({
      width: $(this).attr('data-percentage')
    }, 2000);

    $(this).find('.progress-number-mark').animate(
      { left: $(this).attr('data-percentage') },
      {
        duration: 2000,
        step: function (now, fx) {
          var data = Math.round(now);
          $(this).find('.percent').html(data + '%');
        }
      });
  });
});