let playerScore = 0;
let computerScore = 0;
let playerChoice = "";
let compChoice = "";
let playerChose = document.getElementById("player-chose");
let computerChose = document.getElementById("computer-chose");
const buttons = document.querySelectorAll(".button");
let playAgain = document.querySelector(".play-again");
let weapons = document.querySelector(".choice-container");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("I clicked " + button.id);
    playerChoice = button.id;
    playerChose.textContent = String("Player chose: " + button.id);
    playRound();
  });
});

playAgain.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  weapons.classList.remove("hidden");
  playAgain.classList.add("hidden");
  document.querySelector("#result").textContent = "Result: ";
});

// // Prompt the player for an input
// function playerSelection() {
//   let playerChoice = prompt(
//     "Do you choose Rock, Paper, or Scissors"
//   ).toLocaleLowerCase();
//   console.log("Player chooses:", playerChoice);
//   return playerChoice;
// }

// Return a choice at random
function compSelection() {
  let compChoice = Math.random();
  if (compChoice < 0.34) {
    compChoice = "rock";
  } else if (compChoice <= 0.67) {
    compChoice = "paper";
  } else {
    compChoice = "scissors";
  }
  console.log("Computer chooses:", compChoice);
  computerChose.textContent = String("Computer chose: " + compChoice);
  return compChoice;
}

//plays the game in a loop until 5 points is reached
function playRound() {
  let computerSelection = compSelection();
  // let playerChoice = playerSelection();
  let result = "";

  // Compare choices

  if (
    (playerChoice == "rock" && computerSelection == "scissors") ||
    (playerChoice == "scissors" && computerSelection == "paper") ||
    (playerChoice == "paper" && computerSelection == "rock")
  ) {
    playerScore += 1;
    result =
      "You win! " +
      playerChoice +
      " beats " +
      computerSelection +
      "\nPlayer score: " +
      playerScore +
      "\nComputer score: " +
      computerScore;
    console.log(result);

    // "End" the game once a player reaches 5 points

    if (playerScore == 5) {
      result += "    You won the game!";
      console.log(result);
      playAgain.classList.remove("hidden");
      weapons.classList.add("hidden");
      playerChose.classList.add("hidden");
      computerChose.classList.add("hidden");
    }
  } else if (playerChoice == computerSelection) {
    result =
      "It's a tie. You both chose: " +
      playerChoice +
      "\nPlayer score: " +
      playerScore +
      "\nComputer score: " +
      computerScore;
    console.log(result);
  } else {
    computerScore += 1;
    result =
      "You lose! " +
      computerSelection +
      " beats " +
      playerChoice +
      "\nPlayer score: " +
      playerScore +
      "\nComputer score: " +
      computerScore;
    console.log(result);

    if (computerScore == 5) {
      result += "     Computer won the game!";
      console.log(result);
      playAgain.classList.remove("hidden");
      weapons.classList.add("hidden");
      playerChose.classList.add("hidden");
      computerChose.classList.add("hidden");
    }
  }
  document.getElementById("result").textContent = `${result}`;
}

// playRound();
