'use strict';

const buttons = document.querySelectorAll('.modal-btn');
const modalBtnContainer = document.querySelector('.modal-btn-container');
const modalTextContainer = document.querySelector('.modal-text-container');
let btnModalText;

function recordBtnClick(btnID) {
  btnModalText = document.querySelector(`#${btnID}-modal-text`);
  btnModalText.classList.remove('hidden');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
  modalBtnContainer.style.filter = 'blur(2px)';
}

function closeModalWindow(parentID) {
  btnModalText = document.querySelector(`#${parentID}`);
  btnModalText.classList.add('hidden');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
  modalBtnContainer.style.filter = 'none';
}

document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (key === 'Escape') {
    closeModalWindow(btnModalText.id);
  }
});
