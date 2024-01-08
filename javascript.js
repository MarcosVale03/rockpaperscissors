let playerScore = 0;
let compScore = 0;
const container1 = document.querySelector('#resultContainer');
const container2 = document.querySelector('#scoreContainer');

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

    container2.innerHTML = "";


    if (playerSelection === computerSelection) {
        container1.innerHTML = "It's a tie!!";
    }

    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        container1.innerHTML = "You win! Paper beats Rock.";
        playerScore += 1;
    }

    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        container1.innerHTML = "You lose! Scissors beats Paper.";
        compScore += 1;
    
    }

    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        container1.innerHTML = "You win! Rock beats Scissors.";
        playerScore += 1;
        
    }

    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        container1.innerHTML = "You lose! Paper beats Rock.";
        compScore += 1;
        
    }

    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        container1.innerHTML = "You lose! Rock beats Scissors";
        compScore += 1;
        
    }

    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        container1.innerHTML = "You win! Scissors beats Paper.";
        playerScore += 1;
        
    }

    container2.innerHTML += "-Score-";
    container2.innerHTML += "<br>Player: " + playerScore;
    container2.innerHTML += "<br>Computer: " + compScore;
}

// UI

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  button.addEventListener('click', () => {

    playRound(button.id, getComputerChoice());

    if (playerScore === 5) {
        container2.innerHTML = '';
        container1.innerHTML = 'Congrats, you win!!';
    }

    else if (compScore === 5) {
        container2.innerHTML = '';
        container1.innerHTML = 'You lost! Better luck next time.'
    }
    
  });
});
