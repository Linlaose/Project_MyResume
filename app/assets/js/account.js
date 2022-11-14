const myAccount = document.querySelector("[data-myAccount]");
const newPassword = document.querySelector("[data-newPassword]");
const newPasswordConfirm = document.querySelector("[data-newPasswordConfirm]");
const userName = document.querySelector("[data-userName]");

const myResume = document.querySelector("[data-myResume]");

if (myAccount) {
  myAccount.value = JSON.parse(localStorage.getItem("email"));
  userName.innerText = JSON.parse(localStorage.getItem("userName"));
}
if (myResume) {
  userName.innerText = JSON.parse(localStorage.getItem("userName"));
}
