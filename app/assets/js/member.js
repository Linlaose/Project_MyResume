function signUp() {
  const apiUrl = "http://localhost:3000/register";
  const obj = {
    "email": "olivier@mail.com",
    "password": "bestPassw0rd"
  };
  axios.post(apiUrl, obj)
    .then((res) => {
      console.log(res.data);
    })
}
function login() {
  const apiUrl = "http://localhost:3000/login";
  const data = {
    "email": "olivier@mail.com",
    "password": "bestPassw0rd"
  };
  axios.post(apiUrl, data)
    .then((res) => {
      console.log(res.data, `狀態碼 ${res.status}`);
    }).catch((err) => {
      console.log(err);
    })
}
// signUp();
login();