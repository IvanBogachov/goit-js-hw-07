function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChange = document.querySelector(".change-color");

const changeColor = () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  document.querySelector(".color").textContent = newColor;
};

buttonChange.addEventListener("click", changeColor);