const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
console.log(hex);
const button = document.getElementById("btn");

const showColor = document.querySelector(".color");

button.addEventListener("click", getHex);
function getHex() {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()]; //+= adds numbers eg #0, #0B,
    console.log(hexColor);
  }

  showColor.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
}
function getRandomNumber() {
  return Math.floor(Math.random() * 16);
}
