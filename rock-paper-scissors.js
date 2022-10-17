const resultMessage = document.querySelector('.results .message');


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
    
    if (playerSelection === computerSelection) {
        resultMessage.textContent = "Draw";
        return "Draw";
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors'
            || playerSelection === 'Paper' && computerSelection === 'Rock'
            || playerSelection === 'Scissors' && computerSelection === 'Paper') {
        resultMessage.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        return `Win`;
    } else {
        resultMessage.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        return `Lose`;
    }
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

// function game() {
//     let scoreComputer = 0;
//     let scorePlayer = 0;
//     for (let i = 0; i < 5; i++) {
//         let playerChoice = prompt("Chose: rock, paper or scissors");
//         let result = playRound(playerChoice, getComputerChoice());
//         if (result === "Win") {
//             scorePlayer++;
//         } else if (result === "Lose") {
//             scoreComputer++;
//         }
//     }
// }

// game();