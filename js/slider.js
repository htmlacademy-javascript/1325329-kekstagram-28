const FILTER_EFFECTS = [
  { name: 'none', style: 'none', min: 0, max: 100, step: 1, unit: '', },
  { name: 'chrome', style: 'grayscale', min: 0, max: 1, step: 0.1, unit: '', },
  { name: 'sepia', style: 'sepia', min: 0, max: 1, step: 0.1, unit: '', },
  { name: 'marvin', style: 'invert', min: 0, max: 100, step: 1, unit: '%', },
  { name: 'phobos', style: 'blur', min: 0, max: 3, step: 0.1, unit: 'px', },
  { name: 'heat', style: 'brightness', min: 1, max: 3, step: 0.1, unit: '', },
];

const DEFAULT_EFFECT = FILTER_EFFECTS[0];
let currentEffect = DEFAULT_EFFECT;

const effectsElement = document.querySelector('.effects');
const sliderEffectLevel = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderLevelValue = document.querySelector('.effect-level__value');
const sliderImageElement = document.querySelector('.img-upload__preview img');

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});

const isDefault = () => {
  if (currentEffect === DEFAULT_EFFECT) {
    sliderEffectLevel.classList.add('hidden');
    sliderImageElement.style.filter = 'none';
  } else {
    sliderEffectLevel.classList.remove('hidden');
  }
};

const updateSlider = () => {
  isDefault();
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    step: currentEffect.step,
    start: currentEffect.max,
  });
};

const resetSlider = () => {
  currentEffect = DEFAULT_EFFECT;
  updateSlider();
};

const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  sliderImageElement.style.filter = isDefault()
    ? DEFAULT_EFFECT.style
    : `${currentEffect.style}(${sliderValue}${currentEffect.unit})`;
  sliderLevelValue.value = sliderValue;
};

const onEffectChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  currentEffect = FILTER_EFFECTS.find((effect) => effect.name === evt.target.value);
  sliderImageElement.className = `effects__preview--${currentEffect.name}`;
  updateSlider();
};

effectsElement.addEventListener('change', onEffectChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export { resetSlider, sliderImageElement };
