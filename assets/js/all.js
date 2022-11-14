"use strict";

var myAccount = document.querySelector("[data-myAccount]");
var newPassword = document.querySelector("[data-newPassword]");
var newPasswordConfirm = document.querySelector("[data-newPasswordConfirm]");
var userName = document.querySelector("[data-userName]");
var myResume = document.querySelector("[data-myResume]");

if (myAccount) {
  myAccount.value = JSON.parse(localStorage.getItem("email"));
  userName.innerText = JSON.parse(localStorage.getItem("userName"));
}

if (myResume) {
  userName.innerText = JSON.parse(localStorage.getItem("userName"));
}
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

tinymce.init({
  selector: '#tinyText',
  plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount code tinydrive',
  toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | code codesample|'
});
var tiny = document.querySelector('#tinymce');
var editor = document.querySelector('[data-editor]');

function saveResume() {
  var userId = localStorage.getItem("userId");
  var template = tinymce.activeEditor.getContent("tinyText"); // 獲取 editor 內容

  var token = JSON.parse(localStorage.getItem("token"));
  var apiUrl = "http://localhost:3000/600/users/".concat(userId, "/resumes");
  var data = {
    "userId": "".concat(userId),
    "template": "".concat(template)
  };
  var config = {
    headers: {
      "Authorization": "Bearer ".concat(token)
    }
  };
  axios.post(apiUrl, data, config).then(function (res) {
    console.log(res);
  })["catch"](function (err) {
    console.log(err);
  });
}

if (tiny) {
  editor.addEventListener('submit', function (e) {
    e.preventDefault();
    saveResume();
    tinymce.activeEditor.setContent("<p>Hello world!</p>"); // 設定 editor 內容
  });
}
"use strict";

var loginBtn = document.querySelector("[role=loginBtn]");
var signUpBtn = document.querySelector("[role=signUpBtn]");

if (loginBtn) {
  loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var loginForm = document.querySelector("[data-loginForm]");
    var loginAccount = document.querySelector("[data-loginAccount]");
    var loginPassword = document.querySelector("[data-loginPassword]");
    login(loginAccount.value, loginPassword.value);
    loginForm.reset();
  });
  signUpBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var signUpForm = document.querySelector("[data-signUpForm]");
    var signUpName = document.querySelector("[data-signUpName]");
    var signUpAccount = document.querySelector("[data-signUpAccount]");
    var signUpPassword = document.querySelector("[data-signUpPassword]");
    var signUpPasswordConfirm = document.querySelector("[data-signUpPasswordConfirm]");

    if (signUpPassword.value === signUpPasswordConfirm.value) {
      signUp(signUpName.value, signUpAccount.value, signUpPassword.value, signUpPasswordConfirm.value);
      signUpForm.reset();
    } else {
      alert("請確認註冊密碼");
    }
  });
}

function signUp(name, account, password, passwordConfirm) {
  var apiUrl = "http://localhost:3000/register";
  var obj = {
    // "email": "a123@mail.com",
    // "password": "1qaz2wsx",
    // "name": "Ryan"
    "email": account,
    "password": password,
    "passwordConfirm": passwordConfirm,
    "name": name
  };
  axios.post(apiUrl, obj).then(function (res) {
    console.log(res);
  })["catch"](function (err) {
    console.log(err);
  });
}

;

function login(account, password) {
  var apiUrl = "http://localhost:3000/login";
  var data = {
    // "email": "a123@mail.com",
    // "password": "1qaz2wsx"
    "email": account,
    "password": password
  };
  axios.post(apiUrl, data).then(function (res) {
    alert("請求成功");
    localStorage.setItem("email", JSON.stringify(res.data.user.email));
    localStorage.setItem("userName", JSON.stringify(res.data.user.name));
    localStorage.setItem("userId", JSON.stringify(res.data.user.id));
    localStorage.setItem("token", JSON.stringify(res.data.accessToken));
    alert("localStorage 儲存完畢");
    window.location.href = "account.html";
    alert("登入完成");
  })["catch"](function (err) {
    alert(err.response.data);
  });
}

;

function logout() {
  window.localStorage.clear();
}

;
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
//# sourceMappingURL=all.js.map
