const createElement = (tagName, className, text) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

export const createComment = (arr, container) => {
  arr.forEach((item) => {
    const listItem = createElement('li', 'social__comment');
    const picture = createElement('img', 'social__picture');
    const commentText = createElement('p', 'social__text', item.message);

    picture.src = item.avatar;
    picture.alt = item.name;

    listItem.appendChild(picture);
    listItem.appendChild(commentText);
    container.appendChild(listItem);
  });
};

