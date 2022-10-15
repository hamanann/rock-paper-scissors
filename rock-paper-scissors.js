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
        console.log("Draw!");
        return "Draw!";
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors'
            || playerSelection === 'Paper' && computerSelection === 'Rock'
            || playerSelection === 'Scissors' && computerSelection === 'Paper') {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return `Win`;
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return `Lose`;
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function game() {
    let scoreComputer = 0;
    let scorePlayer = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Chose: rock, paper or scissors");
        let result = playRound(playerChoice, getComputerChoice());
        if (result === "Win") {
            scorePlayer++;
        } else if (result === "Lose") {
            scoreComputer++;
        }
    }
}

game();