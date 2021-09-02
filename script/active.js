let numSquares = 100;

const sketchContainer = document.getElementById("sketch-container")
const controlBox = document.getElementById("control-box")
let squareWidth = Math.floor((sketchContainer.clientWidth - 25) / numSquares);
console.log(sketchContainer.clientWidth / numSquares)

createGrid (numSquares);

const squares = document.querySelectorAll(".square");
squares.forEach((e) => {e.addEventListener("mouseenter", () => (e.classList.add("hovered")))})

function createGrid (numSquares) {
    for (let i = 0; i < numSquares; i++) {
        for (let i = 0; i < numSquares; i++) {
            createSquare()
        }
    }
}
function createSquare () {
    const newSquare = document.createElement('div');
    newSquare.style.width = squareWidth.toString() + "px";
    newSquare.style.height = squareWidth.toString() + "px";
    newSquare.classList.add("square");
    sketchContainer.appendChild(newSquare);
}