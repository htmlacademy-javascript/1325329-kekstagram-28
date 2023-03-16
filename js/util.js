const getRandomInteger = (min, max) => Math.floor(Math.random() * max - min + 1) + min;

const createRandomIdGenerator = (min, max) => {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {

      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

export { getRandomInteger, createRandomIdGenerator, isEscapeKey, isEnterKey };

