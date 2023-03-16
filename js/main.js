import { similarPost } from './data.js';
import { renderingMiniatures } from './miniatures-mini.js';
import './miniatures-full.js';

// const data = similarPost;
// renderingFullPictures(data);
// renderingMiniatures();

const descriptionData = similarPost();
renderingMiniatures(descriptionData);

export {descriptionData};
