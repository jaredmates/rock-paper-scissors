let choices = ["Rock", "Paper", "Scissors"];

function computerPlay(arr) {
  let randomChoice = Math.floor(Math.random() * arr.length);
  return arr[randomChoice];
}

console.log(computerPlay(choices));
console.log(computerPlay(choices));
console.log(computerPlay(choices));
console.log(computerPlay(choices));
console.log(computerPlay(choices));
console.log(computerPlay(choices));
