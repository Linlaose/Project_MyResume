const resumeName = document.querySelector("[data-resumeName]");
const resumeBlock = document.querySelector("[data-myResume]");

function renderData(res) {
  let template = "";
  res.forEach((item) => {
    template += `
        <div  class="resume-shadow p-4 mt-4 mt-lg-8 rounded">
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
                    class="btn rounded-pill background-gradient-linear text-white py-3 px-6 fs-base fs-lg-5 mt-8 mt-lg-10 w-100 w-lg-auto d-none d-lg-inline-block"
                    href="./editor.html"
                    >編輯</a
                  >
                </div>
                <!-- 編輯 end -->
                <div class="text-lg-end w-50 w-lg-auto">
                  <!-- 瀏覽 -->
                  <a
                    class="btn rounded-pill background-gradient-linear text-white py-3 px-6 fs-base fs-lg-5 mt-8 mt-lg-10 ml-lg-4 w-100 w-lg-auto"
                    href="./editor.html"
                    >瀏覽</a
                  >
                </div>
                <!-- 瀏覽 end -->
                <div class="text-lg-end w-50 w-lg-auto ml-4 ml-lg-0">
                  <!-- 下載 -->
                  <button
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
  return resumeBlock.innerHTML = template
};
function getResume() {
  const userId = JSON.parse(localStorage.getItem("userId"));
  const token = JSON.parse(localStorage.getItem("token"));
  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };
  const apiUrl = `http://localhost:3000/600/users/${userId}/resumes`;

  axios.get(apiUrl, config)
    .then((res) => {
      renderData(res.data);
    }).catch((err) => {
      alert(err);
    })
};
if (resumeBlock) {
  getResume();
};