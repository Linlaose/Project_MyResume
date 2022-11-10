tinymce.init({
  selector: '#tinyText',
  plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount code tinydrive',
  toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | code codesample|',
});

const tiny = document.querySelector('#tinymce');
const editor = document.querySelector('[data-editor]');
editor.addEventListener('submit', (e) => {
  e.preventDefault();
  tinymce.activeEditor.setContent("<p>Hello world!</p>"); // 設定 editor 內容
  console.log(tinymce.activeEditor.getContent("tinyText")); // 獲取 editor 內容
})