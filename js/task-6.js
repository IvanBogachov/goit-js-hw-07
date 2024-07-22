const input = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destrButton = document.querySelector("[data-destroy]");

const boxContainer = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  boxContainer.innerHTML = "";

  let size = 30;
  let boxesHTML = "";
  for (let i = 0; i < amount; i++) {
    boxesHTML += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
    size += 10;
  }
  boxContainer.innerHTML = boxesHTML;
}

function destrBoxes() {
  boxContainer.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

destrButton.addEventListener("click", destrBoxes);
