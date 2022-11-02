"use strict";

$(function () {
  console.log('Hello Bootstrap5');
}); // burger

var burger = document.querySelector('.burger');
var topLine = document.querySelector('.burger__topline');
var midLine = document.querySelector('.burger__midline');
var btmLine = document.querySelector('.burger__btmline');

if (burger) {
  burger.addEventListener('click', function () {
    topLine.classList.toggle("burger__topline--open");
    midLine.classList.toggle("burger__midline--open");
    btmLine.classList.toggle("burger__btmline--open");
  });
}

;
"use strict";

var resumeSwiper = new Swiper(".resumeSwiper", {
  slidesPerView: 1,
  spaceBetween: 12,
  grabCursor: true,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 48
    },
    992: {
      slidesPerView: 3
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}); // 管理頁面履歷類別頁

var headerSwiper = new Swiper(".headerSwiper", {
  slidesPerView: 1,
  spaceBetween: 12,
  grabCursor: true,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var contentSwiper = new Swiper(".contentSwiper", {
  slidesPerView: 1,
  spaceBetween: 12,
  grabCursor: true,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var footerSwiper = new Swiper(".footerSwiper", {
  slidesPerView: 1,
  spaceBetween: 12,
  grabCursor: true,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
//# sourceMappingURL=all.js.map
