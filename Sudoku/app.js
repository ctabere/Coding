function isValid(grid, r, c, k) { // function takes 4 parameters
  const notInRow = !grid[r].includes(k); //checks if k is not already present in the row 'r' of grid
  const notInColumn = ![...Array(9).keys()].map(i => grid[i][c]).includes(k); // this creates an array to represent a column by mapping each     // row index 'i' to the value at column 'c' in that row on the game board (grid).  This took me a while to understand.
  // let's break it down further to be sure: 
  // ![...Array(9).keys()] - this part sets up a range '...' in an array 'Array' 1-9 '(9)' with a key value pair 'keys()'
  // .map(i => grid[i][c]).includes(k); - here we map (apply function to each element in array) the key value pair to the row index 'i' (this        will be values from grid)
  // essentially, we're creating an array with 9 values and passing values from the row index into 'c' so it can be used in the function  
  const notInBox = 
    ![...Array(3).keys()].flatMap(i => // flatMap is like map, but it also 'flattens' the results into a new array
     [...Array(3).keys()].map(j => grid[Math.floor(r / 3) * 3 + i][Math.floor(c / 3) * 3 + j])).includes(k);
     return notInRow && notInColumn && notInBox;
}

function highlightCell() {
  if(style.background == "red") {
    document.getElementById("00").style.background = "grey";
  }
  else {
    document.getElementById("00").style.background = "red";
  }
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

solve(grid);
console.log(grid.map(row => row.join(' ')).join('\n'));



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
     // console.log(x, y)
    }
  });

  for(const x = 0; x < 9 ; x++){
    for(const y = 0; y < 9; y++){
      if(grid[x][y] != 0){
       const id = '#'+x+y;
       $(id).html(grid[x][y]);
       $(id).attr('data-original', 'true');
       $(id).css('font-weight', 'bold');
      }
    }
  }

  const oldCell = null;
  const newCell;

  $(".cell").click(function(){
    newCell = $(this);
    if(newCell.attr("data-original") === "true"){
      if(oldCell != null){
        oldCell.css("background-color", "white");
    })
  });

});

