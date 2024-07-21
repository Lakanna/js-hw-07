function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");

const span = document.querySelector(".color");

btn.addEventListener("click", handlerClick);

function handlerClick(ev) {
  const bodyColor = getRandomHexColor();

  document.body.style.backgroundColor = bodyColor;
  span.textContent = bodyColor;
}
