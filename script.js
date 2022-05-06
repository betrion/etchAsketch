const initialGridSize = 8;
const initialColor = "black";
let initialSize;
let currentColor = initialColor;

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
let gridBox = document.querySelector(".area-sketch");
let drawPointer = gridBox.addEventListener("click", (e) => {
  e.target.style.background = currentColor;
});

let gridToggle = document
  .querySelector("[data-toggle]")
  .addEventListener("click", function () {
    gridBox.classList.toggle("grid-outline");
  });
