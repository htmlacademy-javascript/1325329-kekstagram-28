import { uploadForm, uploadHashtags, uploadComments } from './upload.js';

const HASHTAG_MAX_COUNT = 5;
const COMMENTS_MAX_COUNT = 140;
const VALID_HASTHTAG_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const ERROR_TEXT_TAGS = 'Неправильно заполнены хэштеги';
const ERROR_TEXT_COMMENTS = 'Комментарий не может быть длинее 140 символов';

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const isValidHashtag = (tag) => VALID_HASTHTAG_SYMBOLS.test(tag);

const validateHashtagCount = (tags) => tags.length <= HASHTAG_MAX_COUNT;

function validateCommentCount(value) {
  return value.length <= COMMENTS_MAX_COUNT;
}

function validateHashtagUnique(tags) {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
}

function validateHashtags(value) {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return validateHashtagCount(tags) && validateHashtagUnique(tags) && tags.every(isValidHashtag);
}

pristine.addValidator(
  uploadHashtags,
  validateHashtags,
  ERROR_TEXT_TAGS,
);

pristine.addValidator(
  uploadComments,
  validateCommentCount,
  ERROR_TEXT_COMMENTS,
);

uploadForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});


