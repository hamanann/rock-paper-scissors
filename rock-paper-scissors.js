const resultMessage = document.querySelector('.results .message');
const score = document.querySelector('.results .score');
// const resultsContainer = document.querySelector('.results');
const buttons = document.querySelectorAll('.buttons button');
const restartButton = document.querySelector('.restartButton');
let scorePlayer = 0;
let scoreBot = 0;

function getComputerChoice() {
    let choice = Math.random() * 3;
    if (choice < 1) {
        return 'Rock';
    } else if (choice < 2) {
        return 'Paper'
    } else {
        return 'Scissors';
    }
}


function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);
    
    let result;
    if (playerSelection === computerSelection) {
        result = "Draw";
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors'
            || playerSelection === 'Paper' && computerSelection === 'Rock'
            || playerSelection === 'Scissors' && computerSelection === 'Paper') {
        scorePlayer++;
        result = `Win`;
    } else {
        scoreBot++;
        result = `Lose`;
    }

    displayResults(result, playerSelection, computerSelection);
    if (scorePlayer === 5 || scoreBot === 5) {
        endGame();
    }
}

function displayResults(result, playerSelection, computerSelection) {
    if (result === 'Draw') {
        resultMessage.textContent = `Draw`;
    } else if (result === 'Win') {
        resultMessage.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        resultMessage.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    score.textContent = `${scorePlayer} - ${scoreBot}`;
}

function endGame() {
    if (scorePlayer === 5) {
        resultMessage.textContent = 'You won';
    } else {
        resultMessage.textContent = 'You lost';
    }

    toggleButtons();
}

function restartGame() {
    scorePlayer = 0;
    scoreBot = 0;
    score.textContent = `${scorePlayer} - ${scoreBot}`;
    resultMessage.textContent = "First to 5 wins!";
    toggleButtons();
}

function toggleButtons() {
    if (restartButton.classList.contains('hidden')) {
        buttons.forEach(button => button.disabled = true);
        restartButton.classList.remove('hidden');
    } else {
        buttons.forEach(button => button.disabled = false);
        restartButton.classList.add("hidden");
    }
    
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        playRound(btn.id, getComputerChoice());
    });
});

restartButton.addEventListener('click', () => restartGame());