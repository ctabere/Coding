document.addEventListener('DOMContentLoaded', () => {
    const pieces = document.querySelectorAll('.piece')
    const columns = document.querySelectorAll('.game-buttons')
  
    // Add cells to each column
    columns.forEach(column => {
      for (let i = 0; i < 6; i++) {
        // Assuming a 6-row grid
        const cell = document.createElement('div')
        cell.classList.add('cell')
        column.appendChild(cell)
      }
    })})