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
    switch (playerSelection)
}