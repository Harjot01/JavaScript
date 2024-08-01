const cells = document.querySelectorAll(".cell");
const resetButton = document.getElementById("btn");
const printText = document.getElementById("print");
console.log(cells);
flag = 1;

let board = ["", "", "", "", "", "", "", "", ""];

resetButton.addEventListener("click", (e) => {
  location.reload();
});

printText.innerText = "Player X Turn";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach((cell, index) => {
  cell.addEventListener("click", (e) => {
    handleInput(e, index);
  });
});

function handleInput(e, index) {
  if (flag == 1) {
    e.target.value = "X";
    board[index] = "X";
    printText.innerText = "Player O Turn";
    flag = 0;
  } else {
    e.target.value = "O";
    board[index] = "O";
    printText.innerText = "Player X Turn";
    flag = 1;
  }
  e.target.disabled = true;

  checkWinner();
}

function checkWinner() {
  let winner = null;

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] === board[b] && board[a] === board[c]) {
      winner = board[a];
      break;
    }
  }

  if (winner) {
    printText.innerText = `Player ${winner} won`;
    cells.forEach((cell) => (cell.disabled = true));
    highlightWinner(winner);
  } else {
    // check if all the board cells are filled that means a draw
    let ct = 0;
    for (let bd of board) {
      if (bd === "X" || bd == "O") ct++;
    }

    if (ct == 9) printText.innerText = `Draw between X and O`;
  }
}

function highlightWinner(winner) {
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] === winner && board[b] === winner && board[c] === winner) {
      cells[a].style.color = "green";
      cells[b].style.color = "green";
      cells[c].style.color = "green";
      break;
    }
  }
}
