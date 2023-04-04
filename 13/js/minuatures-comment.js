const COMMENTS_SHOW_COUNT = 5;
const bigPicturesContainer = document.querySelector('.big-picture');
const commentsCount = bigPicturesContainer.querySelector('.social__comment-count');
const socialComments = bigPicturesContainer.querySelector('.social__comments');
const moreComments = bigPicturesContainer.querySelector('.comments-loader');

const createElement = (tagName, className, text) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

const createComment = (arr, container) => {
  arr.forEach((item) => {
    const listItem = createElement('li', 'social__comment');
    listItem.classList.add('hidden');
    const picture = createElement('img', 'social__picture');
    const commentText = createElement('p', 'social__text', item.message);

    picture.src = item.avatar;
    picture.alt = item.name;

    listItem.appendChild(picture);
    listItem.appendChild(commentText);
    container.appendChild(listItem);
  });
};

const showComments = (arr) => {
  const count = Math.min(arr.length, COMMENTS_SHOW_COUNT);
  for (let i = 0; i < count; i++) {
    arr[i].classList.remove('hidden');
  }
  commentsCount.textContent = `${socialComments.children.length - socialComments.querySelectorAll('.hidden').length} из ${socialComments.children.length} комментариев`;
};

const loadComments = () => {
  const hiddenComments = socialComments.querySelectorAll('.hidden');
  showComments(hiddenComments);

  if (hiddenComments.length <= COMMENTS_SHOW_COUNT) {
    moreComments.classList.add('hidden');
  }
};

export { createComment, loadComments };

