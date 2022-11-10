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
"use strict";

function getData() {
  var apiUrl = "http://localhost:3000/users";
  axios.get(apiUrl).then(function (res) {
    console.log(res);
  });
} // getData();


function signUp() {
  var apiUrl = "http://localhost:3000/register";
  var obj = {
    "email": "olivier@mail.com",
    "password": "bestPassw0rd"
  };
  axios.post(apiUrl, obj).then(function (res) {
    console.log(res.data.accessToken);
  });
}

function login() {
  var apiUrl = "http://localhost:3000/600/users/1";
  var config = {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9saXZpZXJAbWFpbC5jb20iLCJpYXQiOjE2NjgwOTY0NzMsImV4cCI6MTY2ODEwMDA3Mywic3ViIjoiMSJ9.mhRI2PvquZr_D718yyTwOwhR5WKL3gjoTkrd6jOVXEQ"
    }
  };
  var data = {
    "email": "olivier@mail.com",
    "password": "bestPassw0rd"
  };
  axios.post(apiUrl, data, config).then(function (res) {
    console.log(res.data.user, "\u72C0\u614B\u78BC ".concat(res.status));
  })["catch"](function (err) {
    console.log(err);
  });
} // signUp();


login();
"use strict";

var candidateDOM = document.querySelector(".candidate");
var productBacklogDOM = document.querySelector(".productBacklog");
var candidate = Sortable.create(candidateDOM, {
  group: "shared",
  animation: 500 // onEnd: (event) => {
  //   console.log(event.to);
  //   console.log(event.from);
  //   console.log(event.oldIndex);
  //   console.log(event.newIndex);
  // }

});
var productBacklog = Sortable.create(productBacklogDOM, {
  group: "shared",
  onChange: function onChange(e) {
    var order = productBacklog.toArray(); // 取得 dataset

    console.log(order);
  }
});
"use strict";

tinymce.init({
  selector: '#tinyText',
  plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount code tinydrive',
  toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | code codesample|'
});
var tiny = document.querySelector('#tinymce');
var editor = document.querySelector('[data-editor]');
editor.addEventListener('submit', function (e) {
  e.preventDefault();
  tinymce.activeEditor.setContent("<p>Hello world!</p>"); // 設定 editor 內容

  console.log(tinymce.activeEditor.getContent("tinyText")); // 獲取 editor 內容
});
//# sourceMappingURL=all.js.map
