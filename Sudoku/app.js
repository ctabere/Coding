function isValid(grid, r, c, k) {
  // function takes 4 parameters
  const notInRow = !grid[r].includes(k); //checks if k is not already present in r array
  const notInColumn = ![...Array(9).keys()].map((i) => grid[i][c]).includes(k); // this creates an array to represent a column by mapping each     // row index 'i' to the value at column 'c' in that row on the game board (grid).  
  // let's break it down further to be sure:
  // ![...Array(9).keys()] - this part sets up a range '...' in an array 'Array' 1-9 '(9)' with a key value pair 'keys()'
  // .map(i => grid[i][c]).includes(k); - here we map (apply function to each element in array) the key value pair to the row index 'i' (this        will be values from grid)
  // essentially, we're creating an array with 9 values and passing values from the row index into 'c' so it can be used in the function
  const notInBox = ![...Array(3).keys()]
    .flatMap(
      (
        i // flatMap is like map, but it also 'flattens' the results into a new array
      ) =>
        [...Array(3).keys()].map(
          (j) => grid[Math.floor(r / 3) * 3 + i][Math.floor(c / 3) * 3 + j]
        )
    )
    .includes(k);
  return notInRow && notInColumn && notInBox;
}

function solve(grid, r = 0, c = 0) {
  if (r === 9) {
    return true;
  } else if (c === 9) {
    return solve(grid, r + 1, 0);
  } else if (grid[r][c] !== 0) {
    return solve(grid, r, c + 1);
  } else {
    for (let k = 1; k <= 9; k++) {
      if (isValid(grid, r, c, k)) {
        grid[r][c] = k;
        if (solve(grid, r, c + 1)) {
          return true;
        }
        grid[r][c] = 0;
      }
    }
    return false;
  }
}

const grid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];





solve(grid);
console.log(grid.map((row) => row.join(" ")).join("\n"));

$(document).ready(function () {
  $(".grid")
    .children()
    .each(function () {
      //  selecting the children of the grid div, so all the cells are children
      let x; // tried var, let, and const
      let y;

      x = parseInt($(this).attr("id").substring(0, 1)); // converting the grid sting into integers
      y = parseInt($(this).attr("id").substring(1));
      // border of 3x3 cells
      if (y == 2 || y == 5) {
        $(this).css("border-right-width", 8); // thicken border in css for the board to take shape
      }
      if (x == 2 || x == 5) {
        $(this).css("border-bottom-width", 8);
        // console.log(x, y)
      }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".numpad-btn");
  const cells = document.getElementsByClassName("cell");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      const userInput = button; // Get the inner text of the button as user input
      const selectedCell = document.querySelector(".active-cell"); // Get the currently active cell
      console.log(button.innerText);
      if (selectedCell) {
        const [row, col] = selectedCell.id.split("-").map(Number); // Split the ID to get row and column indices
        if (userInput >= 1 && userInput <= 9) {
          // Ensure the input is valid
          grid[row][col] = parseInt(userInput); // Update the grid with the user input
          selectedCell.innerText = userInput; // Update the cell's text content
        }
      }
    });
  });

  // Add event listener to each cell
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function (event) {
      // Remove active class from all cells
      for (let j = 0; j < cells.length; j++) {
        cells[j].classList.remove("active-cell");
      }

      // Add active class to the clicked cell
      event.target.classList.add("active-cell");
    });
  }
});
let activeDiv = null;
const cell = document.querySelectorAll(".cell");
cell.forEach((div) => {
  div.addEventListener("click", function () {
    console.log(div);

    // Need to add something here possibly - right now just logging the html
  });
});

// inputDiv.addEventListener("click", function () {
//   inputDiv.focus();
// });

let selectedDiv = null;
const cells = document.getElementsByClassName("cell");
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function (event) {
    selectedDiv = event.target.id;
    const cellColor = document.getElementById(selectedDiv);
    console.log("selectedDiv:", selectedDiv);
    if (cellColor.style.backgroundColor === "grey") {
      cellColor.style.backgroundColor = "white";
    } else {
      cellColor.style.backgroundColor = "grey";
    }
    // document.getElementById(selectedDiv).style.backgroundColor = "grey";
  });
}
