import { ModalHandler } from "./modal.js";


const formModal = new ModalHandler('form-modal');

const formButton = document.getElementById('form-button');

if (formButton) {
  formButton.addEventListener('click', () => { formModal.showModal() });
}
