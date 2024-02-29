'use strict';

const buttons = document.querySelectorAll('.modal-btn');
const modalBtnContainer = document.querySelector('.modal-btn-container');
const modalTextContainer = document.querySelector('.modal-text-container');
const blurContainer = document.querySelector('.blur');
let btnModalText;

function recordBtnClick(btnID) {
  btnModalText = document.querySelector(`#${btnID}-modal-text`);
  btnModalText.classList.remove('hidden');
  blurContainer.classList.remove('hidden');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}

function closeModalWindow(parentID) {
  btnModalText = document.querySelector(`#${parentID}`);
  btnModalText.classList.add('hidden');
  blurContainer.classList.add('hidden');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
}

document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (key === 'Escape') {
    closeModalWindow(btnModalText.id);
  }
});

document.addEventListener('click', (event) => {
  if (event.target === blurContainer) {
    closeModalWindow(btnModalText.id);
  }
});
