const colors = ["green", "red", "rgba(133,122,200)", "#f15020"];

const button = document.getElementById("btn");

const showColor = document.querySelector(".color");

/*let getColor = () => {
  const randomNumber = Math.floor(Math.random() * 4);
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  showColor.textContent = colors[randomNumber];
};*/

button.addEventListener("click", getColor);

function getColor() {
  const randomNumber = Math.floor(Math.random() * 4);
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  showColor.textContent = colors[randomNumber];
}
