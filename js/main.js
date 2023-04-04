import { renderingMiniatures } from './miniatures-mini.js';
import { renderingBigMiniatures } from './miniatures-full.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { setOnFormSubmit, unblockSubmitButton } from './validate.js';
import { init, getSortedPictures } from './sort.js';
import { sendData, getData } from './api.js';
import { onCloseForm } from './upload.js';
import { showAlert, debounce, TIMEOUT_DELAY } from './util.js';
import './upload-img.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    onCloseForm();
    unblockSubmitButton();
    showSuccessMessage();
  } catch {
    unblockSubmitButton();
    showErrorMessage();
  }
});

try {
  const data = await getData();
  const debouncedRenderGallery = debounce(renderingMiniatures, TIMEOUT_DELAY);
  init(data, debouncedRenderGallery);
  renderingMiniatures(getSortedPictures());
  renderingBigMiniatures(getSortedPictures());
} catch (err) {
  showAlert(err.message);
}
