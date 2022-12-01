const myAccount = document.querySelector("[data-myAccount]");
const newPassword = document.querySelector("[data-newPassword]");
const newPasswordConfirm = document.querySelector("[data-newPasswordConfirm]");
const userName = document.querySelector("[data-userName]");
const changePwdBtn = document.querySelector("[data-changePasswordBtn]");
const myResume = document.querySelector("[data-myResume]");

function updatePwd(pwd) {
  const token = JSON.parse(localStorage.getItem("token"));
  const userId = localStorage.getItem("userId");

  const apiUrl = `https://my-resume-server-pdla9hri6-linlaose.vercel.app/600/users/${userId}`;
  const data = {
    "password": pwd
  };
  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };
  axios.patch(apiUrl, data, config)
    .then((res) => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '密碼修改成功，請重新登入',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        localStorage.clear();
        location.href = "login.html";
      })
    })
    .catch((err) => {
      console.log(err);
    })
};

if (myAccount) {
  myAccount.value = JSON.parse(localStorage.getItem("email"));
  userName.innerText = JSON.parse(localStorage.getItem("userName"));
  newPasswordConfirm.addEventListener('blur', () => {
    if (newPassword.value !== newPasswordConfirm.value) {
      Swal.fire({
        icon: 'error',
        title: '密碼好像輸入不一致',
        text: '請確認二次密碼',
      }).then(() => {
        newPassword.value = "";
        newPasswordConfirm.value = "";
      })
    };
  })
  changePwdBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (newPassword.value && newPasswordConfirm.value) {
      updatePwd(newPassword.value)
    }
  })
};
if (myResume) {
  userName.innerText = JSON.parse(localStorage.getItem("userName"));
};
