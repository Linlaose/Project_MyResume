var resumeSwiper = new Swiper(".resumeSwiper", {
  slidesPerView: 1,
  spaceBetween: 12,
  grabCursor: true,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
    992: {
      slidesPerView: 3
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});