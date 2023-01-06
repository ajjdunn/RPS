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

playRound();
// //this function compares player input and random computer selection and returns a string
// function playRound() {
//   if (playerChoice == "rock" && compChoice == "scissors") {
//     return "You win! Rock beats Scissors";
//   } else if (playerChoice == "rock" && compChoice == "paper") {
//     return "You lose! Paper beats Rock";
//   } else if (playerChoice == "rock" && compChoice == "rock") {
//     return "Tie game!";
//   } else if (playerChoice == "scissors" && compChoice == "rock") {
//     return "You lose! Rock beats Scissors";
//   } else if (playerChoice == "scissors" && compChoice == "paper") {
//     return "You win! Scissors beats Paper";
//   } else if (playerChoice == "scissors" && compChoice == "scissors") {
//     return "Tie game!";
//   } else if (playerChoice == "paper" && compChoice == "rock") {
//     return "You win! Paper beats Rock";
//   } else if (playerChoice == "paper" && compChoice == "scissors") {
//     return "You lose! Scissors beats Paper";
//   } else if (playerChoice == "paper" && compChoice == "paper") {
//     return "Tie game!";
//   }
// }
// // console.log(playRound(playerSelection(), compSelection()));
// playerSelection();
// compSelection();
