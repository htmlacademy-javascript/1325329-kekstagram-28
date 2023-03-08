import { similarPost } from './data.js';

const otherPictures = document.querySelector('.pictures');

const similarListElement = otherPictures.querySelector('.picture');
const similarPictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture__img');

const similarPictures = similarPost();

const similarListFragment = document.createDocumentFragment();

similarPictures.forEach(() => {
  const pictureElement = similarPictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').textContent = similarPost.url;
  pictureElement.querySelector('.picture__likes').textContent = similarPost.likes;
  pictureElement.querySelector('.picture__comments').textContent = similarPost.comments;
  similarListElement.appendChild(pictureElement);
});

similarListElement.appendChild(similarListFragment);

similarPictures();
