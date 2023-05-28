function computerOutput() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
    case 1:
      return "scissors";
    case 2:
      return "paper";
    default:
      return null;
  }
}

function jankenpon(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "DRAW";
  } else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    return `LOSS: ${computerChoice} beats ${userChoice}`;
  } else if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'scissors' && computerChoice === 'paper') || (userChoice === 'paper' && computerChoice === 'rock')) {
      return `WIN: ${userChoice} beats ${computerChoice}`;
  } else return 'Please put in a valid answer'
}

let computerChoice = computerOutput();
let userChoice = prompt("Rock, Paper or Scissors? (lowercase only)");

console.log(jankenpon(userChoice, computerChoice))
