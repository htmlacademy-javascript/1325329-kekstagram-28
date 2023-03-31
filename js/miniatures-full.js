import { isEscapeKey } from './util.js';
import { createComment, loadComments } from './minuatures-comment.js';

const picturesBlock = document.querySelector('.pictures');
const bigPicturesContainer = document.querySelector('.big-picture');
const bigPicturesImg = bigPicturesContainer.querySelector('.big-picture__img').querySelector('img');
const bigPicturesClose = bigPicturesContainer.querySelector('.big-picture__cancel');
const bigPicturesLikes = bigPicturesContainer.querySelector('.likes-count');
const bigPicturesComments = bigPicturesContainer.querySelector('.comments-count');
const picturesCaption = bigPicturesContainer.querySelector('.social__caption');
const socialComments = bigPicturesContainer.querySelector('.social__comments');
const moreComments = bigPicturesContainer.querySelector('.comments-loader');

const renderingBigMiniatures = (data) => {
  const onClickPictures = (evt) => {
    const target = evt.target.closest('a');
    if (target) {
      evt.preventDefault();
      const correctDescription = data.find((item) => item.id === Number(target.dataset.id));
      bigPicturesContainer.classList.remove('hidden');
      moreComments.classList.remove('hidden');

      bigPicturesImg.src = correctDescription.url;
      bigPicturesImg.alt = correctDescription.description;
      picturesCaption.textContent = correctDescription.description;
      bigPicturesLikes.textContent = correctDescription.likes;
      bigPicturesComments.textContent = correctDescription.comments.length;
      socialComments.innerHTML = '';

      document.body.classList.add('modal-open');
      createComment(correctDescription.comments, socialComments);
      loadComments();
    }
  };
  picturesBlock.addEventListener('click', onClickPictures);
};

moreComments.addEventListener('click', loadComments);

const onClosePictures = () => {
  bigPicturesContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  moreComments.classList.remove('hidden');
};

bigPicturesClose.addEventListener('click', () => {
  onClosePictures();
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    bigPicturesContainer.classList.add('hidden');
  }
});

export { renderingBigMiniatures };
