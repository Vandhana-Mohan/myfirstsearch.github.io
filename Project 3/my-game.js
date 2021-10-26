let randNum = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const infoTxt = document.getElementById("infoTxt");
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const guessTally = document.getElementById("guessTally");
const highScore = document.getElementById("high-score");
const reset = document.getElementById("resetGame");
const pastGuess = document.getElementById("pastGuesses");

let score = 0
var guessCount = 10;
var guessArray = [];
let resetButton;

console.log(randNum)
guessTally.innerHTML = "Your Current Guesses: " + guessCount;
infoTxt.innerHTML = "Input a number 1-100 to guess!  Good luck!";
highScore.innerHTML = "0";

function checkGuess() {
    let userGuess = Number(guessField.value);
    reset.disabled = true;
        if (isNaN(userGuess) || userGuess > 100 || userGuess < 0) {
            alert(`Please enter a NUMBER 1-100`);
        }
        else if (guessArray.includes(userGuess)) {
            infoTxt.innerHTML = "Input a new number";
        }
        else if (userGuess === randNum) {
            console.log("YOU WIN");
            infoTxt.innerHTML = "You Win!";
            guessTally.innerHTML = 'Your Current Guesses: ' + guessCount;
            document.body.style.backgroundColor = "lightpink";
            if (score < guessCount) {
                score = guessCount
                highScore.innerHTML = score;
            }
            guessField.disabled = true;
            guessSubmit.disabled = true;
            reset.disabled = false;
            reset.value = "New Game";
        }
        else if (userGuess > randNum) {
            console.log("Sorry, too high");
            infoTxt.innerHTML = "Your guess is too high!";
            guessTally.innerHTML = `You have ${guessCount} guesses left!`;
            guessArray += userGuess +  ', ';
            pastGuess.innerHTML= `Your previous guesses: ${guessArray}`;
            checkCount();
        }
        else if (userGuess < randNum) {
            console.log("Sorry, too low");
            infoTxt.innerHTML = "Your guess is too low!";
            guessCount -= 1;
            guessTally.innerHTML = `You have ${guessCount} guesses left!`;
            guessArray += userGuess + ', ';
            pastGuess.innerHTML= `Your previous guesses: ${guessArray}`;
            console.log(guessArray);
            checkCount();
        }
    }

function decrease(guessCount, userGuess, guessArray){
    guessCount -= 1;
    guessTally.innerHTML = 'Your Current Guesses: ' + guessCount;
    guessArray += userGuess + ' ';
    pastGuess.innerHTML= guessArray;
}
function checkCount() {
    if (guessCount === 0) {
        console.log("sorry game over")
        infoTxt.innerHTML = "Game Over!";
        guessTally.innerHTML = guessCount;
        guessField.disabled = true;
        guessSubmit.disabled = true;
        reset.disabled = false;
    }
}
function resetGame() {
    guessCount = 10;
    guessTally.innerHTML = guessCount;
    let randNum = Math.floor(Math.random() * 100) + 1;
    guessArray = ' ';
    guessField.value = '';
    reset.value = "Reset";
    guessField.disabled = false;
    guessSubmit.disabled = false;
}
function gameOver() {
    let randNum = Math.floor(Math.random() * 100) + 1;
}

reset.addEventListener('click', resetGame);
guessSubmit.addEventListener('click', checkGuess);