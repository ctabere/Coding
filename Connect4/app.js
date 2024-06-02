const gameboard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");
const startCells = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

let go = "red";
infoDisplay.textContent = "Red goes first";

function createBoard() {
  startCells.forEach((_cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    cellElement.addEventListener("click", addGo);
    gameboard.append(cellElement);
  });
}

createBoard();

function addGo(e) {
  console.log("clicked", e);
  const goDisplay = document.createElement("div");
  goDisplay.classList.add(go);
  e.target.append(goDisplay);
  go = go === "red" ? "black" : "red";
  infoDisplay.textContent = "It is now " + go + "'s turn";
  e.target.removeEventListener("click", addGo);
  checkscore();
}

// all possible win scenarios
function checkscore() {
  const allSquares = document.querySelectorAll(".square");
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Cloning a node copies all of its attributes and their values, including intrinsic (inline) listeners.

  // setting up conditions for red wins and black wins
  winningCombos.forEach((array) => {
    const redWins = array.every((cell) =>
      allSquares[cell].firstChild?.classList.contains("red")
    );
    if (redWins) {
      infoDisplay.textContent = "Red wins!";
      allSquares.forEach((square) =>
        square.replaceWith(square.cloneNode(true))
      );
      return; // Exit the function after a win
    }
  });

  winningCombos.forEach((array) => {
    const blackWins = array.every((cell) =>
      allSquares[cell].firstChild?.classList.contains("black")
    );
    if (blackWins) {
      infoDisplay.textContent = "Black wins!";
      allSquares.forEach((square) =>
        square.replaceWith(square.cloneNode(true))
      );
      return;
    }
  });
}

const dragRed = document.querySelector('.drag-red');
// addEventListener(click );
const dragBlack = document.querySelector('.drag-black');
const dropRow = document.querySelectorAll(".square:nth-child(-n+7)");
// console.log(dropRow);

const dropBox1 = document.querySelector(".square:nth-child(n+1)");
const dropBox2 = document.querySelector(".square:nth-child(n+2)");
const dropBox3 = document.querySelector(".square:nth-child(n+3)");
const dropBox4 = document.querySelector(".square:nth-child(n+4)");
const dropBox5 = document.querySelector(".square:nth-child(n+5)");
const dropBox6 = document.querySelector(".square:nth-child(n+6)");
const dropBox7 = document.querySelector(".square:nth-child(n+7)");
console.log(dropBox1);

const col1 = document.querySelectorAll(".square:nth-child(7n+8)");
const col2 = document.querySelectorAll(".square:nth-child(7n+9)");
const col3 = document.querySelectorAll(".square:nth-child(7n+10)");
const col4 = document.querySelectorAll(".square:nth-child(7n+11)");
const col5 = document.querySelectorAll(".square:nth-child(7n+12)");
const col6 = document.querySelectorAll(".square:nth-child(7n+13)");
const col7 = document.querySelectorAll(".square:nth-child(7n+14)");
console.log(col3);

addEventListener(ondrop, dropBox1);
dragRed.addEventListener('dragstart', handleDragStart);
dragBlack.addEventListener('dragstart', handleDragStart);
dragRed.addEventListener('dragend', handleDragEnd);
dragBlack.addEventListener('dragend', handleDragEnd);

// col1.forEach(col => {
//   col1.addEventListener('ondrop', handleDrop);
// });

// mouseup : .red : .black

function handleDragStart(event) {
  event.dataTransfer.setData('text', event.target.classList[0]); // Set the dragged element's class as data
}

// Function to handle dragend event
function handleDragEnd(event) {
  event.target.style.opacity = '1';
  event.target.append.col1 // Reset opacity to 1
}

// possibly use array.fill(value, start, end) to reset game board //

// we'll need to append on dragDrop or dragEnd //
