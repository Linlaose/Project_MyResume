"use strict";

var myAccount = document.querySelector("[data-myAccount]");
var newPassword = document.querySelector("[data-newPassword]");
var newPasswordConfirm = document.querySelector("[data-newPasswordConfirm]");
var userName = document.querySelector("[data-userName]");
var changePwdBtn = document.querySelector("[data-changePasswordBtn]");
var myResume = document.querySelector("[data-myResume]");

function updatePwd(pwd) {
  var token = JSON.parse(localStorage.getItem("token"));
  var userId = localStorage.getItem("userId");
  var apiUrl = "https://my-resume-server-linlaose.vercel.app/600/users/".concat(userId);
  var data = {
    "password": pwd
  };
  var config = {
    headers: {
      "Authorization": "Bearer ".concat(token)
    }
  };
  axios.patch(apiUrl, data, config).then(function (res) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '密碼修改成功，請重新登入',
      showConfirmButton: false,
      timer: 1500
    }).then(function () {
      localStorage.clear();
      location.href = "login.html";
    });
  })["catch"](function (err) {
    console.log(err);
  });
}

;

if (myAccount) {
  myAccount.value = JSON.parse(localStorage.getItem("email"));
  userName.innerText = JSON.parse(localStorage.getItem("userName"));
  newPasswordConfirm.addEventListener('blur', function () {
    if (newPassword.value !== newPasswordConfirm.value) {
      Swal.fire({
        icon: 'error',
        title: '密碼好像輸入不一致',
        text: '請確認二次密碼'
      }).then(function () {
        newPassword.value = "";
        newPasswordConfirm.value = "";
      });
    }

    ;
  });
  changePwdBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (newPassword.value && newPasswordConfirm.value) {
      updatePwd(newPassword.value);
    }
  });
}

;

if (myResume) {
  userName.innerText = JSON.parse(localStorage.getItem("userName"));
}

;
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
var loginBtn = document.querySelector(".js-index-login-btn");
var mobileLoginBtn = document.querySelector(".js-mobile-login-btn");

function indexInit() {
  renderLoginBtn();

  if (localStorage.getItem("userId")) {
    logout();
  }

  ;
}

;
indexInit();

function renderLoginBtn() {
  var template;

  if (localStorage.getItem("userId") === null) {
    template = "\n      <a\n        class=\"collapse navbar-collapse btn rounded-pill background-gradient-linear text-white py-3 px-6 fs-base fs-lg-5 transition-300\"\n        href=\"./login.html\"\n      >\n        \u767B\u5165/\u8A3B\u518A\n      </a>\n    ";
  } else {
    template = "\n          <div class=\"my-avatar\">\n            <img class=\"mr-4\" src=\"./assets/images/Avatar.png\" alt=\"\" />\n            <div\n              class=\"mt-6 mt-md-0 position-absolute right-12 w-160px avatar-show\"\n            >\n              <ul\n                class=\"my-2 mb-0 dropdown-shadow border-transparent rounded-16px\"\n              >\n                <li class=\"pt-2\">\n                  <a\n                    class=\"d-block py-3 px-6 text-decoration-none bg-gray-hover\"\n                    href=\"./resume.html\"\n                    >\u6211\u7684\u5C65\u6B77</a\n                  >\n                </li>\n                <li>\n                  <a\n                    class=\"d-block py-3 px-6 text-decoration-none bg-gray-hover border-b\"\n                    href=\"./account.html\"\n                    >\u8A2D\u5B9A</a\n                  >\n                </li>\n                <li class=\"pb-2\">\n                  <a\n                    class=\"d-block py-3 px-6 text-decoration-none text-light js-index-logout-btn\"\n                    href=\"#\"\n                    >\u767B\u51FA</a\n                  >\n                </li>\n              </ul>\n            </div>\n          </div>\n    ";
    mobileLoginBtn.textContent = "登出";
  }

  ;
  loginBtn.innerHTML = template;
}

;

function logout() {
  var logoutBtn = document.querySelector(".js-index-logout-btn");
  logoutBtn.addEventListener('click', function () {
    localStorage.clear();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '登出成功',
      showConfirmButton: false,
      timer: 1500
    }).then(function () {
      location.href = "index.html";
    });
  });
  mobileLoginBtn.addEventListener('click', function () {
    localStorage.clear();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '登出成功',
      showConfirmButton: false,
      timer: 1500
    }).then(function () {
      location.href = "index.html";
    });
  });
}
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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var designResumeTemplate = document.querySelector('#designResumeTemplate');
var engineeringResumeTemplate = document.querySelector('#engineeringResumeTemplate');
var managementResumeTemplate = document.querySelector('#managementResumeTemplate');

function initDesign() {
  getResumes();
}

if (designResumeTemplate || engineeringResumeTemplate || managementResumeTemplate) {
  initDesign();
}

function getResumes() {
  var apiUrl = 'https://my-resume-server-linlaose.vercel.app/resumes';
  axios.get(apiUrl).then(function (res) {
    var arr = document.URL.split('/');
    var arrays = {
      design: [],
      engineering: [],
      management: []
    };
    var currentUrl = arr[arr.length - 1];
    res.data.forEach(function (item) {
      switch (item.category) {
        case '設計類':
          arrays.design.push(item);
          break;

        case '工程類':
          arrays.engineering.push(item);
          break;

        case '管理類':
          arrays.management.push(item);
          break;

        default:
          console.log('類別 switch 預設');
      }
    });

    switch (currentUrl) {
      case 'design.html':
        renderTemplate(arrays.design);
        break;

      case 'engineering.html':
        renderTemplate(arrays.engineering);
        break;

      case 'management.html':
        renderTemplate(arrays.management);
        break;

      default:
        console.log('網址 switch 預設');
        break;
    }
  })["catch"](function (err) {
    console.log(err);
  });
}

function renderTemplate(arr) {
  arr.forEach(function (item, index) {
    var el = document.createElement('li');
    el.setAttribute('data-id', index + 1);
    el.innerHTML = item.template;

    if (designResumeTemplate) {
      designResumeTemplate.appendChild(el);
    } else if (engineeringResumeTemplate) {
      engineeringResumeTemplate.appendChild(el);
    } else if (managementResumeTemplate) {
      managementResumeTemplate.appendChild(el);
    }
  });

  if (designResumeTemplate) {
    var elArray = _toConsumableArray(designResumeTemplate.children);

    var str = "";
    elArray.forEach(function (item, index) {
      html2canvas(item, {
        useCORS: true
      }).then(function (canvas) {
        var base64 = canvas.toDataURL();
        str += "<li><a href=\"index.html\"><img data-id=".concat(index + 1, " src=\"").concat(base64, "\"></a></li>");
        designResumeTemplate.innerHTML = str;
      });
    });
  } else if (engineeringResumeTemplate) {
    var _elArray = _toConsumableArray(engineeringResumeTemplate.children);

    var _str = "";

    _elArray.forEach(function (item, index) {
      html2canvas(item, {
        useCORS: true
      }).then(function (canvas) {
        var base64 = canvas.toDataURL();
        _str += "<li><a href=\"index.html\"><img data-id=".concat(index + 1, " src=\"").concat(base64, "\"></a></li>");
        engineeringResumeTemplate.innerHTML = _str;
      });
    });
  } else if (managementResumeTemplate) {
    var _elArray2 = _toConsumableArray(managementResumeTemplate.children);

    var _str2 = "";

    _elArray2.forEach(function (item, index) {
      html2canvas(item, {
        useCORS: true
      }).then(function (canvas) {
        var base64 = canvas.toDataURL();
        _str2 += "<li><a href=\"index.html\"><img data-id=".concat(index + 1, " src=\"").concat(base64, "\"></a></li>");
        managementResumeTemplate.innerHTML = _str2;
      });
    });
  }
}

function receiveResume(resumeId) {
  var apiUrl = "https://my-resume-server-linlaose.vercel.app/resumes/".concat(resumeId);
  axios.get(apiUrl).then(function (res) {
    localStorage.setItem('template', res.data.template);
    location.href = 'editor.html';
  })["catch"](function (err) {
    console.log(err);
  });
}

if (designResumeTemplate) {
  designResumeTemplate.addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.tagName === 'IMG') {
      if (!localStorage.getItem('userId')) {
        Swal.fire({
          icon: "warning",
          title: "請登入會員"
        }).then(function () {
          location.href = 'login.html';
        });
      } else {
        var resumeId = e.target.getAttribute('data-id');
        receiveResume(resumeId);
      }
    }
  });
} else if (engineeringResumeTemplate) {
  engineeringResumeTemplate.addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.tagName === 'IMG') {
      if (!localStorage.getItem('userId')) {
        Swal.fire({
          icon: "warning",
          title: "請登入會員"
        }).then(function () {
          location.href = 'login.html';
        });
      } else {
        var resumeId = e.target.getAttribute('data-id');
        receiveResume(resumeId);
      }
    }
  });
} else if (managementResumeTemplate) {
  managementResumeTemplate.addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.tagName === 'IMG') {
      if (!localStorage.getItem('userId')) {
        Swal.fire({
          icon: "warning",
          title: "請登入會員"
        }).then(function () {
          location.href = 'login.html';
        });
      } else {
        var resumeId = e.target.getAttribute('data-id');
        receiveResume(resumeId);
      }
    }
  });
}
"use strict";

var openTiny = document.querySelector("[data-trigger-editor]");
var dragArea = document.querySelector("[data-draggable]");
var editor = document.querySelector("[data-editor]");
var resumeId = JSON.parse(localStorage.getItem("resumeId"));

function init() {
  if (resumeId !== null) {
    // 現有履歷
    getContent();
  } else {
    tinymce.init({
      // tinyMCE 的初始化，在文件有提到是傳送非同步請求 POST
      height: 700,
      selector: '#tinyText',
      plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount code tinydrive',
      toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | code codesample|',
      // content_css: '/Project_MyResume/assets/style/all.css', // 配合 Github 路徑
      content_css: '/assets/style/all.css',
      // 本地開發路徑
      setup: function setup(editor) {
        editor.on('blur', function () {
          localStorage.setItem("template", tinymce.activeEditor.getContent());
        });
      }
    });
  }

  ;
}

;

if (editor) {
  init();
}

;

function getContent() {
  var apiUrl = "https://my-resume-server-linlaose.vercel.app/600/resumes/".concat(resumeId);
  var token = JSON.parse(localStorage.getItem("token"));
  var config = {
    headers: {
      "Authorization": "Bearer ".concat(token)
    }
  };
  axios.get(apiUrl, config).then(function (res) {
    tinymce.init({
      // tinyMCE 的初始化，在文件有提到是傳送非同步請求 POST
      height: 700,
      selector: '#tinyText',
      plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount code tinydrive',
      toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | code codesample|',
      // content_css: '/Project_MyResume/assets/style/all.css', // 配合 Github 路徑
      content_css: '/assets/style/all.css',
      // 本地開發路徑
      setup: function setup(editor) {
        editor.on('blur', function () {
          localStorage.setItem("template", tinymce.activeEditor.getContent());
        });
      }
    }).then(function () {
      localStorage.setItem("template", res.data.template);
      tinymce.activeEditor.setContent(res.data.template);
    });
  });
}

;

function callEditor() {
  dragArea.classList.remove("d-none");
  addEditorContent();
}

;

function addEditorContent() {
  var template = localStorage.getItem("template");

  if (localStorage.getItem("template") === null) {
    // 空白履歷直接開啟 tiny 編輯器時
    template = "";
  }

  ;
  var newTemplate = localStorage.getItem("newTemplate");
  template += newTemplate;
  localStorage.setItem("template", template);
  tinymce.activeEditor.setContent(template);
}

;

function updateResume() {
  var resumeId = JSON.parse(localStorage.getItem("resumeId"));
  var template = tinymce.activeEditor.getContent("tinyText");
  var token = JSON.parse(localStorage.getItem("token"));
  var apiUrl = "https://my-resume-server-linlaose.vercel.app/600/resumes/".concat(resumeId);
  var data = {
    "template": template
  };
  var config = {
    headers: {
      "Authorization": "Bearer ".concat(token)
    }
  };
  axios.patch(apiUrl, data, config).then(function (res) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '修改完成',
      showConfirmButton: false,
      timer: 1500
    }).then(function () {
      window.location.href = "resume.html";
    });
  })["catch"](function (err) {
    console.log(err);
  });
}

function saveResume() {
  var userId = localStorage.getItem("userId");
  var template = tinymce.activeEditor.getContent("tinyText"); // 獲取 editor 內容

  var token = JSON.parse(localStorage.getItem("token"));
  var apiUrl = "https://my-resume-server-linlaose.vercel.app/600/users/".concat(userId, "/resumes");
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
  axios.post(apiUrl, data, config).then(function () {
    window.location.href = "resume.html";
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

    if (!resumeId) {
      namedResume();
    } else {
      updateResume();
    }

    ;
  });
  openTiny.addEventListener('click', function () {
    var dragItems = document.querySelectorAll(".productBacklog .draggable");
    var template = "";
    localStorage.setItem("newTemplate", "");
    dragItems.forEach(function (item) {
      template += item.outerHTML;
      localStorage.setItem("newTemplate", template);
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
  var apiUrl = "https://my-resume-server-linlaose.vercel.app/register";
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
  var apiUrl = "https://my-resume-server-linlaose.vercel.app/login";
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
"use strict";

var resumeName = document.querySelector("[data-resumeName]");
var resumeList = document.querySelector("[data-myResume]");

function renderData(res) {
  var template = "";
  res.forEach(function (item) {
    if (item.isOpen === true) {
      item.isOpen = "checked";
    } else {
      item.isOpen = "";
    }

    template += "\n        <div class=\"resume-shadow p-4 mt-4 mt-lg-8 rounded\">\n          <h4 class=\"d-flex justify-content-between align-items-center\">\n            ".concat(item.name, "\n            <label class=\"switch\">\n              <input data-id=\"").concat(item.id, "\" type=\"checkbox\" ").concat(item.isOpen, "/>\n              <span class=\"slider round\"></span>\n            </label>\n          </h4>\n          \n          <div class=\"mt-4\">\n            <a href=\"#\">https://example.com</a>\n            <button\n              class=\"border-0 bg-transparent opacity-75-hover px-4\"\n              type=\"button\"\n            >\n              <img\n                class=\"w-24px d-inline-block\"\n                src=\"./assets/images/copy.png\"\n                alt=\"copy\"\n                title=\"copy\"\n              />\n            </button>\n            <div class=\"d-lg-flex align-items-center justify-content-between\">\n              <div class=\"d-flex justify-content-between\">\n                <div class=\"text-lg-end\">\n                  <!-- \u7DE8\u8F2F -->\n                  <a\n                    role=editBtn\n                    data-id=").concat(item.id, "\n                    class=\"btn rounded-pill background-gradient-linear text-white py-3 px-6 fs-base fs-lg-5 mt-8 mt-lg-10 w-100 w-lg-auto d-none d-lg-inline-block\"\n                    href=\"./editor.html\"\n                    >\u7DE8\u8F2F</a\n                  >\n                </div>\n                <!-- \u7DE8\u8F2F end -->\n                <div class=\"text-lg-end w-50 w-lg-auto\">\n                  <!-- \u700F\u89BD -->\n                  <a\n                    role=viewBtn\n                    data-id=").concat(item.id, "\n                    class=\"btn rounded-pill background-gradient-linear text-white py-3 px-6 fs-base fs-lg-5 mt-8 mt-lg-10 ml-lg-4 w-100 w-lg-auto\"\n                    href=\"./editor.html\"\n                    >\u700F\u89BD</a\n                  >\n                </div>\n                <!-- \u700F\u89BD end -->\n                <div class=\"text-lg-end w-50 w-lg-auto ml-4 ml-lg-0\">\n                  <!-- \u4E0B\u8F09 -->\n                  <button\n                    role=\"downloadBtn\"\n                    data-id=").concat(item.id, "\n                    class=\"btn rounded-pill background-gradient-linear text-white py-3 px-6 fs-base fs-lg-5 mt-8 mt-lg-10 ml-lg-4 w-100 w-lg-auto\"\n                    type=\"button\"\n                  >\n                    \u4E0B\u8F09 (PDF)\n                  </button>\n                </div>\n                <!-- \u4E0B\u8F09 end -->\n              </div>\n              <div class=\"mt-4 mt-lg-8 text-end text-lg-start\">\n                <!-- \u5783\u573E\u6876 -->\n                <button\n                  type=\"button\"\n                  class=\"border-0 bg-transparent opacity-75-hover px-4\"\n                >\n                  <img\n                    role=\"delBtn\"\n                    data-id=").concat(item.id, "\n                    class=\"w-28px d-inline-block\"\n                    src=\"./assets/images/bin.png\"\n                    alt=\"bin\"\n                    title=\"delete\"\n                  />\n                </button>\n              </div>\n              <!-- \u5783\u573E\u6876 end -->\n            </div>\n          </div>\n        </div>\n        ");
  });
  return resumeList.innerHTML = template;
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
  var apiUrl = "https://my-resume-server-linlaose.vercel.app/600/users/".concat(userId, "/resumes");
  axios.get(apiUrl, config).then(function (res) {
    renderData(res.data);
  })["catch"](function (err) {
    alert(err);
  });
}

;

function delResumeData() {
  localStorage.removeItem("resumeId");
  localStorage.removeItem("fileName");
  localStorage.removeItem("resumeName");
  localStorage.removeItem("template");
  localStorage.removeItem("newTemplate");
}

;

function delResume(resumeId) {
  var apiUrl = "https://my-resume-server-linlaose.vercel.app/600/resumes/".concat(resumeId);
  var token = JSON.parse(localStorage.getItem("token"));
  var config = {
    headers: {
      "Authorization": "Bearer ".concat(token)
    }
  };
  axios["delete"](apiUrl, config).then(function (res) {
    Swal.fire({
      icon: 'success',
      title: '刪除成功'
    }).then(function () {
      getResume();
    });
  })["catch"](function (err) {
    alert(err);
  });
}

;

function printResume(targetId) {
  var apiUrl = "https://my-resume-server-linlaose.vercel.app/600/resumes/".concat(targetId);
  var token = JSON.parse(localStorage.getItem("token"));
  var config = {
    headers: {
      "Authorization": "Bearer ".concat(token)
    }
  };
  axios.get(apiUrl, config).then(function (res) {
    var el = document.createElement("div");
    el.innerHTML = res.data.template;
    Swal.fire({
      title: "另存新檔為：",
      input: "text",
      showCancelButton: true,
      cancelButtonText: "取消",
      confirmButtonText: "確認"
    }).then(function (result) {
      if (result.isConfirmed) {
        localStorage.setItem("fileName", JSON.stringify(result.value));
        var opt = {
          margin: 0,
          filename: JSON.parse(localStorage.getItem("fileName")),
          image: {
            type: 'pdf',
            quality: 0.95
          },
          html2canvas: {
            scale: 2,
            useCORS: true
          },
          // 用 CORS 才能確保能抓到其他網站圖片
          jsPDF: {
            unit: 'mm',
            format: 'letter',
            orientation: 'p',
            compressPDF: true
          },
          pagebreak: {
            mode: ['avoid-all', 'css', 'legacy']
          }
        };
        html2pdf().set(opt).from(el).save(); // 換版本
      }
    });
  })["catch"](function (err) {
    console.log(err);
  });
}

;

function updateResumeStatus(dataId, status) {
  var apiUrl = "https://my-resume-server-linlaose.vercel.app/600/resumes/".concat(dataId);
  var token = JSON.parse(localStorage.getItem('token'));
  var config = {
    headers: {
      'Authorization': "Bearer ".concat(token)
    }
  };
  var data = {
    isOpen: status
  };
  axios.patch(apiUrl, data, config).then(function () {
    getResume();
  })["catch"](function (err) {
    console.log(err);
  });
}

if (resumeList) {
  delResumeData();
  getResume();
  resumeList.addEventListener('click', function (e) {
    var target = e.target.getAttribute("role");
    var targetId = e.target.getAttribute("data-id");

    if (target === "delBtn") {
      delResume(targetId);
    } else if (target === "viewBtn" || target === "editBtn") {
      localStorage.setItem("resumeId", JSON.stringify("".concat(targetId)));
    } else if (target === "downloadBtn") {
      printResume(targetId);
    } else if (e.target.type === 'checkbox') {
      updateResumeStatus(e.target.getAttribute('data-id'), e.target.checked);
    }
  });
}

;
"use strict";

var candidateDOM = document.querySelector(".candidate");
var productBacklogDOM = document.querySelector(".productBacklog");

if (candidateDOM) {
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
}
//# sourceMappingURL=all.js.map
