function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 3);
    
    let choice;
    if (ranNum === 0) {
        choice = "Rock";
    } else if (ranNum === 1) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    let winningMessage;

    if (playerSelection === computerSelection) {
        winningMessage = `Tie! ${playerSelection} ties ${computerSelection}`;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        winningMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        winningMessage = `You win! ${playerSelection} beats ${computerSelection}`;
    }

    return winningMessage;
}

const playerSelection = "ROCK";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));