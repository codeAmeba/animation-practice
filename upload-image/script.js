const form = document.querySelector('.form');
const input = document.querySelector('#imageUploadInput');

const imageName = document.querySelector('.image-name');
const image = document.querySelector('.image');

const loadingWrapper = document.querySelector('.loading-wrapper');
const loadingBar = document.querySelector('.loading-bar');
const loadingNumber = document.querySelector('.loading-number');

let imageData;
input.addEventListener('change', e => {
  if (e.target.files.length) {
    imageData = e.target.files[0];
    imageName.getElementsByClassName.display = 'block';
    imageName.innerText = imageData.name;
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const api_link = '...';

  const formData = new FormData();
  formData.append('image', imageData);

  const config = {
    onUploadProgress: progressEvent => {
      const { loaded, total } = progressEvent;
      const percentage = Math.round((loaded * 100) / total);
      loadingWrapper.style.display = 'block';
      loadingBar.style.width = percentage + '%';
      loadingNumber.innerText = percentage + '%';
    },

    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  }

  axios.patch(api_link, formData, config).then(res => {
    image.style.display = 'block';
    image.setAttribute('src', res.data.user.newAvatar);
    loadingWrapper.style.display = 'none';
  });
});