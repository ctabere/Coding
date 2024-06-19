document.addEventListener("DOMContentLoaded", () => {
    const pieces = document.querySelectorAll(".game-buttons");
    const columns = document.querySelectorAll(".column");
    const ROWS = 6;
    const COLS = 7;
    const board = Array.from({ length: ROWS },() => Array(COLS).fill(null));
});