const PICTURES_RANDOM_COUNT = 10;
const SORT_RANDOM_NUMBER = 0.5;
const Sort = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const sortElement = document.querySelector('.img-filters');
const sortForm = document.querySelector('.img-filters__form');
const sortBtn = sortForm.querySelectorAll('.img-filters__button');

let currentSort = Sort.DEFAULT;
let descriptionDataSort = [];

const randomSort = () => Math.random() - SORT_RANDOM_NUMBER;

const sortByDiscussed = (a, b) => b.comments.length - a.comments.length;

const getSortedPictures = () => {
  switch (currentSort) {
    case Sort.RANDOM:
      return [...descriptionDataSort].sort(randomSort).slice(0, PICTURES_RANDOM_COUNT);
    case Sort.DISCUSSED:
      return [...descriptionDataSort].sort(sortByDiscussed);
    default:
      return [...descriptionDataSort];
  }
};

const onSortClick = (cb) => {
  sortForm.addEventListener('click', (evt) => {
    sortBtn.forEach((item) => item.classList.remove('img-filters__button--active'));
    evt.target.classList.add('img-filters__button--active');
    currentSort = evt.target.id;
    cb(getSortedPictures());
  });
};

const init = (loadedPictures, cb) => {
  sortElement.classList.remove('img-filters--inactive');
  descriptionDataSort = [...loadedPictures];
  onSortClick(cb);
};

export { init, getSortedPictures };
