// small game board

let grid = [
    [0,0,0]
    [0,0,0]
    [0,0,0]
]

// the solver will have to find the missing values
// puzzles can be 

functrion isValid(grid, r, c, k) {
    const notInRow = !grid[r].includes(k);
}