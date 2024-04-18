// jquery
$(document).ready(function () {
  $(".grid")
    .children()
    .each(function () {
      var x;
      var y;
      x = parseInt($(this).attr("id").substring(0, 1));
      y = parseInt($(this).attr("id").substring(1));
      // border of 3x3 cells
      if (y == 2 || y == 5){
        $(this).css("border-right-width", 10);
      }
      if (x == 2 || x == 5){
        $(this).css("border-bottom-width", 10);
      }
    });
});
