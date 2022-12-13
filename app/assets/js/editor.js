const openTiny = document.querySelector("[data-trigger-editor]");
const dragArea = document.querySelector("[data-draggable]");
const editor = document.querySelector("[data-editor]");
const resumeId = JSON.parse(localStorage.getItem("resumeId"));

function init() {
  if (resumeId !== null) { // 判斷是否已是現有的履歷
    getContent();
  } else {
    tinymce.init({ // tinyMCE 的初始化，在文件有提到是傳送非同步請求 POST
      selector: '#tinyText',
      plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount code tinydrive',
      toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | code codesample|',
      // content_css: '/Project_MyResume/assets/style/all.css', // 配合 Github 路徑
      content_css: '/assets/style/all.css', // 本地開發路徑
      setup: (editor) => {
        editor.on('blur', () => {
          localStorage.setItem("template", tinymce.activeEditor.getContent());
        })
      }
    })
  };
};
if (editor) {
  init();
};


function getContent() {
  const apiUrl = `https://my-resume-server-linlaose.vercel.app/600/resumes/${resumeId}`;
  const token = JSON.parse(localStorage.getItem("token"));
  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };

  axios.get(apiUrl, config)
    .then((res) => {
      tinymce.init({ // tinyMCE 的初始化，在文件有提到是傳送非同步請求 POST
        selector: '#tinyText',
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount code tinydrive',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | code codesample|',
        // content_css: '/Project_MyResume/assets/style/all.css', // 配合 Github 路徑
        content_css: '/assets/style/all.css', // 本地開發路徑
        setup: (editor) => {
          editor.on('blur', () => {
            localStorage.setItem("template", tinymce.activeEditor.getContent());
          })
        }
      }).then(() => {
        localStorage.setItem("template", res.data.template);
        tinymce.activeEditor.setContent(res.data.template);
      });
    })
};
function callEditor() {
  dragArea.classList.remove("d-none");
  addEditorContent();
};


function addEditorContent() {
  let template = localStorage.getItem("template");
  if (localStorage.getItem("template") === null) { // 空白履歷直接開啟 tiny 編輯器時
    template = "";
  };
  const newTemplate = localStorage.getItem("newTemplate");
  template += newTemplate;
  localStorage.setItem("template", template)
  tinymce.activeEditor.setContent(template);
};

function updateResume() {
  const resumeId = JSON.parse(localStorage.getItem("resumeId"));
  const template = tinymce.activeEditor.getContent("tinyText");
  const token = JSON.parse(localStorage.getItem("token"));

  const apiUrl = `https://my-resume-server-linlaose.vercel.app/600/resumes/${resumeId}`;
  const data = {
    "template": template
  };
  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }
  axios.patch(apiUrl, data, config)
    .then((res) => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '修改完成',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        window.location.href = "resume.html";
      })
    })
    .catch((err) => {
      console.log(err);
    })
}
function saveResume() {
  const userId = localStorage.getItem("userId");
  const template = tinymce.activeEditor.getContent("tinyText");// 獲取 editor 內容
  const token = JSON.parse(localStorage.getItem("token"));
  const apiUrl = `https://my-resume-server-linlaose.vercel.app/600/users/${userId}/resumes`;
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
      window.location.href = "resume.html";
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
    if (!resumeId) {
      namedResume();
    } else {
      updateResume();
    };
  });
  openTiny.addEventListener('click', () => {
    const dragItems = document.querySelectorAll(".productBacklog .draggable");
    let template = "";
    localStorage.setItem("newTemplate", "");
    dragItems.forEach((item) => {
      template += item.outerHTML;
      localStorage.setItem("newTemplate", template);
      item.remove();
    });
    callEditor();
  });
};
