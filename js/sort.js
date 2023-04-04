const PICTURES_RANDOM_COUNT = 10;
const Sort = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const sortElement = document.querySelector('.img-filters');
let currentSort = Sort.DEFAULT;
let pictures = [];

const randomSort = () => Math.random() - 0.5;

const sortByDiscussed = (a, b) => b.comments.length - a.comments.length;

const getSortedPictures = () => {
  switch (currentSort) {
    case Sort.RANDOM:
      return [...pictures].sort(randomSort).slice(0, PICTURES_RANDOM_COUNT);
    case Sort.DISCUSSED:
      return [...pictures].sort(sortByDiscussed);
    default:
      return [...pictures];
  }
};

const onSortClick = (cb) => {
  sortElement.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('img-filters__button')) {
      return;
    }
    const clickButton = evt.target;
    if (clickButton.id === currentSort) {
      return;
    }
    sortElement.querySelector('.img-filters__button--active');
    sortElement.classList.remove('.img-filters__button--active');
    clickButton.classList.add('.img-filters__button--active');
    currentSort = clickButton.id;
    cb(getSortedPictures());
  });
};

const init = (loadedPictures, cb) => {
  sortElement.classList.remove('.img-filters--inactive');
  pictures = [...loadedPictures];
  onSortClick(cb);
};

export { init, getSortedPictures };
