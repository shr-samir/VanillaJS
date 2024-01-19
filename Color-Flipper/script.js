const setColorBtn = document.querySelector('#bgColorBtn');
const displayBgColor = document.querySelector('#displayBgColor');
const main = document.querySelector('.main');

const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'cyan'];
setColorBtn.addEventListener('click', () => {
  let index = randomColor();
  // console.log(colors.length);
  // console.log(index);
  setColorBtn.style.backgroundColor = colors[index];
  displayBgColor.textContent = colors[index].toUpperCase();
  displayBgColor.style.color = colors[index];
  main.style.backgroundColor = colors[index];
});


function randomColor() {
  return Math.floor(Math.random() * colors.length);
}


