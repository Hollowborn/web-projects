// For changing and such
const col = document.querySelectorAll(".col");
const resetButton = document.getElementById("reset");
const currentMoveText = document.getElementById("current_move");

// Modal elements

const infoModal = document.getElementById("infoModal");
const closeModalButton = document.getElementById("closeModal");

// Modal text
const modalHeading = document.getElementById("dialogHeading");
const modalContent = document.getElementById("dialogContent");

closeModalButton.addEventListener("click", () => {
  infoModal.close();
});

let counter = 0;
let moves = ["X", "O"];
let currentMove = "X";
let prevMove = "Y";
let moveArray = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
col.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (cell.classList.contains("clicked")) {
      // Do nothing for now
    } else {
      if (currentMove == "X") {
        cell.textContent = currentMove;
        currentMove = moves[1];
        prevMove = moves[0];
        moveArray[Math.floor(index / 3)][index % 3] = 1;
      } else {
        cell.textContent = currentMove;
        currentMove = moves[0];
        prevMove = moves[1];
        moveArray[Math.floor(index / 3)][index % 3] = -1;
      }

      if (checkWinner()) {
        displayMessage("Player " + prevMove + " won!");
      }

      cell.classList.add("clicked");
      //   Check if winnder winner, chicken dinner

      currentMoveText.textContent = "Current move: " + currentMove;
      counter++;
    }

    if (counter == 9) {
      displayMessage("Draw!", "Click the button below to restart.");
    }
  });
});

resetButton.addEventListener("click", () => {
  resetTiles();
});

function resetTiles() {
  col.forEach((cell) => {
    cell.textContent = ``;
    cell.classList.remove("clicked");
    currentMoveText.textContent = "Current move: X";
  });
  counter = 0;
}

function displayMessage(heading, content) {
  modalHeading.textContent = heading;
  modalContent.textContent = content;

  infoModal.showModal();
}

function checkWinner() {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (
      moveArray[i][0] !== 0 &&
      moveArray[i][0] === moveArray[i][1] &&
      moveArray[i][1] === moveArray[i][2]
    ) {
      return true;
    }
  }

  // Check columns
  for (let j = 0; j < 3; j++) {
    if (
      moveArray[0][j] !== 0 &&
      moveArray[0][j] === moveArray[1][j] &&
      moveArray[1][j] === moveArray[2][j]
    ) {
      return true;
    }
  }

  // Check main diagonal
  if (
    moveArray[0][0] !== 0 &&
    moveArray[0][0] === moveArray[1][1] &&
    moveArray[1][1] === moveArray[2][2]
  ) {
    return true;
  }

  // Check anti-diagonal
  if (
    moveArray[0][2] !== 0 &&
    moveArray[0][2] === moveArray[1][1] &&
    moveArray[1][1] === moveArray[2][0]
  ) {
    return true;
  }

  return false; // No winner yet
}
