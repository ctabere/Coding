

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
    [0,0,0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0,0,0]
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


