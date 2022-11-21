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

var openTiny = document.querySelector("[data-trigger-editor]");
var dragArea = document.querySelector("[data-draggable]");
var editor = document.querySelector("[data-editor]");
var arr = [];

function callEditor() {
  dragArea.classList.remove("d-none");
  tinymce.init({
    // tinyMCE 的初始化，在文件有提到是傳送非同步請求 POST
    selector: '#tinyText',
    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount code tinydrive',
    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | code codesample|',
    content_css: '../style/all.css' // 配合 Github 路徑

  }).then(function () {
    setEditorContent(arr);
  });
}

;

function setEditorContent(arr) {
  var content = "";
  arr.push(localStorage.getItem('template'));
  arr.forEach(function (item) {
    content += item;
  });
  tinymce.activeEditor.setContent(content);
  localStorage.clear();
}

;

function saveResume() {
  var userId = localStorage.getItem("userId");
  var template = tinymce.activeEditor.getContent("tinyText"); // 獲取 editor 內容

  var token = JSON.parse(localStorage.getItem("token"));
  var apiUrl = "http://localhost:3000/600/users/".concat(userId, "/resumes");
  var name = JSON.parse(localStorage.getItem("resumeName"));
  var data = {
    "userId": "".concat(userId),
    "template": "".concat(template),
    "name": "".concat(name)
  };
  var config = {
    headers: {
      "Authorization": "Bearer ".concat(token)
    }
  };
  axios.post(apiUrl, data, config).then(function (res) {
    window.location.href = "/resume.html";
  })["catch"](function (err) {
    alert(err);
  });
}

;

function namedResume() {
  Swal.fire({
    position: 'center',
    title: '請輸入履歷名稱',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: '確認',
    cancelButtonText: '取消',
    showLoaderOnConfirm: true,
    allowOutsideClick: false
  }).then(function (result) {
    localStorage.setItem('resumeName', JSON.stringify(result.value));

    if (result.isConfirmed) {
      Swal.fire({
        icon: "success",
        title: "新增成功"
      }).then(function () {
        saveResume();
      });
    }
  });
}

;

if (editor) {
  editor.addEventListener('submit', function (e) {
    e.preventDefault();
    namedResume();
  });
  openTiny.addEventListener('click', function () {
    var dragItems = document.querySelectorAll(".productBacklog .draggable");
    var template = "";
    dragItems.forEach(function (item) {
      template += item.outerHTML;
      localStorage.setItem("template", template);
      item.remove();
    });
    callEditor();
  });
}

;
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
      Swal.fire({
        icon: "error",
        title: "請確認二次密碼輸入正確"
      });
    }
  });
}

function signUp(name, account, password, passwordConfirm) {
  var apiUrl = "http://localhost:3000/register";
  var obj = {
    "email": account,
    "password": password,
    "passwordConfirm": passwordConfirm,
    "name": name
  };
  axios.post(apiUrl, obj).then(function (res) {
    Swal.fire({
      icon: "success",
      title: '註冊成功'
    });
  })["catch"](function (err) {
    Swal.fire({
      icon: "error",
      title: "".concat(err.response.data)
    });
  });
}

;

function login(account, password) {
  var apiUrl = "http://localhost:3000/login";
  var data = {
    "email": account,
    "password": password
  };
  axios.post(apiUrl, data).then(function (res) {
    localStorage.setItem("email", JSON.stringify(res.data.user.email));
    localStorage.setItem("userName", JSON.stringify(res.data.user.name));
    localStorage.setItem("userId", JSON.stringify(res.data.user.id));
    localStorage.setItem("token", JSON.stringify(res.data.accessToken));
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '登入成功',
      showConfirmButton: false,
      timer: 1500
    }).then(function () {
      window.location.href = "account.html";
    });
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

var resumeName = document.querySelector("[data-resumeName]");
var resumeBlock = document.querySelector("[data-myResume]");

function renderData(res) {
  var template = "";
  res.forEach(function (item) {
    template += "\n        <div  class=\"resume-shadow p-4 mt-4 mt-lg-8 rounded\">\n          <h4>".concat(item.name, "</h4>\n          <div class=\"mt-4\">\n            <a href=\"#\">https://example.com</a>\n            <button\n              class=\"border-0 bg-transparent opacity-75-hover px-4\"\n              type=\"button\"\n            >\n              <img\n                class=\"w-24px d-inline-block\"\n                src=\"./assets/images/copy.png\"\n                alt=\"copy\"\n                title=\"copy\"\n              />\n            </button>\n            <div class=\"d-lg-flex align-items-center justify-content-between\">\n              <div class=\"d-flex justify-content-between\">\n                <div class=\"text-lg-end\">\n                  <!-- \u7DE8\u8F2F -->\n                  <a\n                    class=\"btn rounded-pill background-gradient-linear text-white py-3 px-6 fs-base fs-lg-5 mt-8 mt-lg-10 w-100 w-lg-auto d-none d-lg-inline-block\"\n                    href=\"./editor.html\"\n                    >\u7DE8\u8F2F</a\n                  >\n                </div>\n                <!-- \u7DE8\u8F2F end -->\n                <div class=\"text-lg-end w-50 w-lg-auto\">\n                  <!-- \u700F\u89BD -->\n                  <a\n                    class=\"btn rounded-pill background-gradient-linear text-white py-3 px-6 fs-base fs-lg-5 mt-8 mt-lg-10 ml-lg-4 w-100 w-lg-auto\"\n                    href=\"./editor.html\"\n                    >\u700F\u89BD</a\n                  >\n                </div>\n                <!-- \u700F\u89BD end -->\n                <div class=\"text-lg-end w-50 w-lg-auto ml-4 ml-lg-0\">\n                  <!-- \u4E0B\u8F09 -->\n                  <button\n                    class=\"btn rounded-pill background-gradient-linear text-white py-3 px-6 fs-base fs-lg-5 mt-8 mt-lg-10 ml-lg-4 w-100 w-lg-auto\"\n                    type=\"button\"\n                  >\n                    \u4E0B\u8F09 (PDF)\n                  </button>\n                </div>\n                <!-- \u4E0B\u8F09 end -->\n              </div>\n              <div class=\"mt-4 mt-lg-8 text-end text-lg-start\">\n                <!-- \u5783\u573E\u6876 -->\n                <button\n                  type=\"button\"\n                  class=\"border-0 bg-transparent opacity-75-hover px-4\"\n                >\n                  <img\n                    class=\"w-28px d-inline-block\"\n                    src=\"./assets/images/bin.png\"\n                    alt=\"bin\"\n                    title=\"delete\"\n                  />\n                </button>\n              </div>\n              <!-- \u5783\u573E\u6876 end -->\n            </div>\n          </div>\n        </div>\n        ");
  });
  return resumeBlock.innerHTML = template;
}

;

function getResume() {
  var userId = JSON.parse(localStorage.getItem("userId"));
  var token = JSON.parse(localStorage.getItem("token"));
  var config = {
    headers: {
      "Authorization": "Bearer ".concat(token)
    }
  };
  var apiUrl = "http://localhost:3000/600/users/".concat(userId, "/resumes");
  axios.get(apiUrl, config).then(function (res) {
    renderData(res.data);
  })["catch"](function (err) {
    alert(err);
  });
}

;

if (resumeBlock) {
  getResume();
}

;
"use strict";

var candidateDOM = document.querySelector(".candidate");
var productBacklogDOM = document.querySelector(".productBacklog");
var candidate = Sortable.create(candidateDOM, {
  group: {
    name: "shared",
    pull: "clone"
  },
  animation: 500,
  sort: false,
  onAdd: function onAdd(e) {
    e.item.classList.add("d-none");
  }
});
var productBacklog = Sortable.create(productBacklogDOM, {
  group: "shared",
  animation: 500
});
//# sourceMappingURL=all.js.map
