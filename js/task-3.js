const input = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

input.addEventListener("input", inputHandler);

function inputHandler(ev) {
  if (!ev.target.value.trim()) {
    return (output.textContent = "Anonymous");
  }
  output.textContent = ev.target.value.trim();
}
