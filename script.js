const initialGridSize = 8;
const initialColor = "black";
const initialTool = "pencil";

let gridSizeText = document.querySelector("[data-sizeText]");
let gridBox = document.querySelector(".area-sketch");
let gridSizeSlider = document.querySelector("#gridSize");
let tools = document.querySelector(".area-tools");
let currentColor = initialColor;

let initialSize = changeGridSize(gridSizeSlider.value);

gridSizeSlider.addEventListener("mousedown", (e) => {
  changeGridSize(e.target.value);
});
let colorSelector = document
  .querySelector("#color")
  .addEventListener("change", (e) => {
    currentColor = e.target.value;
  });
let clearScreen = document
  .querySelector("[data-clear]")
  .addEventListener("click", () => {
    let divs = gridBox.querySelectorAll("div");
    divs.forEach((div) => (div.style.background = "aliceblue"));
  });
let drawPointer = gridBox.addEventListener("mousedown", (e) => {
  e.preventDefault();
  console.log(e.type);
  e.target.style.background = currentColor;
});

let gridToggle = document
  .querySelector("[data-toggle]")
  .addEventListener("click", function () {
    gridBox.classList.toggle("grid-outline");
  });

function changeGridSize(gridSize) {
  gridBox.innerHTML = "";
  gridSizeText.innerHTML = `${gridSize}x${gridSize}`;
  gridBox.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

  for (i = 0; i < gridSize * gridSize; i++) {
    gridBox.innerHTML += `<div></div>`;
  }
}
