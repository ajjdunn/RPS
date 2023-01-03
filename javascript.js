// Prompt user for a selection and return the value
function playerSelection() {
  let playerChoice = prompt(
    "Do you choose Rock, Paper, or Scissors"
  ).toLocaleLowerCase();
  console.log("Player chooses:", playerChoice);
  return playerChoice;
}

// This function returns one of three choices at random
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

//this function compares player input and random computer selection and returns a string
function playRound(playerChoice, compChoice) {
  if (playerChoice == "rock" && compChoice == "scissors") {
    return "You win! Rock beats Scissors";
  } else if (playerChoice == "rock" && compChoice == "paper") {
    return "You lose! Paper beats Rock";
  } else if (playerChoice == "rock" && compChoice == "rock") {
    return "Tie game!";
  } else if (playerChoice == "scissors" && compChoice == "rock") {
    return "You lose! Rock beats Scissors";
  } else if (playerChoice == "scissors" && compChoice == "paper") {
    return "You win! Scissors beats Paper";
  } else if (playerChoice == "scissors" && compChoice == "scissors") {
    return "Tie game!";
  } else if (playerChoice == "paper" && compChoice == "rock") {
    return "You win! Paper beats Rock";
  } else if (playerChoice == "paper" && compChoice == "scissors") {
    return "You lose! Scissors beats Paper";
  } else if (playerChoice == "paper" && compChoice == "paper") {
    return "Tie game!";
  }
}
console.log(playRound(playerSelection(), compSelection()));

//This function plays 5 round of the game and returns the score as a string
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let roundResult = playRound();

  for (let counter = 0; counter <= 5; ++counter) {
    playRound();

    if (
      roundResult === "You win! Rock beats Scissors" ||
      roundResult === "You win! Scissors beats Paper" ||
      roundResult === "You win! Paper beats Rock"
    ) {
      ++playerScore;
    } else if (
      roundResult === "You lose! Rock beats Scissors" ||
      roundResult === "You lose! Scissors beats Paper" ||
      roundResult === "You lose! Paper beats Rock"
    ) {
      ++computerScore;
    }
  }
  if (playerScore > computerScore) {
    console.log("You win" + playerScore + " to " + computerScore + ".");
    return "You win" + playerScore + " to " + computerScore + ".";
  } else if (playerScore < computerScore) {
    console.log("You lose " + computerScore + " to " + playerScore + ".");
    return "You lose" + computerScore + " to " + playerScore + ".";
  } else {
    console.log("It was a tie, you both won the same number of rounds.");
    return "It was a tie, you both won the same number of rounds.";
  }
}
game();
