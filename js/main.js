/* eslint-disable no-console */
const names = [
  'Павел',
  'Артём',
  'Иван',
  'Илья',
  'Александр',
  'Никита',
  'Алексей',
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const descriptions = [
  'Я не верю в будущее, я верю в сегодня',
  'Если жизнь подкидывает мне лимоны, я делаю из них лимонад',
  'На 80% состою из важных дел',
  'Моя жизнь – мои правила',
  'Я не везунчик, я просто талантливый',
  'Я уверен в себе, и мнение окружающих не заставит меня передумать',
  'Мой девиз – быть экстраординарной',
];

const getRandomInteger = (min, max) => Math.floor(Math.random() * max - min + 1) + min;

function createRandomIdGenerator(min, max) {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error(`Перебраны все числа из диапазона от ${ min } до ${ max}`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const SIMILAR_POST_COUNT = 25;
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const generateId = createRandomIdGenerator(1, 25);
const generateUrl = createRandomIdGenerator(1, 25);
const generateIdComments = createRandomIdGenerator(1, 500);

const createPostPhotos = () => ({
  id: generateId(),
  url: `photos/${generateUrl()}.jpg`,
  description: `${getRandomArrayElement(descriptions)}`,
  likes: getRandomInteger(15, 200),
  comments: {
    id: generateIdComments(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: `${getRandomArrayElement(messages)}`,
    name: `${getRandomArrayElement(names)}`,
  }
});

const similarPost = Array.from({ length: SIMILAR_POST_COUNT }, createPostPhotos);

console.log(similarPost);


