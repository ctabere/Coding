document.addEventListener("DOMContentLoaded", () => {
  const pieces = document.querySelectorAll(".game-buttons");
  const columns = document.querySelectorAll(".column");
  const ROWS = 6;
  const COLS = 7; // Assuming 7 columns for Connect 4

  // Initialize the board as a 2D array
  const board = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
console.log(board);

  // Add cells to each column
  columns.forEach((column, colIndex) => {
    for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = rowIndex;
      cell.dataset.col = colIndex;
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
    e.dataTransfer.setData("piece", e.target.classList.contains("red") ? "red" : "black");
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dropPiece(e) {
    e.preventDefault();
    const pieceColor = e.dataTransfer.getData('piece');
    const column = e.target.closest('.column');
    if (!column) return;
    const cells = Array.from(column.querySelectorAll('.cell'));
    let targetCell = null;

    for (let i = cells.length - 1; i >= 0; i--) {
      if (!cells[i].classList.contains('red') && !cells[i].classList.contains('black')) {
        targetCell = cells[i];
        break;
      }
    }

    if (targetCell) {
      const row = targetCell.dataset.row;
      const col = targetCell.dataset.col;
      board[row][col] = pieceColor;
      animateDrop(targetCell, pieceColor);

      if (checkWin(board, pieceColor, parseInt(row), parseInt(col))) {
        alert(`${pieceColor} wins!`);
      }
    }
  }

  function animateDrop(cell, pieceColor) {
    const piece = document.createElement('div');
    piece.classList.add('piece', pieceColor);
    piece.style.position = 'absolute';
    piece.style.top = '-60px'; 
    piece.style.left = '0px';

    const column = cell.closest('.column');
    column.appendChild(piece);

    const cellRect = cell.getBoundingClientRect();
    const columnRect = column.getBoundingClientRect();
    const dropHeight = cellRect.top - columnRect.top;

    requestAnimationFrame(() => {
      piece.style.transition = 'top 0.5s ease';
      piece.style.top = `${dropHeight}px`;

      setTimeout(() => {
        cell.appendChild(piece);
        cell.classList.add(pieceColor); 
      }, 500);
    });
  }

  function checkWin(board, color, row, col) {
    return checkDirection(board, color, row, col, 1, 0) || // Horizontal
           checkDirection(board, color, row, col, 0, 1) || // Vertical
           checkDirection(board, color, row, col, 1, 1) || // Diagonal /
           checkDirection(board, color, row, col, 1, -1);  // Diagonal \
  }

  function checkDirection(board, color, row, col, rowDir, colDir) {
    let count = 0;
    for (let i = -3; i <= 3; i++) {
      const r = row + i * rowDir;
      const c = col + i * colDir;
      if (r >= 0 && r < ROWS && c >= 0 && c < COLS && board[r][c] === color) {
        count++;
        if (count === 4) return true;
      } else {
        count = 0;
      }
    }
    return false;
  }
});
