'use strict';

const buttons = document.querySelectorAll('.modal-btn');
const modalBtnContainer = document.querySelector('.modal-btn-container');

function recordBtnClick(innerHTML, btnID) {
  let btnModalText = document.querySelector(`#${btnID}-modal-text`);
  btnModalText.style.display = 'inline';
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.display = 'none';
  }
  modalBtnContainer.style.filter = 'blur(2px)';
}

function closeModalWindow(parentID) {
  let btnModalText = document.querySelector(`#${parentID}`);
  btnModalText.style.display = 'none';
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.display = 'inline';
  }
  modalBtnContainer.style.filter = 'none';
}
