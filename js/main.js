import { renderingMiniatures } from './miniatures-mini.js';
import { renderingBigMiniatures } from './miniatures-full.js';
import { showAlert } from './util.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { onCloseForm } from './upload.js';
import { setOnFormSubmit, unblockSubmitButton } from './validate.js';
import './scale.js';
import './slider.js';
import { sendData, getData } from './api.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    onCloseForm();
    unblockSubmitButton();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  renderingMiniatures(data);
  renderingBigMiniatures(data);
} catch (err) {
  showAlert(err.message);
}
