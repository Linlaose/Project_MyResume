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
      alert("請確認註冊密碼");
    }
  });
}
function signUp(name, account, password, passwordConfirm) {
  const apiUrl = "http://localhost:3000/register";
  const obj = {
    // "email": "a123@mail.com",
    // "password": "1qaz2wsx",
    // "name": "Ryan"
    "email": account,
    "password": password,
    "passwordConfirm": passwordConfirm,
    "name": name
  };
  axios.post(apiUrl, obj)
    .then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
};
function login(account, password) {
  const apiUrl = "http://localhost:3000/login";
  const data = {
    // "email": "a123@mail.com",
    // "password": "1qaz2wsx"
    "email": account,
    "password": password
  };

  axios.post(apiUrl, data)
    .then((res) => {
      localStorage.setItem("email", JSON.stringify(res.data.user.email));
      localStorage.setItem("userName", JSON.stringify(res.data.user.name));
      localStorage.setItem("userId", JSON.stringify(res.data.user.id));
      localStorage.setItem("token", JSON.stringify(res.data.accessToken));
      window.location.href = "account.html";
    }).catch((err) => {
      console.log(err.response.data);
    })
};
function logout() {
  window.localStorage.clear();
};