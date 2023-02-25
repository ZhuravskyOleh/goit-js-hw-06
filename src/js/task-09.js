const btnEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

btnEl.addEventListener('click', onButtonClick);

function onButtonClick(event) {
  const color = getRandomHexColor()
  document.body.style.backgroundColor = color;
  colorEl.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
