
const cells = document.querySelectorAll('.cell');
const turn = document.getElementById('turn');

let board = Array(9).fill(null);
let currentPlayer = 'X';

const winningCombos = [
    [0,1,2],[3,4,5],[6,7,8], // rows
    [0,3,6],[1,4,7],[2,5,8], // cols
    [0,4,8],[2,4,6]          // diagonals
];

function checkWin() {
    return winningCombos.some(([a,b,c]) =>
      board[a] && board[a] === board[b] && board[a] === board[c]
    );
}

function resetGame() {
    board.fill(null);
    cells.forEach(c => c.textContent = '');
    currentPlayer = 'X';
    turn.textContent = "Player X's turn";
}

cells.forEach((cell, i) => cell.onclick = () => {
    if (board[i]) return; // ignore filled cells
    board[i] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWin()) {
      alert(`${currentPlayer} wins!`);
      resetGame();
    } else if (board.every(Boolean)) {
      alert("It's a draw!");
      resetGame();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      turn.textContent = `Player ${currentPlayer}'s turn`;
    }
});

turn.textContent = "Player X's turn";