let playerScore = 0;
let computerScore = 0;
let playerChoice = "paper";
let compChoice = "scissors";

// Prompt the player for an input
function playerSelection() {
  let playerChoice = prompt(
    "Do you choose Rock, Paper, or Scissors"
  ).toLocaleLowerCase();
  console.log("Player chooses:", playerChoice);
  return playerChoice;
}

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
  return compChoice;
}

//plays the game in a loop until 5 points is reached
function playRound() {
  let computerSelection = compSelection();
  let playerChoice = playerSelection();
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
      "\nComputer score: ";
    console.log(result);

    // "End" the game once a player reaches 5 points

    if (playerScore == 5) {
      result += "You won the game! Reload the page to play again";
      console.log(result);
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
      "You lose!" +
      computerSelection +
      " beats " +
      playerChoice +
      "\nPlayer score: " +
      playerScore +
      "\nComputer score: " +
      computerScore;
    console.log(result);

    if (computerScore == 5) {
      result += "Computer won the game! Reload the page to play again";
      console.log(result);
    }
  }
}

// playRound();
