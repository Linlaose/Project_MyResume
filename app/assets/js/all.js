// burger
const burger = document.querySelector('.burger');
const topLine = document.querySelector('.burger__topline');
const midLine = document.querySelector('.burger__midline');
const btmLine = document.querySelector('.burger__btmline');

if (burger) {
  burger.addEventListener('click', () => {
    topLine.classList.toggle("burger__topline--open");
    midLine.classList.toggle("burger__midline--open");
    btmLine.classList.toggle("burger__btmline--open");
  });
};

const loginBtn = document.querySelector(".js-index-login-btn");
const mobileLoginBtn = document.querySelector(".js-mobile-login-btn");


function indexInit() {
  renderLoginBtn();
  if (localStorage.getItem("userId")) {
    logout()
  };
};
indexInit();


function renderLoginBtn() {
  let template
  if (localStorage.getItem("userId") === null) {
    template = `
      <a
        class="collapse navbar-collapse btn rounded-pill background-gradient-linear text-white py-3 px-6 fs-base fs-lg-5 transition-300"
        href="./login.html"
      >
        登入/註冊
      </a>
    `;
  } else {
    template = `
          <div class="my-avatar">
            <img class="mr-4" src="./assets/images/Avatar.png" alt="" />
            <div
              class="mt-6 mt-md-0 position-absolute right-12 w-160px avatar-show"
            >
              <ul
                class="my-2 mb-0 dropdown-shadow border-transparent rounded-16px"
              >
                <li class="pt-2">
                  <a
                    class="d-block py-3 px-6 text-decoration-none bg-gray-hover"
                    href="./resume.html"
                    >我的履歷</a
                  >
                </li>
                <li>
                  <a
                    class="d-block py-3 px-6 text-decoration-none bg-gray-hover border-b"
                    href="./account.html"
                    >設定</a
                  >
                </li>
                <li class="pb-2">
                  <a
                    class="d-block py-3 px-6 text-decoration-none text-light js-index-logout-btn"
                    href="#"
                    >登出</a
                  >
                </li>
              </ul>
            </div>
          </div>
    `;
    mobileLoginBtn.textContent = "登出";
  };
  loginBtn.innerHTML = template;
};

function logout() {
  const logoutBtn = document.querySelector(".js-index-logout-btn");
  logoutBtn.addEventListener('click', () => {
    localStorage.clear();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '登出成功',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      location.href = "index.html";
    });
  });
  mobileLoginBtn.addEventListener('click', () => {
    localStorage.clear();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '登出成功',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      location.href = "index.html";
    });
  });
}

const makeResumes = document.querySelectorAll('#makeResume');
makeResumes.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (!localStorage.getItem('userId')) {
      e.preventDefault();
      Swal.fire({
        icon: "warning",
        title: "請登入會員",
      }).then(() => {
        location.href = 'login.html';
      })
    }
  })
})
