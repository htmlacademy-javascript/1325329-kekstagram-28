import { uploadFile } from './upload.js';
import { sliderImageElement } from './slider.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const fileUpload = document.querySelector('.img-upload input[type=file]');

uploadFile.addEventListener('change', () => {
  const file = fileUpload.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    sliderImageElement.src = URL.createObjectURL(file);
  }
});
