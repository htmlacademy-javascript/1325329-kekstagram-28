import { isEscapeKey, isEnterKey } from './util.js';
import { createComment } from './minuatures-comment.js';
import { descriptionData } from './main.js';

const picturesBlock = document.querySelector('.pictures');
const bigPicturesContainer = document.querySelector('.big-picture');
const bigPicturesImg = bigPicturesContainer.querySelector('.big-picture__img').querySelector('img');
const bigPicturesClose = bigPicturesContainer.querySelector('.big-picture__cancel');
const bigPicturesLikes = bigPicturesContainer.querySelector('.likes-count');
const bigPicturesComments = bigPicturesContainer.querySelector('.comments-count');
const picturesCaption = bigPicturesContainer.querySelector('.social__caption');
const commentsCount = bigPicturesContainer.querySelector('.social__comment-count');
const socialComments = bigPicturesContainer.querySelector('.social__comments');
const moreComments = bigPicturesContainer.querySelector('.comments-loader');

const onClickPictures = (evt) => {
  evt.preventDefault();
  if (evt.target.closest('a')) {
    const target = evt.target.closest('a');
    const correctDescription = descriptionData.find((item) => item.id === Number(target.dataset.id));
    bigPicturesContainer.classList.remove('hidden');

    bigPicturesImg.src = correctDescription.url;
    bigPicturesImg.alt = correctDescription.description;
    picturesCaption.textContent = correctDescription.description;
    bigPicturesLikes.textContent = correctDescription.likes;
    bigPicturesComments.textContent = correctDescription.comments.length;
    socialComments.innerHTML = '';

    commentsCount.classList.add('hidden');
    moreComments.classList.add('hidden');

    document.body.classList.add('modal-open');

    createComment(correctDescription.comments, socialComments);
  }
};

picturesBlock.addEventListener('click', onClickPictures);

const onClosePictures = () => {
  bigPicturesContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

bigPicturesClose.addEventListener('click', onClosePictures);

bigPicturesClose.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    onClosePictures();
  }
  document.body.classList.remove('modal-open');
});


document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    bigPicturesContainer.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
});

export { onClickPictures };
