const buttons = document.querySelectorAll("button");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const roundResult = document.querySelector(".round-result");

let playerNum = 0;
let computerNum = 0;

// Creates Reset Button that appears after 5 rounds
const content = document.createElement("button");
content.classList.add("reset-button");
content.textContent = "Play Again!";
content.addEventListener("click", () => {
  location.reload();
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let computerChoice = computerPlay();
    let selection = button.textContent;
    if (playerNum < 5 && computerNum < 5) {
      playRound(selection, computerChoice);
    } else {
      if (playerNum > computerNum) {
        roundResult.textContent = "You Win!";
        roundResult.append(content);
      } else {
        roundResult.textContent = "You Lose!";
        roundResult.append(content);
      }
    }
  });
});

function computerPlay() {
  let choices = ["Rock", "Paper", "Scissors"];
  let randomChoice = Math.floor(Math.random() * choices.length);
  console.log(choices[randomChoice]);
  return choices[randomChoice];
}

function increaseComputerScore() {
  computerNum++;
  computerScore.textContent = computerNum.toString();
}

function increasePlayerScore() {
  playerNum++;
  playerScore.textContent = playerNum.toString();
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a Tie!";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    roundResult.textContent = "You Lose! Paper beats Rock.";
    increaseComputerScore();
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    roundResult.textContent = "You Win! Paper beats Rock.";
    increasePlayerScore();
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    roundResult.textContent = "You Lose! Rock beats Scissors.";
    increaseComputerScore();
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    roundResult.textContent = "You Win! Rock beats Scissors.";
    increasePlayerScore();
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    roundResult.textContent = "You Lose! Scissors beats Paper.";
    increaseComputerScore();
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    roundResult.textContent = "You Win! Scissors beats Paper.";
    increasePlayerScore();
  }
}
