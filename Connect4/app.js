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

const invisRow = document.querySelectorAll('.square:nth-child(-n+7)')
console.log(invisRow);

// possibly use array.fill(value, start, end) to reset game board //
