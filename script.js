'use strict';

function recordBtnClick(innerHTML, btnID) {
  let btnModalText = document.querySelector(`#${btnID}-modal-text`);
  btnModalText.style.display = 'inline';
}
