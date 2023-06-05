  

const computerOutput = () => {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "Rock";
    case 1:
      return "Scissors";
    case 2:
      return "Paper";
    default:
      return null;
  }
};

const playerChoiceSelected = new Event("myevent");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerChoice = document.querySelector("#player-choice");
const computerChoice = document.querySelector("#computer-choice");

const resultContainer = document.querySelector("#results-computer");
resultContainer.style.cssText = "border: 3px black dotted;";

// Keeping the score
const playerScoreElement = document.querySelector("#playerscore span");
const computerScoreElement = document.querySelector("#computerscore span");

let playerScore = 0;
let computerScore = 0;

function updateScore() {
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    console.log("draw");
  } else if (
    (playerChoice === "Rock" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Rock")
  ) {
    console.log("loss");
    computerScore++;
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Rock")
  ) {
    console.log("win");
    playerScore++;
  } else {
    return undefined;
  }

  updateScore();
}

rock.addEventListener("click", () => {
  playerChoice.textContent = "Rock";
  const computerSelection = computerOutput();
  computerChoice.textContent = computerSelection;
  playRound(playerChoice.textContent, computerChoice.textContent);
});

paper.addEventListener("click", () => {
  playerChoice.textContent = "Paper";
  const computerSelection = computerOutput();
  computerChoice.textContent = computerSelection;
  playRound(playerChoice.textContent, computerChoice.textContent);
});

scissors.addEventListener("click", () => {
  playerChoice.textContent = "Scissors";
  const computerSelection = computerOutput();
  computerChoice.textContent = computerSelection;
  playRound(playerChoice.textContent, computerChoice.textContent);
});
