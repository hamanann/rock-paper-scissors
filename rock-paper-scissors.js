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
    playerSelection = playerSelection.slice(0, 1).toUpperCase() + 
        playerSelection.slice(1).toLowerCase();
    computerSelection = computerSelection.slice(0, 1).toUpperCase() + 
        computerSelection.slice(1).toLowerCase();
    let result;
    if (playerSelection === computerSelection) {
        return "Draw!";
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors'
            || playerSelection === 'Paper' && computerSelection === 'Rock'
            || playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}