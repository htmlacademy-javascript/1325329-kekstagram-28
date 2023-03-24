import { similarPost } from './data.js';
import { renderingMiniatures } from './miniatures-mini.js';
import './miniatures-full.js';
import './upload.js';
import './validate.js';
// import './scale.js';
// import './slider.js';

const descriptionData = similarPost();
renderingMiniatures(descriptionData);

export {descriptionData};
