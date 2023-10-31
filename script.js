/*
GET player selection of RPS.
GENERATE a CPU RPS selection.
IF player selection > CPU selection
  PRINT message declaring user is winner.
ELSE
  PRINT message declaring user is loser.
*/


function getComputerChoice() {
  return Math.floor(Math.random() * 3);  
}

function getPlayerChoice() {
  let keepGoing = true;
  while (keepGoing === true){
    let playerInput = prompt('What is your choice?');
    switch (playerInput.toLowerCase()){
      case 'rock':
        return 0;
      case 'paper':
        return 1;
      case 'scissors':
        return 2;
      default:
        console.log(playerInput + ' is not a valid choice.')
    }
  }

}

function decodeChoice(numChoice){
  switch (numChoice){
    case 0:
      return 'Rock';
    case 1:
      return 'Paper';
    case 2:
      return 'Scissors';
    default:
      return 'Invalid';
  }
}

function getWinner(playerChoice, computerChoice){
  let winner = playerChoice - computerChoice;
  if (winner === -2) {
    winner = 1;
  }
  return winner;
}

function printWinner(numWinner, numPlayer, numComputer){
  switch (numWinner){
    case -1:
      console.log('You Lose! ' + decodeChoice(computerSelection) + ' beats ' + decodeChoice(playerSelection));
      break;
    case 0:
      console.log('Draw!');
      break;
    case 1:
      console.log('You Win! ' + decodeChoice(playerSelection) + ' beats ' + decodeChoice(computerSelection));
      break;
  }
}

function playRound() {
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();
  let winner = getWinner(playerSelection,computerSelection);
  printWinner(winner, playerSelection,computerSelection);
  return winner;
}

function game() {
  let playerScore = 0;
  let cpuScore = 0;
  let roundCount = 5;
  for (let i = 0; i<roundCount-1; i++){
    switch (playRound()){
      case -1:
        cpuScore++;
      case 1:
        playerScore++;
    }
  }
  if (playerScore < cpuScore) {console.log('You lost everything...');}
  else if(playerScore === cpuScore) {console.log('You tied everything');}
  else {console.log('WINNER!');}
}