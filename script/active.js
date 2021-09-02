let numSquares = 16;

const sketchContainer = document.getElementById("sketch-container");
const controlBox = document.getElementById("control-box");
const clearButton = document.getElementById("clear-button");

createGrid (numSquares);

clearButton.addEventListener("click", clearClick)

function createGrid (numSquares) {
    let squareWidth = Math.floor((sketchContainer.clientWidth - 25) / numSquares);
    for (let i = 0; i < numSquares; i++) {
        for (let i = 0; i < numSquares; i++) {
            createSquare(squareWidth)
        }
    }
    const squares = document.querySelectorAll(".square");
    squares.forEach((e) => {e.addEventListener("mouseenter", () => (e.classList.add("hovered")))})
}
function createSquare (squareWidth) {
    const newSquare = document.createElement('div');
    newSquare.style.width = squareWidth.toString() + "px";
    newSquare.style.height = squareWidth.toString() + "px";
    newSquare.classList.add("square");
    sketchContainer.appendChild(newSquare);
}

function clearClick () {
    const squares = document.querySelectorAll(".square");
    squares.forEach((e) => e.classList.remove("hovered"));
    getNewSquareNumber();
}

function getNewSquareNumber () {
    var newSquares = prompt("What resolution would you prefer? (5-100)", "16");
    var newNumber = parseInt(newSquares);
    if (Number.isInteger(newNumber) && newNumber <= 100) {
        while (sketchContainer.firstChild) {
            sketchContainer.removeChild(sketchContainer.firstChild);
        }
        createGrid(newNumber);
    }
    else {
        alert("Invalid! Please enter a number between 5 & 100!");
        getNewSquareNumber();
    }
}
