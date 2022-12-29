console.log("Hello");

function getComputerChoice(min, max) {
  let result = Math.floor(Math.random() * (max - min + 1) + min);
  if (result == 1) {
    return "Rock";
  } else if (result == 2) {
    return "Paper";
  } else if (result == 3) {
    return "Scissors";
  }
  return result;
}

console.log(getComputerChoice(1, 3));
