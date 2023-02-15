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
    let result;
    if (playerSelection === "" || playerSelection === null) {
        result = "Canceled";
    } else if (playerSelection === computerSelection) {
        result = "tie";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "lose";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "win";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "win";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "lose";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "win";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "lose";
    } else {
        result = "Please choose from the available options.";
    }

    // console.log(`Player selection: ${playerSelection}`);
    // console.log(`Computer selection: ${computerSelection}`);
    // console.log(`Result: ${result}`);
    return result;
}
// Play Rock, Paper, Scissors! for 5 rounds and log the winner to the console.

function game() {
   let playerScore = 0;
   let computerScore = 0;
   let winner;
   let outcome; 
   for (let i = 0; i < 5; i++) {
    outcome = playRound(getPlayerChoice(), getComputerChoice());

    if (outcome === "lose") {
        computerScore += 1;
        console.log(`Computer Wins`);
        console.log(`Computer: ${computerScore}`);
        console.log(`Player: ${playerScore}`);
    } else if (outcome === "win") {
        playerScore += 1;
        console.log(`Player Wins`);
        console.log(`Computer: ${computerScore}`);
        console.log(`Player: ${playerScore}`);
    } else if (outcome === "tie") {
        console.log(`Tie`);
        console.log(`Computer: ${computerScore}`);
        console.log(`Player: ${playerScore}`);
    } else {
        console.log(outcome);
    }
   }

   winner = getWinner(playerScore, computerScore);
   console.log(winner);
}

// Calculate winner for game() function.

function getWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return `Player Wins: ${playerScore} - ${computerScore}`;
    } else if (playerScore < computerScore) {
        return `Computer Wins: ${computerScore} - ${playerScore}`;
    } else {
        return `Tie Game: ${computerScore} - ${playerScore}`
    }
}
game();


