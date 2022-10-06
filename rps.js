const buttonRock = document.querySelector("#Rock");
const buttonPaper = document.querySelector("#Paper");
const buttonScissors = document.querySelector("#Scissors");

const playerScoreIndicator = document.querySelector("#your_score_indicator");
const computerScoreIndicator = document.querySelector("#computer_score_indicator");

const container = document.querySelector("#container");
const roundResult = document.createElement("div");

let playerScore = 0;
let computerScore = 0;

buttonRock.addEventListener("click", () => {
    let result = playRound("Rock", getComputerChoice());
    if (result === "win") {
        playerScore++;
        playerScoreIndicator.textContent = playerScore;
    } else if (result === "lose") {
        computerScore++;
        computerScoreIndicator.textContent = computerScore;
    }    
});

buttonPaper.addEventListener("click", () => {
    let result = playRound("Paper", getComputerChoice());
    if (result === "win") {
        playerScore++;
        playerScoreIndicator.textContent = playerScore;
    } else if (result === "lose") {
        computerScore++;
        computerScoreIndicator.textContent = computerScore;
    }    
});

buttonScissors.addEventListener("click", () => {
    let result = playRound("Scissors", getComputerChoice());
    if (result === "win") {
        playerScore++;
        playerScoreIndicator.textContent = playerScore;
    } else if (result === "lose") {
        computerScore++;
        computerScoreIndicator.textContent = computerScore;
    }    
});

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

//Returns win, lose, or tie based on player and computer choices
function playRound(playerSelection, computerSelection) {
    let result;

    if (playerSelection === computerSelection) {
        result = "tie";
        displayRoundResults(result, playerSelection, computerSelection);
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        result = "lose";
        displayRoundResults(result, playerSelection, computerSelection);
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        result = "win";
        displayRoundResults(result, playerSelection, computerSelection);
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        result = "win";
        displayRoundResults(result, playerSelection, computerSelection);
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        result = "lose";
        displayRoundResults(result, playerSelection, computerSelection);
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        result = "win";
        displayRoundResults(result, playerSelection, computerSelection);
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        result = "lose";
        displayRoundResults(result, playerSelection, computerSelection);
    }

    return result;
}

function displayRoundResults(result, pSelection, cSelection) {
    switch(result) {
        case "win":
            roundResult.textContent = `${pSelection} beats ${cSelection}. 
            You win this round!`;
            break;
        case "lose":
            roundResult.textContent = `${pSelection} loses to ${cSelection}. 
            You lose this round!`;
            break;
        case "tie":
            roundResult.textContent = `${pSelection} ties ${cSelection}. 
            You tie this round!`;
            break;
    }
    container.appendChild(roundResult);
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


//game();