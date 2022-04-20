const colors = ["green", "red", "rgba(133,122,200), #f15020"];

const button = document.getElementById("btn");

const showColor = document.querySelector("color");

button.addEventListener(click, function () {
  //get random number between 0-3
  const randomNumber = Math.floor(Math.random() * 4);
  document.body.style.backgroundColor = colors[randomNumber];
  colors.textContent = colors[randomNumber];
});
