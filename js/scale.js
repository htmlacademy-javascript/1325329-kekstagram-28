const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_DEFAULT = 100;
const SCALE_STEP = 25;

const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const scaleImageElement = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  scaleImageElement.style.transform = `scale(${value / 100})`;
  scaleValue.value = `${value}%`;
};

const onScaleSmallerButton = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  const newValue = Math.max(currentValue - SCALE_STEP, SCALE_MIN);
  scaleImage(newValue);
};

scaleSmallerButton.addEventListener('click', onScaleSmallerButton);

const onScaleBiggerButton = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  const newValue = Math.min(currentValue + SCALE_STEP, SCALE_MAX);
  scaleImage(newValue);
};

scaleBiggerButton.addEventListener('click', onScaleBiggerButton);

const resetScale = () => scaleImage(SCALE_DEFAULT);

export { resetScale };
