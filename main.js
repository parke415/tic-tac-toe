// application state variables & constants
let board = [];
let turn;
let end;

// cached element references
const msg = document.getElementById('msg');
const cells = document.querySelectorAll('.cell');

// event listeners
document.getElementById('table').addEventListener('click', plotClick);
document.getElementById('replay').addEventListener('click', resetBoard);

// function executions
resetBoard();

// function declarations

function plotClick(event) {
  if (end || event.target.style.backgroundColor !== 'rgb(187, 187, 187)') return;
  if (turn) {
    board[event.target.id] += 1;
    event.target.style.backgroundColor = '#00bbbb';
    turn = !turn;
    msg.textContent = "Red's turn...";
    checkBoard();
  } else {
    board[event.target.id] -= 1;
    event.target.style.backgroundColor = '#bb0000';
    turn = !turn;
    msg.textContent = "Teal's turn...";
    checkBoard();
  }
}

function checkBoard() {
  if ((board[0] > 0 && board[1] > 0 && board[2] > 0) ||
      (board[3] > 0 && board[4] > 0 && board[5] > 0) ||
      (board[6] > 0 && board[7] > 0 && board[8] > 0) ||
      (board[0] > 0 && board[3] > 0 && board[6] > 0) ||
      (board[1] > 0 && board[4] > 0 && board[7] > 0) ||
      (board[2] > 0 && board[5] > 0 && board[8] > 0) ||
      (board[0] > 0 && board[4] > 0 && board[8] > 0) ||
      (board[2] > 0 && board[4] > 0 && board[6] > 0)) {
    end = true;
    msg.textContent = "TEAL WINS!";
  } else if
     ((board[0] < 0 && board[1] < 0 && board[2] < 0) ||
      (board[3] < 0 && board[4] < 0 && board[5] < 0) ||
      (board[6] < 0 && board[7] < 0 && board[8] < 0) ||
      (board[0] < 0 && board[3] < 0 && board[6] < 0) ||
      (board[1] < 0 && board[4] < 0 && board[7] < 0) ||
      (board[2] < 0 && board[5] < 0 && board[8] < 0) ||
      (board[0] < 0 && board[4] < 0 && board[8] < 0) ||
      (board[2] < 0 && board[4] < 0 && board[6] < 0)) {
    end = true;
    msg.textContent = "RED WINS!";
  } else if (!board.includes(0)) {
    end = true;
    msg.textContent = "TIED GAME!";
  } else {
  return;
  }
}

function resetBoard() {
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  cells.forEach(function(cell) {
    cell.style.backgroundColor = '#bbbbbb';
  });
  turn = true;
  msg.textContent = "Teal's turn...";
  end = false;
}