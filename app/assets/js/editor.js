const openTiny = document.querySelector("[data-trigger-editor]");
const dragArea = document.querySelector("[data-draggable]");
const editor = document.querySelector("[data-editor]");

let arr = [];



function callEditor() {
  dragArea.classList.remove("d-none");
  tinymce.init({ // tinyMCE 的初始化，在文件有提到是傳送非同步請求 POST
    selector: '#tinyText',
    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount code tinydrive',
    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | code codesample|',
    content_css: '../style/all.css' // 配合 Github 路徑
  }).then(() => {
    setEditorContent(arr);
  });
};

function setEditorContent(arr) {
  let content = "";
  arr.push(localStorage.getItem('template'));
  arr.forEach((item) => {
    content += item;
  });
  tinymce.activeEditor.setContent(content);
  localStorage.clear();
};
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
};
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
  });
  openTiny.addEventListener('click', () => {
    const dragItems = document.querySelectorAll(".productBacklog .draggable");
    let template = "";
    dragItems.forEach((item) => {
      template += item.outerHTML;
      localStorage.setItem("template", template);
      item.remove();
    })
    callEditor();
  });
};
