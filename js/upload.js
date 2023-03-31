import { isEscapeKey } from './util.js';
import { resetScale } from './scale.js';
import { resetSlider } from './slider.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('#upload-file');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadCancel = uploadForm.querySelector('.img-upload__cancel');
const uploadComments = uploadForm.querySelector('.text__description');
const uploadHashtags = uploadForm.querySelector('.text__hashtags');
const body = document.querySelector('body');

const onBlockEsc = () => {
  uploadComments.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.stopPropagation();
    }
  });
  uploadHashtags.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.stopPropagation();
    }
  });
};

const onOpenForm = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  onBlockEsc();
};

uploadFile.addEventListener('change', onOpenForm);

const onCloseForm = () => {
  uploadForm.reset();
  resetScale();
  resetSlider();
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  uploadFile.value = '';
};

uploadCancel.addEventListener('click', onCloseForm);

export function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onCloseForm();
  }
}

export { uploadForm, uploadHashtags, uploadComments, onCloseForm };
