import { similarPost } from './data.js';

const picturesContainer = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').content;
const picturesRendering = similarPost();
const pictureListFragment = document.createDocumentFragment();

const renderingMiniatures = () => {
  picturesRendering.forEach(({ url, likes, comments, description }) => {
    const pictureElement = picturesTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureListFragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(pictureListFragment);
};

export { renderingMiniatures, picturesContainer, pictureListFragment };
