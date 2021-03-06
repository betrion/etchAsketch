const initialColor = "black";
let isMouse = false;

let currentColor = initialColor;
let gridSizeText = document.querySelector("[data-sizeText]");
let gridBox = document.querySelector(".area-sketch");
let gridSizeSlider = document.querySelector("#gridSize");
let tools = document.querySelector(".area-tools");
let pencil = document.querySelector("[data-pencil]");
let eraser = document.querySelector("[data-eraser]");
let rainbow = document.querySelector("[data-rainbow]");

tools.addEventListener("click", (e) => {
  if (e.target.type === "submit") {
    switchTools(e);
  }
});

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

let drawPointer = gridBox.addEventListener("mousemove", (e) => {
  gridBox.addEventListener("mousedown", () => (isMouse = true));

  gridBox.addEventListener("mouseup", () => (isMouse = false));
  colorDiv(e);
  gridBox.addEventListener("mouseleave", () => (isMouse = false));
});

const gridToggle = document
  .querySelector("[data-toggle]")
  .addEventListener("click", function (e) {
    e.target.classList.toggle("toggled");
    gridBox.classList.toggle("grid-outline");
  });

function colorDiv(e) {
  if (isMouse) {
    console.log(e.type);
    if (rainbow.disabled) {
      e.target.style.background = rGb();
    } else if (eraser.disabled) {
      e.target.style.background = "aliceblue";
    } else {
      e.target.style.background = currentColor;
    }
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
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);

  let blue = Math.floor(Math.random() * 256);
  return `rgba(${red},${green},${blue},1)`;
}

function switchTools(e) {
  console.log(e.target.getAttribute("id"));
  if (e.target.getAttribute("id") === "pencil") {
    e.target.classList.add("toggled");
    e.target.disabled = true;
    rainbow.disabled = false;
    rainbow.classList.remove("toggled");
    eraser.disabled = false;
    eraser.classList.remove("toggled");
  } else if (e.target.getAttribute("id") === "rainbow") {
    e.target.classList.add("toggled");
    e.target.disabled = true;
    pencil.disabled = false;
    pencil.classList.remove("toggled");
    eraser.disabled = false;
    eraser.classList.remove("toggled");
  } else if (e.target.getAttribute("id") === "eraser") {
    e.target.classList.add("toggled");
    e.target.disabled = true;
    pencil.disabled = false;
    pencil.classList.remove("toggled");
    rainbow.disabled = false;
    rainbow.classList.remove("toggled");
  }
}
