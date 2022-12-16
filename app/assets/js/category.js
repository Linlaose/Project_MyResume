const designResumeTemplate = document.querySelector('#designResumeTemplate');
const engineeringResumeTemplate = document.querySelector('#engineeringResumeTemplate');
const managementResumeTemplate = document.querySelector('#managementResumeTemplate');

function initDesign() {
  getResumes();
}
if (designResumeTemplate || engineeringResumeTemplate || managementResumeTemplate) {
  initDesign();
}

function getResumes() {
  const apiUrl = 'https://my-resume-server-linlaose.vercel.app/resumes';

  axios.get(apiUrl)
    .then((res) => {
      const arr = document.URL.split('/');
      const arrays = {
        design: [],
        engineering: [],
        management: []
      };
      const currentUrl = arr[arr.length - 1];
      res.data.forEach((item) => {
        switch (item.category) {
          case '設計類':
            arrays.design.push(item);
            break
          case '工程類':
            arrays.engineering.push(item);
            break
          case '管理類':
            arrays.management.push(item);
            break
          default:
            console.log('類別 switch 預設');
        }
      });
      switch (currentUrl) {
        case 'design.html':
          renderTemplate(arrays.design);
          break
        case 'engineering.html':
          renderTemplate(arrays.engineering);
          break
        case 'management.html':
          renderTemplate(arrays.management);
          break
        default:
          console.log('網址 switch 預設');
          break
      }
    })
    .catch((err) => {
      console.log(err);
    })
}

function renderTemplate(arr) {
  arr.forEach((item, index) => {
    const el = document.createElement('li');
    el.setAttribute('data-id', index + 1);
    el.innerHTML = item.template;
    if (designResumeTemplate) {
      designResumeTemplate.appendChild(el);
    } else if (engineeringResumeTemplate) {
      engineeringResumeTemplate.appendChild(el);
    } else if (managementResumeTemplate) {
      managementResumeTemplate.appendChild(el);
    }
  });
  if (designResumeTemplate) {
    const elArray = [...designResumeTemplate.children];
    let str = "";
    elArray.forEach((item, index) => {
      html2canvas(item, { useCORS: true }).then(canvas => {
        const base64 = canvas.toDataURL();
        str += `<li><a href="index.html"><img data-id=${index + 1} src="${base64}"></a></li>`;
        designResumeTemplate.innerHTML = str;
      });
    })
  } else if (engineeringResumeTemplate) {
    const elArray = [...engineeringResumeTemplate.children];
    let str = "";
    elArray.forEach((item, index) => {
      html2canvas(item, { useCORS: true }).then(canvas => {
        const base64 = canvas.toDataURL();
        str += `<li><a href="index.html"><img data-id=${index + 1} src="${base64}"></a></li>`;
        engineeringResumeTemplate.innerHTML = str;
      });
    })
  } else if (managementResumeTemplate) {
    const elArray = [...managementResumeTemplate.children];
    let str = "";
    elArray.forEach((item, index) => {
      html2canvas(item, { useCORS: true }).then(canvas => {
        const base64 = canvas.toDataURL();
        str += `<li><a href="index.html"><img data-id=${index + 1} src="${base64}"></a></li>`;
        managementResumeTemplate.innerHTML = str;
      });
    })
  }
}

function receiveResume(resumeId) {
  const apiUrl = `https://my-resume-server-linlaose.vercel.app/resumes/${resumeId}`;

  axios.get(apiUrl)
    .then((res) => {
      localStorage.setItem('template', res.data.template);
      location.href = 'editor.html';
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
} else if (engineeringResumeTemplate) {
  engineeringResumeTemplate.addEventListener('click', (e) => {
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
} else if (managementResumeTemplate) {
  managementResumeTemplate.addEventListener('click', (e) => {
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
