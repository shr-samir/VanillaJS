// ------------------------------------ For hex.html -----------------------------------

const setHexBtn = document.querySelector('#bgColorBtn');
const displayHex = document.querySelector('#displayBgColor');
const main = document.querySelector('.main');

setHexBtn.addEventListener('click', () => {
  const hexCode = hexGenerator();
  setHexBtn.style.backgroundColor = hexCode;
  displayHex.textContent = hexCode;
  displayHex.style.color = hexCode;
  main.style.backgroundColor = hexCode;
});

function hexGenerator() {
  const hex = '0123456789ABCDEF';
  let hexCode = '#';
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * hex.length);
    hexCode += hex[index];
  }
  return hexCode;
}
