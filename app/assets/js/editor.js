tinymce.init({
  selector: '#tinyText',
  plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount code tinydrive',
  toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | code codesample|',
});

const tiny = document.querySelector('#tinymce');
const editor = document.querySelector('[data-editor]');

function saveResume() {
  const userId = localStorage.getItem("userId");
  const template = tinymce.activeEditor.getContent("tinyText");// 獲取 editor 內容
  const token = JSON.parse(localStorage.getItem("token"));
  const apiUrl = `http://localhost:3000/600/users/${userId}/resumes`;
  const data = {
    "userId": `${userId}`,
    "template": `${template}`
  };
  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };
  axios.post(apiUrl, data, config)
    .then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
}

if (tiny) {
  editor.addEventListener('submit', (e) => {
    e.preventDefault();
    saveResume();
    tinymce.activeEditor.setContent("<p>Hello world!</p>"); // 設定 editor 內容
  })
}
