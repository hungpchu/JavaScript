/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guess
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI Elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign the UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener("mousedown", (e) => {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener("click", () => {
  let guess = parseInt(guessInput.value);
  // Validate input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter the number between ${min} and ${max}`, "red");
    return;
  }

  // Check if won
  if (guess === winningNum) {
    // Game over - Won
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    // Wrong number
    guessesLeft--;
    if (guessesLeft) {
      // Game continue - answer wrong

      // Change border color
      guessInput.style.borderColor = "red";

      // Clear the input
      guessInput.value = "";

      // Tell the user it is the wrong number
      setMessage(`${guess} is not correct. ${guessesLeft} guesses left`, "red");
    } else {
      // Game over - Lost
      gameOver(
        false,
        `Game Over, you lost. The correct number was ${winningNum}`
      );
    }
  }
});

// Game over
function gameOver(won, msg) {
  const color = won ? "green" : "red";
  // Disable input
  guessInput.disabled = won;
  // Change border color
  guessInput.style.borderColor = color;
  // Set message
  setMessage(msg, color);

  // Play again
  guessBtn.value = "Play Again";
  // since the class was added after the page load
  // then need to use event delegation
  guessBtn.className += "play-again";
}

// Get Winning Number
// hoisting = function will put to the top
function getRandomNum() {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
