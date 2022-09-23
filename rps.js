function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 3);
    
    let choice;
    if (ranNum === 0) {
        choice = "Rock";
    } else if (ranNum === 1) {
        choice = "Paper";
    } else {
        choice = "Scissors"
    }
    return choice;
}

