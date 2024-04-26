
// Different strategies:
// skyscraper pattern
// backtracking
// simple elimination - crossing out like numbers in rows/columns/blocks || "houses"
// hidden single - only candidate left in house
// hidden/naked pairs/triplets/quads - x/y cell x2 and eliminate all other candidates not == x || y
// intersection (point pairs & point triplets)
// x-wing - when x/y cells form a square
// x-cycles
// 3d medusa
// coloring (single chain) - for when you have 2 candidates in a house, they form a strong link, weak links are formed with more than 2 candidates, all possible links 
// forms a chain


// Function to check if placing a number 'k' at position (r, c) in the grid is valid
// function isValid(grid, r, c, k) {
//   // Check if 'k' is not present in the same row
//   const notInRow = !grid[r].includes(k);
//   // Check if 'k' is not present in the same column
//   const notInColumn = ![...Array(9).keys()].map(i => grid[i][c]).includes(k);
//   // Check if 'k' is not present in the 3x3 box that contains (r, c)
//   const notInBox = ![...Array(3).keys()].flatMap(i =>
//       [...Array(3).keys()].map(j => grid[Math.floor(r / 3) * 3 + i][Math.floor(c / 3) * 3 + j])
//   ).includes(k);
//   // Return true if 'k' is valid for the position (r, c), false otherwise
//   return notInRow && notInColumn && notInBox;
// }

// // Function to solve the Sudoku puzzle using backtracking
// function solve(grid, r = 0, c = 0) {
//   // Base case: if all rows are filled (r = 9), return true
//   if (r === 9) {
//       return true;
//   // If all columns in the current row are filled, move to the next row
//   } else if (c === 9) {
//       return solve(grid, r + 1, 0);
//   // If the current cell is already filled, move to the next column
//   } else if (grid[r][c] !== 0) {
//       return solve(grid, r, c + 1);
//   } else {
//       // Try placing numbers from 1 to 9 in the current cell
//       for (let k = 1; k <= 9; k++) {
//           // If placing 'k' at position (r, c) is valid, proceed
//           if (isValid(grid, r, c, k)) {
//               // Place 'k' in the current cell
//               grid[r][c] = k;
//               // Recursively solve the puzzle for the next cell
//               if (solve(grid, r, c + 1)) {
//                   // If the puzzle is solved, return true
//                   return true;
//               }
//               // If the current configuration doesn't lead to a solution, backtrack
//               grid[r][c] = 0;
//           }
//       }
//       // If no valid number can be placed in the current cell, backtrack
//       return false;
//   }
// }

// Initial Sudoku grid
const grid = [
  [0, 0, 0, 5, 0, 0, 0, 6, 0],
  [0, 8, 0, 0, 3, 2, 0, 0, 0],
  [0, 1, 9, 7, 0, 0, 0, 0, 8],
  [5, 0, 8, 4, 0, 0, 0, 0, 0],
  [0, 4, 0, 0, 1, 0, 0, 0, 7],
  [0, 0, 0, 6, 8, 3, 0, 5, 0],
  [0, 2, 0, 0, 7, 0, 3, 4, 0],
  [0, 0, 0, 0, 0, 0, 7, 0, 6],
  [0, 7, 0, 2, 5, 0, 8, 0, 1]
];

// Solve the Sudoku puzzle
solve(grid);

// Print the solved Sudoku grid
console.log(grid.map(row => row.join(' ')).join('\n'));


function highlightCell(){
  document.getElementsByClassName("cell").style.background == "red";
}


$(document).ready(function(){
  $(".grid").children().each(function(){  //  selecting the children of the grid div, so all the cells are children
      let x; // tried var, let, and const
      let y;

      x = parseInt($(this).attr("id").substring(0,1)); // converting the grid sting into integers
      y = parseInt($(this).attr("id").substring(1));
      // border of 3x3 cells
      if (y == 2 || y == 5){
        $(this).css("border-right-width", 8); // thicken border in css for the board to take shape
      }
      if (x == 2 || x == 5){
        $(this).css("border-bottom-width", 8);
        console.log(x, y)
      }
    });
});

const grid = [
    [1,2,3,0,0,0,0,0,0]
    [4,5,6,0,0,0,0,0,0]
    [7,8,9,0,0,0,0,0,0]
    [0,0,0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0,0,0]
]

// isValid( type=string, value=any, min_or_pattern=any, max=any ); - returns boolean

// create loop to set the game values by checking to see if y value is greater than 1
// if not, replace with value from grid
// use r and c for coordinates on the grid (row & column)

// MAKE THIS STRICTLY ABOUT THE SOLVER, NOT A PLAYBLE GAME
// To Do:
// 1) if cell is clicked, allow for user input, highlight cell, store value on mouse off or state change
// 2) create button to check for answers
// 3) once user data is stored/grid is updated, button press initiates function to check for answers


