let number = document.getElementById('number');
let inx = document.getElementById('increase');
let dcx = document.getElementById('decrease');
let reset = document.getElementById('reset');

number.textContent = 0;

inx.addEventListener('click', () => {
  let currentValue = parseInt(number.textContent);
  number.textContent = currentValue + 1;
});

dcx.addEventListener('click', () => {
  currentValue = parseInt(number.textContent);
  number.textContent = currentValue - 1;
});

reset.addEventListener('click', () => {
  number.textContent = 0;
  console.log(typeof number.textContent);
});