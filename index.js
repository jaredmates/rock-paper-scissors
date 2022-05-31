const images = document.querySelectorAll(".image");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const roundResult = document.querySelector(".round-result");
const finalRoundResult = document.querySelector(".final-round-result");
const modal = document.getElementById("myModal");

let playerNum = 0;
let computerNum = 0;

// Creates Reset Button that appears after 5 rounds
const content = document.querySelector(".close");
content.addEventListener("click", () => {
  location.reload();
});

images.forEach((image) => {
  image.addEventListener("click", () => {
    let computerChoice = computerPlay();
    let selection = capitalize(image.dataset.image);
    console.log(selection);
    if (playerNum < 5 && computerNum < 5) {
      playRound(selection, computerChoice);
    } else {
      if (playerNum > computerNum) {
        finalRoundResult.textContent = "You Win! ";
        finalRoundResult.append(content);
        modal.style.display = "block";
      } else {
        finalRoundResult.textContent = "You Lose! ";
        finalRoundResult.append(content);
        modal.style.display = "block";
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

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
