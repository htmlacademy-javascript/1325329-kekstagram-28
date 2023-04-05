import { isEscapeKey } from './util.js';
import { onDocumentKeydown } from './upload.js';

const successId = document.querySelector('#success').content;
const errorId = document.querySelector('#error').content;

const onSuccesKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeSuccessMessage();
  }
};

const onErrorKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeErrorMessage();
  }
};

const onOutClickCloseModal = (evt) => {
  if (evt.target.matches('.success')) {
    closeSuccessMessage();
  }
  if (evt.target.matches('.error')) {
    closeErrorMessage();
  }
};

function closeSuccessMessage() {
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', onSuccesKeydown);
}

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

function closeErrorMessage() {
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', onErrorKeydown);
  document.addEventListener('keydown', onDocumentKeydown);
}

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
