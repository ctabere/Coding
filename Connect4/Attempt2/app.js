document.addEventListener("DOMContentLoaded", () => {
  const pieces = document.querySelectorAll(".game-buttons");
  const columns = document.querySelectorAll(".column");

  // Add cells to each column
  columns.forEach((column) => {
    for (let i = 0; i < 6; i++) {
      // Assuming a 6-row grid
      const cell = document.createElement("div");
      cell.classList.add("cell");
      column.appendChild(cell);
    }
  });
  pieces.forEach((piece) => {
    piece.addEventListener("dragstart", dragStart);
  });
  columns.forEach((column) => {
    column.addEventListener("dragover", dragOver);
    column.addEventListener("drop", dropPiece);
  });
  function dragStart(e) {
    e.dataTransfer.setData(
      "piece",
      e.target.classList.contains("red") ? "red" : "black"
    );
  }
  function dragOver (e) {
    e.preventDefault()
  }

  function dropPiece (e) {
    e.preventDefault()
    const pieceColor = e.dataTransfer.getData('piece')
    const column = e.target.closest('.column')
    if (!column) return
    const cells = Array.from(column.querySelectorAll('.cell')) // Cells are in the correct order from top to bottom
    let targetCell = null
    console.log('Column:', column)
    console.log('Cells:', cells)

    for (let i = cells.length - 1; i >= 0; i--) {
      // Iterate from bottom to top
      console.log('Checking cell:', i, cells[i].classList)
      if (
        !cells[i].classList.contains('red') &&
        !cells[i].classList.contains('black')
      ) {
        targetCell = cells[i]
        console.log('Target cell found:', targetCell)
        break
      }
    }

    if (targetCell) {
      animateDrop(targetCell, pieceColor)
    }
  }

  function animateDrop (cell, pieceColor) {
    const piece = document.createElement('div')
    piece.classList.add('piece', pieceColor)
    piece.style.position = 'absolute'
    piece.style.top = '-60px' // Start above the column
    piece.style.left = '0px'

    const column = cell.closest('.column')
    column.appendChild(piece)

    const cellRect = cell.getBoundingClientRect()
    const columnRect = column.getBoundingClientRect()
    const dropHeight = cellRect.top - columnRect.top

    requestAnimationFrame(() => {
      piece.style.transition = 'top 0.5s ease'
      piece.style.top = `${dropHeight}px`

      setTimeout(() => {
        piece.style.position = 'absolute'
        piece.style.top = 'center'
        piece.style.left = 'center'
        cell.appendChild(piece)
        cell.classList.add(pieceColor) // Mark the cell as occupied by this piece color
        cell.removeChild(piece)
      }, 500)
    })
  }
})

