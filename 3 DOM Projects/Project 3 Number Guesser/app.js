/* eslint-disable no-use-before-define */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-vars */
/*

GAME FUNCTION:
-Player must guess a number between MIN and MAX
-Player gets a certain amount of guesses
-Notify player of guesses remaining
-Notify the player of the correct answer if loose
-Let player choose to play again
*/

// Game values
const min = 1;
const max = 5;
const winningNum = getRandomInt(max);
let guessesLeft = 3;

// UI Elements
const UIgame = document.querySelector('#game');
const UIminNum = document.querySelector('.min-num');
const UImaxNum = document.querySelector('.max-num');
const UIguessButton = document.querySelector('#guess-btn');
const UIguessInput = document.querySelector('#guess-input');
const UImessage = document.querySelector('.message');

// Assign UI Min and Max
UIminNum.textContent = min;
UImaxNum.textContent = max;

// Listen for guess
UIguessButton.addEventListener('click', function () {
  const guess = parseInt(UIguessInput.value, 10);

  // Validate to make sure it goes in between the min and max
  // Use function isNaN() to check if it is a not a number
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(guess) || guess < min || guess > max) {
    // Add warning text and form
    UImessage.classList.add('uk-text-danger');
    UIguessInput.classList.add('uk-form-danger');
    UIguessInput.classList.add('uk-animation-shake');
    setMessage(`Please enter a number between ${min} and ${max}`);
    UIguessInput.classList.remove('uk-animation-shake');

    // Check guess if correct
  } else if (guess === winningNum) {
    // Game over - won
    // Disable input
    UIguessInput.disabled = true;
    // Remove red text
    UImessage.classList.remove('uk-text-danger');
    // Add green text
    UImessage.classList.add('uk-text-success');
    setMessage(`${winningNum} is correct, YOU WIN!`);
  } else {
    // Wrong number, subtract 1
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game over - lost
      // Disable input
      UIguessInput.disabled = true;
      // Add red text & form
      UImessage.classList.add('uk-text-danger');
      UIguessInput.classList.add('uk-text-danger');
      UIguessInput.classList.add('uk-animation-shake');
      setMessage(`You have lost, the correct number was ${winningNum}`);
      UIguessInput.classList.remove('uk-animation-shake');
    } else {
      // Game continues - answer wrong
      // Add warning text color
      UImessage.classList.add('uk-text-danger');
      // Add warning text color
      UIguessInput.classList.add('uk-form-danger');
      // Add warning shake
      UIguessInput.classList.add('uk-animation-shake');
      // Clear input
      UIguessInput.value = '';
      setMessage(
        `${guess} was not correct, you have ${guessesLeft} guesses remaining.`,
      );
      UIguessInput.classList.remove('uk-animation-shake');
    }
  }
});

// Set Message
function setMessage(message) {
  UImessage.textContent = message;
}

// Get random integer
function getRandomInt(maxnum) {
  return Math.floor(Math.random() * Math.floor(maxnum) + 1);
}
