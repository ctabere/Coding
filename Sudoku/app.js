
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
// create loop to set the game values by checking to see if y value is greater than 1
// if not, replace with value from grid


// MAKE THIS STRICTLY ABOUT THE SOLVER, NOT A PLAYBLE GAME
// To Do:
// 1) if cell is clicked, allow for user input, highlight cell, store value on mouse off or state change
// 2) create button to check for answers
// 3) once user data is stored/grid is updated, button press initiates function to check for answers


