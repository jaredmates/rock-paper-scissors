function computerPlay() {
  let choices = ["Rock", "Paper", "Scissors"];
  let randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a Tie!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper";
  } else {
    return "Invalid input. Try again.";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let selection = prompt("Please input Rock, Paper, or Scissors: ");
    let roundResult = playRound(selection, computerPlay());
    if (roundResult.includes("Win!")) {
      playerScore++;
      console.log(roundResult);
      console.log(
        `Player Score: ${playerScore}, Computer Score: ${computerScore}`
      );
    } else if (roundResult.includes("Lose!")) {
      computerScore++;
      console.log(roundResult);
      console.log(
        `Player Score: ${playerScore}, Computer Score: ${computerScore}`
      );
    } else if (roundResult === "It's a Tie!") {
      console.log(roundResult);
      console.log(
        `Player Score: ${playerScore}, Computer Score: ${computerScore}`
      );
    } else {
      console.log(roundResult);
    }
  }
  if (playerScore > computerScore) {
    console.log("You Win!");
  } else if (playerScore < computerScore) {
    console.log("You Lose!");
  } else {
    console.log("Its a Tie!");
  }
}

// console.log(playRound("ROCK", computerPlay()));
console.log(game());
