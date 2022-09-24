//Randomizes computer choice to rock, paper, or scissors
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

function getPlayerChoice() {

    while (true) {
        let choice = prompt("Please enter 'rock', 'paper', or 'scissors'");

        //Make player input case-insensitive
        choice = choice.toLowerCase();
        choice = choice.charAt(0).toUpperCase() + choice.slice(1);

        if (choice === "Rock" || choice === "Paper" || choice === "Scissors" ) {
            return choice;
            break;
        }
    }
}

//Returns win, lose, or tie based on player and computer choices
function playRound(playerSelection, computerSelection) {
    let result;

    if (playerSelection === computerSelection) {
        result = "tie";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        result = "lose";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        result = "win";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        result = "win";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        result = "lose";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        result = "win";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        result = "lose";
    }

    return result;
}

//Plays game 5 times. Declares winner of each round and overall winner at the end
function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;

    for (let i = 0; i < 5; i++) {
        
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        if (playRound(playerSelection, computerSelection) === "win") {
            console.log(`You win this round! ${playerSelection} beats ${computerSelection}`);
            playerWinCount ++;
        } else if (playRound(playerSelection, computerSelection) === "lose") {
            console.log(`You lose this round! ${computerSelection} beats ${playerSelection}`);
            computerWinCount ++;
        } else {
            console.log(`You tie this round! ${playerSelection} ties ${computerSelection}`);
        }

    }

    if (playerWinCount > computerWinCount) {
        console.log("You won the game!")
    } else if (playerWinCount < computerWinCount) {
        console.log("You lost the game!")
    } else {
        console.log("Tie! Nobody wins.")
    }
}


game();