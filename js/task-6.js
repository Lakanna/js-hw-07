function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");

const btnCreate = document.querySelector("[data-create]");

const btnDestroy = document.querySelector("[data-destroy]");

const box = document.querySelector("#boxes");


input.addEventListener("input", handlerInput);

let amount = 0;

function handlerInput(ev) {
  amount = ev.target.value;
}

btnCreate.addEventListener("click", handlerCreate);

btnDestroy.addEventListener("click", destroyBoxes);

function handlerCreate() {
  if (amount < 1 || amount > 100) {
    alert("Input value from 1 to 100");
    input.value = "";
    return;
  }
  box.innerHTML = createBoxes(amount);
  input.value = "";
}

function createBoxes(amount) {
  let arr = [];

  let width = 30;
  for (let i = 1; i <= amount; i += 1) {
    let color = getRandomHexColor();
    arr.push(
      `<div style="width:${width}px; height:${width}px; background-color: ${color}; margin: 3px"></div>`
    );
    width += 30;
  }
  return arr.join("");
}

function destroyBoxes() {
  box.innerHTML = "";
}
