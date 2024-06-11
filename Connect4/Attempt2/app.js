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
});
