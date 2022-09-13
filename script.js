'use strict';
// let paragraph = document.querySelector(".message").innerHTML = "Typing...";

// let randomNumber = document.querySelector(".number");
// randomNumber.textContent = 25

//let score = document.querySelector(".score");

// let userInput = document.querySelector(".guess");

// console.log(userInput.value)

///HANDING CLICK EVENTS

let score = 20;
let highScore = 0;
const winsound = document.querySelector('.winsound');
const failsound = document.querySelector('.failsound');
const losesound = document.querySelector('.losesound');

//console.log(highScore);

let randomSecretNumber = Math.round(Math.random() * 20 + 1);

document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);
  if (!guessedNumber) {
    document.querySelector('.message').textContent = '🔴 No Number';
  } else if (guessedNumber > 20) {
    document.querySelector('.message').textContent = ' Input Erorr';
  }
  ///User input correct Number
  else if (guessedNumber === randomSecretNumber) {
    document.querySelector('.message').textContent = 'You are corret';
    score++;
    document.querySelector('.result').style.display = 'none';
    winsound.play();

    highScore += 5;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomSecretNumber;
    document.querySelector('.guess').value = '';
    document.querySelector('.reveal').style.display = 'none';
    document.querySelector('.reveal').textContent = 'Reveal Answer!';
  } else if (guessedNumber > randomSecretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high';
      document.querySelector('.result').textContent = `${randomSecretNumber}`;
      score--;
      document.querySelector('.score').textContent = score;
      randomSecretNumber = Math.round(Math.random() * 20 + 1);
      // document.querySelector('.number').textContent = randomSecretNumber;
      document.querySelector('.result').style.display = 'block';
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.guess').value = '';
      document.querySelector('.number').textContent = '?';
        document.querySelector('.reveal').style.display = ' block';
        document.querySelector('.reveal').textContent = 'Reveal Answer!';
      failsound.play();
    } else {
      document.querySelector('.message').textContent = ' You lost the Game';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.guess').value = '';
      document.querySelector('.reveal').style.display = 'none';
      losesound.play();
    }
  } else if (guessedNumber < randomSecretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low';
      document.querySelector('.result').textContent = randomSecretNumber;
      score--;
      document.querySelector('.score').textContent = score;
      randomSecretNumber = Math.round(Math.random() * 20 + 1);
      document.querySelector('.number').textContent = randomSecretNumber;
      document.querySelector('.result').style.display = 'block';
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.guess').value = '';
      document.querySelector('.number').textContent = '?';
        document.querySelector('.reveal').style.display = ' block';
        document.querySelector('.reveal').textContent = 'Reveal Answer!';
      failsound.play();
    } else {
      document.querySelector('.message').textContent = ' You lost the Game';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.guess').value = '';
      document.querySelector('.reveal').style.display = 'none';
      losesound.play();
    }
  } else {
    document.querySelector('.message').textContent = ' You lost the Game';
    document.querySelector('body').style.backgroundColor = 'red';
     document.querySelector('.reveal').style.display = 'none';
    losesound.play();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  randomSecretNumber = Math.round(Math.random() * 20 + 1);
  //document.querySelector('.number').textContent = randomSecretNumber;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.result').style.display = 'none';
  document.querySelector('.reveal').style.display = 'none';
  document.querySelector('.reveal').textContent = 'Reveal Answer!';
});

document.querySelector('.reveal').addEventListener('click', function () {
  document.querySelector('.number').textContent = randomSecretNumber;
  document.querySelector('.reveal').textContent = 'Minus 2 scores';
  score -= 2;
  document.querySelector('.score').textContent = score;
});
