const designResumeTemplate = document.querySelector('#designResumeTemplate');

function initDesign() {
  getResumes();
}
if (designResumeTemplate) {
  initDesign();
}

function getResumes() {
  const apiUrl = 'https://my-resume-server-linlaose.vercel.app/resumes';
  let resumes;

  axios.get(apiUrl)
    .then((res) => {
      resumes = res.data;
      drawTemplate(resumes);
    })
    .catch((err) => {
      console.log(err);
    })
}

function drawTemplate(arr) {
  arr.forEach((item, index) => {
    const el = document.createElement('li');
    el.setAttribute('data-id', index + 1);
    el.innerHTML = item.template;
    designResumeTemplate.appendChild(el);
  });
  const elArray = designResumeTemplate.children;
  let str = "";
  elArray.forEach((item, index) => {
    html2canvas(item, { useCORS: true }).then(canvas => {
      const base64 = canvas.toDataURL();
      str += `<li><a href="index.html"><img data-id=${index + 1} src="${base64}"></a></li>`;
      designResumeTemplate.innerHTML = str;
    });
  })
}

function receiveResume(resumeId) {
  const apiUrl = `https://my-resume-server-linlaose.vercel.app/resumes/${resumeId}`;

  axios.get(apiUrl)
    .then((res) => {
      localStorage.setItem('template', res.data.template);
    })
    .catch((err) => {
      console.log(err);
    })
}

if (designResumeTemplate) {
  designResumeTemplate.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName === 'IMG') {
      if (!localStorage.getItem('userId')) {
        Swal.fire({
          icon: "warning",
          title: "請登入會員",
        }).then(() => {
          location.href = 'login.html';
        })
      } else {
        const resumeId = e.target.getAttribute('data-id');
        receiveResume(resumeId);
      }
    }
  })
}
