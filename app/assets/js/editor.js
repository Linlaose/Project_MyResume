tinymce.init({
  selector: '#tinyText',
  plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount code tinydrive',
  toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | code codesample|',
});

const editor = document.querySelector('[data-editor]');

function saveResume() {
  const userId = localStorage.getItem("userId");
  const template = tinymce.activeEditor.getContent("tinyText");// 獲取 editor 內容
  const token = JSON.parse(localStorage.getItem("token"));
  const apiUrl = `http://localhost:3000/600/users/${userId}/resumes`;
  const name = JSON.parse(localStorage.getItem("resumeName"));
  const data = {
    "userId": `${userId}`,
    "template": `${template}`,
    "name": `${name}`
  };
  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };
  axios.post(apiUrl, data, config)
    .then((res) => {
      window.location.href = "/resume.html";
    }).catch((err) => {
      alert(err);
    })
}
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
  }).then((result) => {
    localStorage.setItem('resumeName', JSON.stringify(result.value));
    if (result.isConfirmed) {
      Swal.fire({
        icon: "success",
        title: "新增成功",
      }).then(() => {
        saveResume();
      })
    }
  })
};

if (editor) {
  editor.addEventListener('submit', (e) => {
    e.preventDefault();
    namedResume();
    tinymce.activeEditor.setContent("<p>Hello world!</p>"); // 設定 editor 內容
  });
};
