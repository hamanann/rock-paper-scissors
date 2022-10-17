const resultMessage = document.querySelector('.results .message');
const score = document.querySelector('.results .score');
score.textContent = "0 - 0";
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

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


const buttons = document.querySelectorAll('.containerRPS button');
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        playRound(btn.id, getComputerChoice());
    });
});