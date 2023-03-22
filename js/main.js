import { similarPost } from './data.js';
import { renderingMiniatures } from './miniatures-mini.js';
import './miniatures-full.js';
import './upload.js';

const descriptionData = similarPost();
renderingMiniatures(descriptionData);

export {descriptionData};
