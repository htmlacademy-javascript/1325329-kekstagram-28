import { isEscapeKey } from './util';
import { onDocumentKeydown } from './upload.js';


const successId = document.querySelector('#success').content;
const success = document.querySelector('.success');
const successBtn = document.querySelector('.success__button');
const succesNode = successId.cloneNode(true);
const errorId = document.querySelector('#error').content;
const errorNode = errorId.cloneNode(true);
const error = document.querySelector('.error');
const errorBtn = document.querySelector('.error__button');

const onClickCloseModal = (evt) => {
  if (evt.target.matches('.success')) {
    document.querySelector('.success').remove();
  }
  if (evt.target.matches('.error')) {
    document.querySelector('.error').remove();
  }
};

const closeSuccessMessage = () => {
  success.remove();
};

const showSuccesMessage = () => {
  document.body.append(succesNode);
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
  error.remove();
};

const showErrorMessage = () => {
  document.body.append(errorNode);
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

export { showSuccesMessage, showErrorMessage };
