const pScore = document.getElementsByClassName('pScore');
const cScore = document.getElementsByClassName('cScore');
const drawScore = document.getElementsByClassName('drawScore');
const cChoice = document.getElementsByClassName('c-selection');
const outcome = document.getElementsByClassName('outcome');

let pCounter = 0;
let cCounter = 0;
let drawCounter = 0;

const rock = document.getElementsByClassName('rock-btn');
rock[0].addEventListener('click', () => {
    playerSelection = "rock"
    playRound();
});

const paper = document.getElementsByClassName('paper-btn');
paper[0].addEventListener('click', () => {
    playerSelection = "paper";
    playRound();
});

const scissors = document.getElementsByClassName('scissors-btn');
scissors[0].addEventListener('click', () => {
    playerSelection = "scissors";
    playRound();
});

const playAgain = document.getElementsByClassName('play-again');
playAgain[0].addEventListener('click', () => {
    restartGame();
});


function computerSelection() {
    let randomNumber = Math.floor(Math.random()*(3)); //random number between 0 and 2 for array selection in computerSelection
    let choices = ['rock', 'paper', 'scissors']; 
    let computerPlay = choices[randomNumber]; //selects item from array
    return computerPlay;
}

function scoreReset() {
    pCounter = 0;
    cCounter = 0;
    drawCounter = 0;
}

function buttonDisable() {
    rock[0].disabled = true;
    paper[0].disabled = true;
    scissors[0].disabled = true;
}

function restartGame() {
    scoreReset();
    outcome[0].textContent = '';
    rock[0].disabled = false;
    paper[0].disabled = false;
    scissors[0].disabled = false;
}



function playRound() {
    if (playerSelection === "scissors") {
        if (computerSelection() === "paper") {
            pCounter++;
            cChoice[0].textContent = "The computer chose paper, you win.";
        }
        else if (computerSelection() === "rock") {
            cCounter++;
            cChoice[0].textContent = "The computer chose rock, you lose.";
        }
        else {
            drawCounter++;
            cChoice[0].textContent = "The computer chose scissors, it's a draw.";
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection() === "paper") {
            drawCounter++;
            cChoice[0].textContent = "The computer chose paper, it's a draw.";
        }
        else if (computerSelection() === "rock") {
            pCounter++;
            cChoice[0].textContent = "The computer chose rock, you win.";
        }
        else {
            cCounter++;
            cChoice[0].textContent = "The computer chose scissors, you lose.";
        }
    }

    if (playerSelection === "rock") {
        if (computerSelection() === "paper") {
            cCounter++;
            cChoice[0].textContent = "The computer chose paper, you lose.";
        }
        else if (computerSelection() === "rock") {
            drawCounter++;
            cChoice[0].textContent = "The computer chose rock, it's a draw.";
        }
        else {
            pCounter++;
            cChoice[0].textContent = "The computer chose scissors, you win.";
        }
    }

    if (pCounter === 5) {
        outcome[0].textContent = "Game over, you win.";
        outcome[0].style.color = "green";
        cChoice[0].textContent = "";
        scoreReset();
        buttonDisable();
    }

    if (cCounter === 5) {
        outcome[0].textContent = "Game over, you lose.";
        outcome[0].style.color = "red";
        cChoice[0].textContent = "";
        scoreReset();
        buttonDisable();
    }

pScore[0].textContent = `${pCounter}`;
cScore[0].textContent = `${cCounter}`;
drawScore[0].textContent = `${drawCounter}`;

}