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

let results = {
  playerScore: 0,
  computerScore: 0,
};

function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    console.log(
      `DRAW: ${userChoice} is equal to ${computerChoice} ... End result: `
    );
  } else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log(`LOSS: ${computerChoice} beats ${userChoice} ... End result: `);
    return results.computerScore++;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(`WIN: ${userChoice} beats ${computerChoice} ... End result: `);
    return results.playerScore++;
  } else return console.log("Please put in a valid answer");
}

function game() {
  for (let i = 1; i <= 5; ++i) {
    let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    let computerChoice = computerOutput().toLowerCase();
    playRound(playerChoice, computerChoice);
    console.log(results);
  }
  if (results.computerScore >= results.playerScore) {
    console.log("C'mon! Try again and beat the computer!");
  } else console.log("Good job! You are a master at Jan-Ken-Pon!");
}

console.log(game());
