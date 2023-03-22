// import { isEscapeKey } from "./util";

const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('#upload-file');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const uploadCancel = uploadForm.querySelector('.img-upload-cancel');
const uploadSubmit = uploadForm.querySelector('.img-upload-submit');
const uploadHashtags = uploadForm.querySelector('.text__hashtags');
const uploadComments = uploadForm.querySelector('.text__description');
const body = document.querySelector('body');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const onOpenForm = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
};

const onCloseForm = () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
};

uploadForm.addEventListener('click', onOpenForm, onCloseForm);

