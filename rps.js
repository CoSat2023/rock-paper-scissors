console.log("It's working!");

// Store available values in array
const arr = ["rock", "paper", "scissors"];
// Choose random value from array for computer choice
function getComputerChoice() {
    let computerSelection = arr[Math.floor(Math.random() * arr.length)];
    // console.log(computerSelection);
    return computerSelection;
}
// Prompt user for choice

function getPlayerChoice() {
    let playerSelection = prompt("Rock, Paper, or Scissors? ").toLowerCase();
    // console.log(playerSelection);
    return playerSelection;
}
// Play a round of RPS

function playRound(playerSelection, computerSelection) {
    let winMessage = `Let's go!!! You won. ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`;
    let tieMessage = `Tie game!`;
    let loseMessage = `Oh no, you lost this round. ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`;
    let message
    if (playerSelection === null || playerSelection === undefined) {
        message = "Please enter one of the available values";
    } else if (playerSelection === computerSelection) {
        message = tieMessage;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        message = loseMessage;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        message = winMessage;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        message = winMessage;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        message = loseMessage;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        message = winMessage;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        message = loseMessage;
    }
    // console.log(message);
    return message;
}

function game() {
   let playerScore = 0;
   let computerScore = 0; 

}
game();
// console.log(playRound(getPlayerChoice(),getComputerChoice()));