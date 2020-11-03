// application state variables & constants
const board = [];
let turn;
let end;

// event listeners
document.getElementById('table').addEventListener('click', plotClick);
document.getElementById('replay').addEventListener('click', resetBoard);

// cached element references
const msg = document.getElementById('msg');
const cells = document.querySelectorAll('.cell');

// function declarations

function plotClick(event) {
  if (end || event.target.style.backgroundColor !== '#bbbbbb') return;
  if (turn) {
    board[event.target.id] += 1;
    checkBoard();
    turn = !turn;
    return event.target.style.backgroundColor = '#00bbbb';
  } else {
    board[event.target.id] -= 1;
    checkBoard();
    turn = !turn;
    return event.target.style.backgroundColor = '#bb0000';
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
    msg.textContent = "CYAN WINS!";
  };
  if ((board[0] < 0 && board[1] < 0 && board[2] < 0) ||
      (board[3] < 0 && board[4] < 0 && board[5] < 0) ||
      (board[6] < 0 && board[7] < 0 && board[8] < 0) ||
      (board[0] < 0 && board[3] < 0 && board[6] < 0) ||
      (board[1] < 0 && board[4] < 0 && board[7] < 0) ||
      (board[2] < 0 && board[5] < 0 && board[8] < 0) ||
      (board[0] < 0 && board[4] < 0 && board[8] < 0) ||
      (board[2] < 0 && board[4] < 0 && board[6] < 0)) {
    end = true;
    msg.textContent = "RED WINS!";
  };
  if (!board.includes(0)) {
    end = true;
    msg.textContent = "IT'S A DRAW!";
  }
  return;
}

function resetBoard() {
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  cells.forEach(function(cell) {
    cell.style.backgroundColor = '#bbbbbb';
  });
  turn = true;
  end = false;
  msg.textContent = "GOOD LUCK!"
}

// function executions
resetBoard();