function signUp() {
  const apiUrl = "http://localhost:3000/register";
  const obj = {
    "email": "a123@mail.com",
    "password": "1qaz2wsx",
    "name": "Ryan"
  };
  axios.post(apiUrl, obj)
    .then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
};
function login() {
  const apiUrl = "http://localhost:3000/login";
  const data = {
    "email": "a123@mail.com",
    "password": "1qaz2wsx"
  };

  axios.post(apiUrl, data)
    .then((res) => {
      localStorage.setItem("email", JSON.stringify(res.data.user.email));
      localStorage.setItem("userName", JSON.stringify(res.data.user.name));
      localStorage.setItem("token", JSON.stringify(res.data.accessToken));
    }).catch((err) => {
      console.log(err.response.data);
    })
};
function logout() {
  window.localStorage.clear();
};
// signUp();
// login();
logout();