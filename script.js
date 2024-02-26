'use strict';

function recordBtnClick(innerHTML, btnID) {
  let btnModalText = document.querySelector(`#${btnID}-modal-text`);
  btnModalText.style.display = 'inline';
}

function closeModalWindow(parentID) {
  let btnModalText = document.querySelector(`#${parentID}`);
  btnModalText.style.display = 'none';
}
