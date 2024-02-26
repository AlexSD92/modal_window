'use strict';

const buttons = document.querySelectorAll('.modal-btn');
const modalBtnContainer = document.querySelector('.modal-btn-container');
const modalTextContainer = document.querySelector('.modal-text-container');

function recordBtnClick(innerHTML, btnID) {
  let btnModalText = document.querySelector(`#${btnID}-modal-text`);
  modalTextContainer.style.display = 'block';
  btnModalText.style.display = 'inline';
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
  modalBtnContainer.style.filter = 'blur(2px)';
}

function closeModalWindow(parentID) {
  let btnModalText = document.querySelector(`#${parentID}`);
  modalTextContainer.style.display = 'none';
  btnModalText.style.display = 'none';
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
  modalBtnContainer.style.filter = 'none';
}
