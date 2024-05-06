// small game board

const grid = [
    [0,0,0]
    [0,0,0]
    [0,0,0]
];

// sudoku game board 9x9

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


// come back and define this validation function
function isValid(grid, r, c, k) {
    const notInRow = !grid[r].includes(k);
}


// for loop to target individual divs in the cell class
// let selectedDiv = null;
// const cells = document.getElementsByClassName('cell');
for (let i = 0; i < cells.length; i++){
  cells[i].addEventListener('click', function(event){
  selectedDiv = event.target.id;
  console.log("selectedDiv:", selectedDiv)
    document.getElementById(selectedDiv).style.backgroundColor = "grey";
    
});
}

let selectedDiv = null; // using let becuase this value is going to change a lot
const cells = document.getElementsByClassName('cell'); // defines cells as a class called cell which holds all of our game board values
for (let i = 0; i < cells.length; i++){ // starting the for loop to increment through 'cells' now that it's defined as an indexed class
    cells[i].addEventListener('click', function(event){ // for 'cells' at 'i' index, listen for click event
    selectedDiv = event.target.id; // pulling back one level, we redeclare selectedDiv as the click event defined in the line above and target each id value
    console.log("selectedDiv:", selectedDiv) // this logs the string "selectedDiv:" and then the value pulled target.id 
      document.getElementById(selectedDiv).style.backgroundColor = "grey";  // since selectedDiv IS a click event, clicks will change css background-color element    
    });
} 