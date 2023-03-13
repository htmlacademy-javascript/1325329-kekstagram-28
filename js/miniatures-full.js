import { picturesContainer } from './miniatures-mini.js';
import { isEscapeKey } from './util.js';

const bigPicturesContainer = document.querySelector('.big-picture');
const bigPicturesImg = bigPicturesContainer.querySelector('.big-picture__img').querySelector('.img');
const bigPicturesClose = bigPicturesContainer.querySelector('.big-picture__cancel');
const bigPicturesLikes = bigPicturesContainer.querySelector('.likes-count');
const bigPicturesComments = bigPicturesContainer.querySelector('.comments-count');
const picturesCaption = bigPicturesContainer.querySelector('.social__caption');
const commentsCount = bigPicturesContainer.querySelector('.social__comment-count');
const moreComments = bigPicturesContainer.querySelector('.comments-loader');

const onClickPictures = (evt) => {
  evt.preventDefault();
  if (evt.target.closest('.picture')) {
    const id = evt.target.closest('a').dataset.id;
    bigPicturesContainer.classList.remove('hidden');
    // bigPicturesImg.src = object[id].url;
    // bigPicturesImg.alt = object[id].description;
    // picturesCaption.textContent = object[id].description;
    // bigPicturesLikes.textContent = object[id].likes;
    // bigPicturesComments.textContent = object[id].comments.length;

    commentsCount.classList.add('hidden');
    moreComments.classList.add('hidden');

    document.body.classList.add('modal-open');
  }
};

picturesContainer.addEventListener('click', onClickPictures);

const onClosePictures = () => {
  bigPicturesContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

bigPicturesClose.addEventListener('click', onClosePictures);

document.addEventListener('keydown', () => {
  if (isEscapeKey) {
    bigPicturesContainer.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
});
