const buttonRock = document.querySelector("#Rock");
const buttonPaper = document.querySelector("#Paper");
const buttonScissors = document.querySelector("#Scissors");

const playerScoreIndicator = document.querySelector("#your_score_indicator");
const computerScoreIndicator = document.querySelector("#computer_score_indicator");

const container = document.querySelector("#container");
const roundResult = document.createElement("div");
const gameResult = document.createElement("div");

let playerScore = 0;
let computerScore = 0;

buttonRock.addEventListener("click", () => {
    let result = playRound("Rock", getComputerChoice());
    incrementScore(result);
    checkScore(playerScore, computerScore); 
});

buttonPaper.addEventListener("click", () => {
    let result = playRound("Paper", getComputerChoice());
    incrementScore(result);
    checkScore(playerScore, computerScore); 
});

buttonScissors.addEventListener("click", () => {
    let result = playRound("Scissors", getComputerChoice());
    incrementScore(result);
    checkScore(playerScore, computerScore); 
});

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
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        result = "lose";
        displayRoundResults(result, playerSelection, computerSelection);
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        result = "win";
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

function incrementScore(result) {
    if (result === "win") {
        playerScore++;
        playerScoreIndicator.textContent = playerScore;
    } else if (result === "lose") {
        computerScore++;
        computerScoreIndicator.textContent = computerScore;
    }
}

function checkScore(playerScore, computerScore) {
    if (playerScore === 5) {
        gameResult.textContent = "You're first to 5. You win the game!"
        container.appendChild(gameResult);
        buttonRock.disabled = true;
        buttonPaper.disabled = true;
        buttonScissors.disabled = true;
    } else if (computerScore === 5) {
        gameResult.textContent = "The computer is first to 5. You lose the game!"
        container.appendChild(gameResult);
        buttonRock.disabled = true;
        buttonPaper.disabled = true;
        buttonScissors.disabled = true;
    }
}