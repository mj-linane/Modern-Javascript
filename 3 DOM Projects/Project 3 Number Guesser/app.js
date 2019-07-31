/* eslint-disable no-useless-concat */
/* eslint-disable comma-dangle */
/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
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

console.log(winningNum);

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

// Play again event listener
// Need to add in a if true check to make sure that the element
// loads before we put a addEventListener on it
UIgame.addEventListener('click', function (e){
  
}

// Listen for guess
UIguessButton.addEventListener('click', function () {
  const guess = parseInt(UIguessInput.value, 10);

  // Validate to make sure it goes in between the min and max
  // Use function isNaN() to check if it is a not a number
  if (isNaN(guess) || guess < min || guess > max) {
    // Add warning text and form
    UImessage.classList.add('uk-text-danger');
    UIguessInput.classList.add('uk-form-danger');
    setMessage(`Please enter a number between ${min} and ${max}`);


  // Check guess if correct
  } else if (guess === winningNum) {
    // Game over - won
    gameOver(true, `${guess} is correct, YOU WIN!`);
  } else {
    // Wrong number, subtract 1
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      // Game over - lost
      gameOver(false, `You have lost, the correct number was ${winningNum}`);
    } else {
      // Game continues - answer wrong
      // Add warning text color
      UImessage.classList.remove('uk-text-success');
      UImessage.classList.add('uk-text-danger');
      // Add warning text color
      UIguessInput.classList.remove('uk-form-success');
      UIguessInput.classList.add('uk-form-danger');

      // Clear input
      UIguessInput.value = '';
      // Tell user its the wront number
      setMessage(
        `${guess} was not correct, you have ${guessesLeft} guesses remaining.`
      );
    }
  }
});

// Game Over
function gameOver(won, message) {
  if (won === true) {
    // Add green text color
    UImessage.classList.remove('uk-text-danger');
    UImessage.classList.add('uk-text-success');
    // Add green form color
    UIguessInput.classList.remove('uk-form-danger');
    UIguessInput.classList.add('uk-form-success');
  } else {
    // Add warning text color
    UImessage.classList.remove('uk-text-success');
    UImessage.classList.add('uk-text-danger');
    // Add warning text color
    UIguessInput.classList.remove('uk-form-success');
    UIguessInput.classList.add('uk-form-danger');
  }
  // Disable input
  UIguessInput.disabled = true;

  // Display message to user
  setMessage(message);

  // Set submit button to 'play again'
  UIguessButton.value = 'Play Again';
  UIguessButton.className += ' ' + 'play-again';
}

// Set Message
function setMessage(displayMessage) {
  UImessage.textContent = displayMessage;
}

// Get random winning number
function getRandomInt(maxnum) {
  return Math.floor(Math.random() * Math.floor(maxnum) + 1);
}
