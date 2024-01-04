function getComputerChoice() {

    let compChoice; 

    choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1) {
      compChoice = "Rock";
    }

    else if (choice === 2) {
      compChoice = 'Paper';
    }

    else {
      compChoice = 'Scissors';
    }

    return compChoice;
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        console.log("It's a tie!!!");
        return 0
    }

    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log("You win! Paper beats Rock.");
        return 1
    }

    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log("You lose! Scissors beats Paper.");
        return 2
    }

    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log("You win! Rock beats Scissors.");
        return 1
    }

    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log("You lose! Paper beats Rock.");
        return 2
    }

    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log("You lose! Rock beats Scissors");
        return 2
    }

    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log("You win! Scissors beats Paper.");
        return 1
    }
}

function game() {
    
    let playerScore = 0;
    let compScore = 0;

    console.log("Let's play a little game of Rock Paper Scissors!")

    for (let i = 0; i < 5; i++) {

        let choice = prompt('Make your choice: ');

        let round = playRound(choice, getComputerChoice());

        if (round === 1) {
        playerScore ++;
        }

        else if (round === 2) {
        compScore ++;
        }

    }

    console.log("-Score-");
    console.log("Player: " + playerScore);
    console.log("Computer: " + compScore);

    if (playerScore > compScore) {
        console.log("Player wins!!");
    }

    else if(playerScore < compScore) {
        console.log("Computer wins!!");
    }

    else {
        console.log("It's a tie!")
    }

}

game()
