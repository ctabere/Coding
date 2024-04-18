// jquery
$(document).ready(function(){
  $(".grid").children().each(function(){  //  selecting the children of the grid div, so all the cells are children
      var x; // tried var, let, and const
      var y;

      x = parseInt($(this).attr("id").substring(0,1)); // converting the grid sting into integers
      y = parseInt($(this).attr("id").substring(1));
      // border of 3x3 cells
      if (y == 2 || y == 5){
        $(this).css("border-right-width", "10px"); // thicken border in css for the board to take shape
      }
      if (x == 2 || x == 5){
        $(this).css("border-bottom-width", "10px");
      }
    });
});
