import { isEscapeKey } from './util.js';
import { onDocumentKeydown } from './upload.js';

const successId = document.querySelector('#success').content;
const errorId = document.querySelector('#error').content;

const onSuccesKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    document.querySelector('.success').remove();
    document.removeEventListener('keydown', onSuccesKeydown);
  }
};

const onErrorKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    document.querySelector('.error').remove();
    document.removeEventListener('keydown', onErrorKeydown);
  }
};

const onOutClickCloseModal = (evt) => {
  if (evt.target.matches('.success')) {
    document.querySelector('.success').remove();
    document.removeEventListener('keydown', onSuccesKeydown);
  }
  if (evt.target.matches('.error')) {
    document.querySelector('.error').remove();
    document.removeEventListener('keydown', onErrorKeydown);
  }
};

const closeSuccessMessage = () => {
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', onSuccesKeydown);
};

const showSuccessMessage = () => {
  const succesNode = successId.cloneNode(true);
  document.body.append(succesNode);
  const success = document.querySelector('.success');
  const successBtn = document.querySelector('.success__button');
  success.addEventListener('click', onOutClickCloseModal);
  successBtn.addEventListener('click', closeSuccessMessage);
  document.removeEventListener('keydown', onDocumentKeydown);
  document.addEventListener('keydown', onSuccesKeydown);
};

const closeErrorMessage = () => {
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', onErrorKeydown);
};

const showErrorMessage = () => {
  const errorNode = errorId.cloneNode(true);
  document.body.append(errorNode);
  const error = document.querySelector('.error');
  const errorBtn = document.querySelector('.error__button');
  error.addEventListener('click', onOutClickCloseModal);
  errorBtn.addEventListener('click', closeErrorMessage);
  document.removeEventListener('keydown', onDocumentKeydown);
  document.addEventListener('keydown', onErrorKeydown);
};

export { showSuccessMessage, showErrorMessage };
