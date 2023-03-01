import {getRandomInteger, createRandomIdGenerator} from './util.js';

const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const AVATAR_MAX = 6;
const SIMILAR_POST_COUNT = 25;
const NAMES = [
  'Павел',
  'Артём',
  'Иван',
  'Илья',
  'Александр',
  'Никита',
  'Алексей',
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const DESCRIPTIONS = [
  'Я не верю в будущее, я верю в сегодня',
  'Если жизнь подкидывает мне лимоны, я делаю из них лимонад',
  'На 80% состою из важных дел',
  'Моя жизнь – мои правила',
  'Я не везунчик, я просто талантливый',
  'Я уверен в себе, и мнение окружающих не заставит меня передумать',
  'Мой девиз – быть экстраординарной',
];

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const generateId = createRandomIdGenerator(1, 25);
const generateUrl = createRandomIdGenerator(1, 25);
const generateIdComments = createRandomIdGenerator(1, 500);

const createPostPhotos = () => ({
  id: generateId(),
  url: `photos/${generateUrl()}.jpg`,
  description: `${getRandomArrayElement(DESCRIPTIONS)}`,
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: {
    id: generateIdComments(),
    avatar: `img/avatar-${getRandomInteger(1, AVATAR_MAX)}.svg`,
    message: `${getRandomArrayElement(MESSAGES)}`,
    name: `${getRandomArrayElement(NAMES)}`,
  }
});

const similarPost = () => Array.from({ length: SIMILAR_POST_COUNT }, createPostPhotos);

export {similarPost};
