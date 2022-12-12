const resumeName = document.querySelector("[data-resumeName]");
const resumeList = document.querySelector("[data-myResume]");

function renderData(res) {
  let template = "";
  res.forEach((item, index) => {
    template += `
        <div class="resume-shadow p-4 mt-4 mt-lg-8 rounded">
          <h4>${item.name}</h4>
          <div class="mt-4">
            <a href="#">https://example.com</a>
            <button
              class="border-0 bg-transparent opacity-75-hover px-4"
              type="button"
            >
              <img
                class="w-24px d-inline-block"
                src="./assets/images/copy.png"
                alt="copy"
                title="copy"
              />
            </button>
            <div class="d-lg-flex align-items-center justify-content-between">
              <div class="d-flex justify-content-between">
                <div class="text-lg-end">
                  <!-- 編輯 -->
                  <a
                    role=editBtn
                    data-id=${item.id}
                    class="btn rounded-pill background-gradient-linear text-white py-3 px-6 fs-base fs-lg-5 mt-8 mt-lg-10 w-100 w-lg-auto d-none d-lg-inline-block"
                    href="./editor.html"
                    >編輯</a
                  >
                </div>
                <!-- 編輯 end -->
                <div class="text-lg-end w-50 w-lg-auto">
                  <!-- 瀏覽 -->
                  <a
                    role=viewBtn
                    data-id=${item.id}
                    class="btn rounded-pill background-gradient-linear text-white py-3 px-6 fs-base fs-lg-5 mt-8 mt-lg-10 ml-lg-4 w-100 w-lg-auto"
                    href="./editor.html"
                    >瀏覽</a
                  >
                </div>
                <!-- 瀏覽 end -->
                <div class="text-lg-end w-50 w-lg-auto ml-4 ml-lg-0">
                  <!-- 下載 -->
                  <button
                    role="downloadBtn"
                    data-id=${item.id}
                    class="btn rounded-pill background-gradient-linear text-white py-3 px-6 fs-base fs-lg-5 mt-8 mt-lg-10 ml-lg-4 w-100 w-lg-auto"
                    type="button"
                  >
                    下載 (PDF)
                  </button>
                </div>
                <!-- 下載 end -->
              </div>
              <div class="mt-4 mt-lg-8 text-end text-lg-start">
                <!-- 垃圾桶 -->
                <button
                  type="button"
                  class="border-0 bg-transparent opacity-75-hover px-4"
                >
                  <img
                    role="delBtn"
                    data-id=${item.id}
                    class="w-28px d-inline-block"
                    src="./assets/images/bin.png"
                    alt="bin"
                    title="delete"
                  />
                </button>
              </div>
              <!-- 垃圾桶 end -->
            </div>
          </div>
        </div>
        `;
  });
  return resumeList.innerHTML = template
};
function getResume() {
  const userId = JSON.parse(localStorage.getItem("userId"));
  const token = JSON.parse(localStorage.getItem("token"));
  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };
  const apiUrl = `https://my-resume-server-pdla9hri6-linlaose.vercel.app/600/users/${userId}/resumes`;

  axios.get(apiUrl, config)
    .then((res) => {
      renderData(res.data);
    }).catch((err) => {
      alert(err);
    })
};
function delResumeData() {
  localStorage.removeItem("resumeId");
  localStorage.removeItem("fileName");
  localStorage.removeItem("resumeName");
  localStorage.removeItem("template");
  localStorage.removeItem("newTemplate");
};
function delResume(resumeId) {
  const apiUrl = `https://my-resume-server-pdla9hri6-linlaose.vercel.app/600/resumes/${resumeId}`;
  const token = JSON.parse(localStorage.getItem("token"));
  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };


  axios.delete(apiUrl, config)
    .then((res) => {
      Swal.fire({
        icon: 'success',
        title: '刪除成功',
      }).then(() => {
        getResume();
      })
    })
    .catch((err) => {
      alert(err);
    })
};
function printResume(targetId) {
  const apiUrl = `https://my-resume-server-pdla9hri6-linlaose.vercel.app/600/resumes/${targetId}`;
  const token = JSON.parse(localStorage.getItem("token"));
  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };



  axios.get(apiUrl, config)
    .then((res) => {
      const el = document.createElement("div");
      el.innerHTML = res.data.template;
      Swal.fire({
        title: "另存新檔為：",
        input: "text",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonText: "確認",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.setItem("fileName", JSON.stringify(result.value));
          let opt = {
            margin: 0,
            filename: JSON.parse(localStorage.getItem("fileName")),
            image: { type: 'pdf', quality: 0.95 },
            html2canvas: { scale: 2, useCORS: true }, // 用 CORS 才能確保能抓到其他網站圖片
            jsPDF: { unit: 'mm', format: 'letter', orientation: 'p', compressPDF: true },
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
          };
          html2pdf().set(opt).from(el).save();
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

if (resumeList) {
  delResumeData();
  getResume();
  resumeList.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("role");
    const targetId = e.target.getAttribute("data-id");
    if (target === "delBtn") {
      delResume(targetId);
    } else if (target === "viewBtn" || target === "editBtn") {
      localStorage.setItem("resumeId", JSON.stringify(`${targetId}`))
      location.href = "editor.html";
    } else if (target === "downloadBtn") {
      printResume(targetId);
    };
  });
};