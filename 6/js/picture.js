import { similarPost } from './data.js';

const picturesTemplate = document.querySelector('#picture').content;
const picturesRendering = similarPost();
const pictureListFragment = document.createDocumentFragment();
const picturesContainer = document.querySelector('.pictures');

picturesRendering.forEach(({ url, likes, comments }) => {
  const pictureElement = picturesTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  pictureListFragment.appendChild(pictureElement);
});

picturesContainer.appendChild(pictureListFragment);

export { picturesRendering };
