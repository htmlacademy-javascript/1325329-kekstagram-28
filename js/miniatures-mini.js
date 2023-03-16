// import { similarPost } from './data.js';

const picturesContainer = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
// const picturesRendering = similarPost();
const pictureListFragment = document.createDocumentFragment();

const renderingMiniatures = (descriptionData) => {
  // const listElements = pictures;
  descriptionData.forEach((dataItem) => {
    const pictureElement = picturesTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = dataItem.url;
    pictureElement.querySelector('.picture__img').alt = dataItem.description;
    pictureElement.querySelector('.picture__likes').textContent = dataItem.likes;
    pictureElement.querySelector('.picture__comments').textContent = dataItem.comments.length;
    pictureElement.dataset.id = dataItem.id;
    pictureListFragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(pictureListFragment);
};

export { renderingMiniatures };
