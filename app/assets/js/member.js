const loginBtn = document.querySelector("[role=loginBtn]");
const signUpBtn = document.querySelector("[role=signUpBtn]");

if (loginBtn) {
  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const loginForm = document.querySelector("[data-loginForm]");
    const loginAccount = document.querySelector("[data-loginAccount]");
    const loginPassword = document.querySelector("[data-loginPassword]");
    login(loginAccount.value, loginPassword.value);
    loginForm.reset();
  })

  signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const signUpForm = document.querySelector("[data-signUpForm]");
    const signUpName = document.querySelector("[data-signUpName]");
    const signUpAccount = document.querySelector("[data-signUpAccount]");
    const signUpPassword = document.querySelector("[data-signUpPassword]");
    const signUpPasswordConfirm = document.querySelector("[data-signUpPasswordConfirm]");
    if (signUpPassword.value === signUpPasswordConfirm.value) {
      signUp(signUpName.value, signUpAccount.value, signUpPassword.value, signUpPasswordConfirm.value);
      signUpForm.reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "請確認二次密碼輸入正確"
      })
    }
  });
}
function signUp(name, account, password, passwordConfirm) {
  const apiUrl = "https://my-resume-server-pdla9hri6-linlaose.vercel.app/register";
  const obj = {
    "email": account,
    "password": password,
    "passwordConfirm": passwordConfirm,
    "name": name
  };
  axios.post(apiUrl, obj)
    .then((res) => {
      Swal.fire({
        icon: "success",
        title: '註冊成功'
      })
    }).catch((err) => {
      Swal.fire({
        icon: "error",
        title: `${err.response.data}`
      })
    })
};
function login(account, password) {
  const apiUrl = "https://my-resume-server-pdla9hri6-linlaose.vercel.app/login";
  const data = {
    "email": account,
    "password": password
  };

  axios.post(apiUrl, data)
    .then((res) => {
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
      }).then(() => {
        window.location.href = "account.html";
      })
    }).catch((err) => {
      alert(err.response.data);
    })
};
function logout() {
  window.localStorage.clear();
};