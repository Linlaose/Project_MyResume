function getData() {
  const apiUrl = "http://localhost:3000/users";
  axios.get(apiUrl)
    .then((res) => {
      console.log(res);
    })
}
// getData();

function signUp() {
  const apiUrl = "http://localhost:3000/register";
  const obj = {
    "email": "olivier@mail.com",
    "password": "bestPassw0rd"
  };
  axios.post(apiUrl, obj)
    .then((res) => {
      console.log(res.data.accessToken);
    })
}
function login() {
  const apiUrl = "http://localhost:3000/600/users/1";
  const config = {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9saXZpZXJAbWFpbC5jb20iLCJpYXQiOjE2NjgwOTY0NzMsImV4cCI6MTY2ODEwMDA3Mywic3ViIjoiMSJ9.mhRI2PvquZr_D718yyTwOwhR5WKL3gjoTkrd6jOVXEQ"
    }
  };
  const data = {
    "email": "olivier@mail.com",
    "password": "bestPassw0rd"
  };
  axios.post(apiUrl, data, config)
    .then((res) => {
      console.log(res.data.user, `狀態碼 ${res.status}`);
    }).catch((err) => {
      console.log(err);
    })
}
// signUp();
login();