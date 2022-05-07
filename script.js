const initialColor = "black";
const initialTool = "pencil";
let isMouse = false;

let gridSizeText = document.querySelector("[data-sizeText]");
let gridBox = document.querySelector(".area-sketch");
let gridSizeSlider = document.querySelector("#gridSize");
let tools = document.querySelector(".area-tools");
let pencil = document
  .querySelector("[data-pencil]")
  .addEventListener("click", (e) => {
    switchTools(e);
  });
let rainbow = document
  .querySelector("[data-rainbow]")
  .addEventListener("click", (e) => {
    switchTools(e);
  });
let eraser = document.querySelector("[data-eraser]");

let currentColor = initialColor;

document.addEventListener("contextmenu", (e) => e.preventDefault());
let initialSize = changeGridSize(gridSizeSlider.value);

gridSizeSlider.addEventListener("input", (e) => {
  changeGridSize(e.target.value);
});

let colorSelector = document
  .querySelector("#color")
  .addEventListener("change", (e) => {
    currentColor = e.target.value;
    document.querySelector("#color").style.background = e.target.value;
  });
let clearScreen = document
  .querySelector("[data-clear]")
  .addEventListener("click", () => {
    let divs = gridBox.querySelectorAll("div");
    divs.forEach((div) => (div.style.background = "aliceblue"));
  });
// let drawPointer = gridBox.addEventListener("mousedown", (e) => {
//   e.preventDefault();
//   console.log(e.type);
//   e.target.style.background = currentColor;
// });

let drawPointer = gridBox.addEventListener("mousemove", (e) => {
  gridBox.addEventListener("mousedown", () => (isMouse = true));

  gridBox.addEventListener("mouseup", () => (isMouse = false));
  colorDiv(e);
  gridBox.addEventListener("mouseleave", () => (isMouse = false));
});
// let pointerOver = gridBox.addEventListener("mousedown", (e) => {
//   if (e.type == "mousedown") {
//     console.log(e.type);
//     e.target.style.background = currentColor;
//   }
// });
let gridToggle = document
  .querySelector("[data-toggle]")
  .addEventListener("click", function (e) {
    e.target.classList.toggle("toggled");
    gridBox.classList.toggle("grid-outline");
  });
function colorDiv(e) {
  if (isMouse) {
    console.log(e.type);
    e.target.style.background = currentColor;
  }
}
function changeGridSize(gridSize) {
  gridBox.innerHTML = "";
  gridSizeText.innerHTML = `${gridSize}x${gridSize}`;
  gridBox.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

  for (i = 0; i < gridSize * gridSize; i++) {
    gridBox.innerHTML += `<div></div>`;
  }
}
function rGb() {
  let red,
    green,
    blue = Math.floor(Math.random() * 256);
  return `${red},${green},${blue},1`;
}

function switchTools(e) {
  if (e.target) {
    console.log("button clicked");
  }
}
