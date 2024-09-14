let randomNumber = Math.floor(Math.random() * 2000) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');

guessInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    checkGuess();
  }
});

function checkGuess() {
  const guess = Number(guessInput.value);
  const feedback = document.getElementById('feedback');
  const attemptsText = document.getElementById('attempts');
  const hintText = document.getElementById('hint');
  
  attempts++;
  
  if (guess === randomNumber) {
    feedback.textContent = `🎉 Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts!`;
    feedback.style.color = 'lightgreen';
    hintText.textContent = ''; 
  } else if (guess < randomNumber) {
    feedback.textContent = '📉 Too low! Try again.';
    feedback.style.color = 'red';
    giveHint(guess);
  } else if (guess > randomNumber) {
    feedback.textContent = '📈 Too high! Try again.';
    feedback.style.color = 'red';
    giveHint(guess);
  }

  attemptsText.textContent = `Attempts: ${attempts}`;
  guessInput.value = '';
}

function giveHint(guess) {
  const hintText = document.getElementById('hint');
  const range = Math.abs(randomNumber - guess);
  
  if (range <= 10) {
    hintText.textContent = '🔥 You are very close!';
  } else if (range <= 20) {
    hintText.textContent = '🌡️ You are close!';
  } else {
    hintText.textContent = '❄️ You are far from the correct number.';
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('feedback').textContent = '';
  document.getElementById('attempts').textContent = '';
  document.getElementById('hint').textContent = '';
  guessInput.value = '';
}

function validateInput() {
  const input = guessInput.value;
  guessInput.value = input.replace(/[^0-9]/g, '');
}
