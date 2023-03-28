import { renderingMiniatures } from './miniatures-mini.js';
import { renderingBigMiniatures } from './miniatures-full.js';
import { showAlert } from './util.js';
// import { showSuccesMessage, showErrorMessage } from './message.js';
import { onCloseForm } from './upload.js';
import { setOnFormSubmit } from './validate.js';
import './scale.js';
import './slider.js';
import { sendData, getData } from './api.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    onCloseForm();
    showSuccesMessage();
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
