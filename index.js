// const buttons = document.querySelectorAll("button");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");

const roundResult = document.querySelector(".round-result");

const rockButton = document.querySelector(".rock-btn");
const paperButton = document.querySelector(".paper-btn");
const scissorsButton = document.querySelector(".scissors-btn");

let playerNum = 0;
let computerNum = 0;

function computerPlay() {
  let choices = ["Rock", "Paper", "Scissors"];
  let randomChoice = Math.floor(Math.random() * choices.length);
  console.log(choices[randomChoice]);
  return choices[randomChoice];
}

// Creates Reset Button that appears after 5 rounds
const content = document.createElement("button");
content.classList.add("reset-button");
content.textContent = "Play Again!";
content.addEventListener("click", () => {
  location.reload();
});

rockButton.addEventListener("click", () => {
  let computerChoice = computerPlay();
  if (playerNum < 5 && computerNum < 5) {
    if (rockButton.textContent === computerChoice) {
      roundResult.textContent = "Its a Tie!";
    } else if (computerChoice === "Paper") {
      roundResult.textContent = "You Lose! Paper beats Rock.";
      computerNum++;
      computerScore.textContent = computerNum.toString();
    } else if (computerChoice === "Scissors") {
      roundResult.textContent = "You Win! Rock beats Scissors.";
      playerNum++;
      playerScore.textContent = playerNum.toString();
    }
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

paperButton.addEventListener("click", () => {
  let computerChoice = computerPlay();
  if (playerNum < 5 && computerNum < 5) {
    if (paperButton.textContent === computerChoice) {
      roundResult.textContent = "Its a Tie!";
    } else if (computerChoice === "Rock") {
      roundResult.textContent = "You Win! Paper beats Rock.";
      playerNum++;
      playerScore.textContent = playerNum.toString();
    } else if (computerChoice === "Scissors") {
      roundResult.textContent = "You Lose! Scissors beats Paper.";
      computerNum++;
      computerScore.textContent = computerNum.toString();
    }
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

scissorsButton.addEventListener("click", () => {
  let computerChoice = computerPlay();
  if (playerNum < 5 && computerNum < 5) {
    if (scissorsButton.textContent === computerChoice) {
      roundResult.textContent = "Its a Tie!";
    } else if (computerChoice === "Paper") {
      roundResult.textContent = "You Win! Scissors beats Paper.";
      playerNum++;
      playerScore.textContent = playerNum.toString();
    } else if (computerChoice === "Rock") {
      roundResult.textContent = "You Lose! Rock beats Scissors.";
      computerNum++;
      computerScore.textContent = computerNum.toString();
    }
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
