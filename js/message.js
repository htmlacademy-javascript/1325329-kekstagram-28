import { isEscapeKey } from './util.js';
import { onDocumentKeydown } from './upload.js';

const successId = document.querySelector('#success').content;
const succesNode = successId.cloneNode(true);
const errorId = document.querySelector('#error').content;
const errorNode = errorId.cloneNode(true);

const onClickCloseModal = (evt) => {
  if (evt.target.matches('.success')) {
    document.querySelector('.success').remove();
  }
  if (evt.target.matches('.error')) {
    document.querySelector('.error').remove();
  }
};

const closeSuccessMessage = () => {
  document.querySelector('.success').remove();
};

const showSuccessMessage = () => {
  document.body.append(succesNode);
  const success = document.querySelector('.success');
  const successBtn = document.querySelector('.success__button');
  success.addEventListener('click', onClickCloseModal);
  successBtn.addEventListener('click', closeSuccessMessage);
  document.removeEventListener('keydown', onDocumentKeydown);
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      success.remove();
      document.addEventListener('keydown', onDocumentKeydown);
    }
  });
};

const closeErrorMessage = () => {
  document.querySelector('.error').remove();
};

const showErrorMessage = () => {
  document.body.append(errorNode);
  const error = document.querySelector('.error');
  const errorBtn = document.querySelector('.error__button');
  error.addEventListener('click', onClickCloseModal);
  errorBtn.addEventListener('click', closeErrorMessage);
  document.removeEventListener('keydown', onDocumentKeydown);
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      error.remove();
      document.addEventListener('keydown', onDocumentKeydown);
    }
  });
};

export { showSuccessMessage, showErrorMessage };
