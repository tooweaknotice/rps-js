/*
GET player selection of RPS.
GENERATE a CPU RPS selection.
IF player selection > CPU selection
  PRINT message declaring user is winner.
ELSE
  PRINT message declaring user is loser.
*/

let playerScore = 0;
let cpuScore = 0;

const playerScoreGUI = document.querySelector(`.player-score`);
const cpuScoreGUI = document.querySelector(`.cpu-score`);
const finalScoreGUI = document.querySelector(`.final-results`);
const buttons = document.querySelectorAll(`button`);
const body = document.querySelector(`body`);
const resetButton = document.createElement(`button`);
const results = document.querySelector(`.results`);
resetButton.textContent = `Reset`

buttons.forEach(btn => 
  btn.addEventListener(`click`, (e) => {
    playRound(e.target.textContent);
    playerScoreGUI.textContent = `Player Score: ` + playerScore;
    cpuScoreGUI.textContent = `CPU Score: ` + cpuScore;
    if (playerScore === 5 || cpuScore === 5){
      if (playerScore === 5){
        finalScoreGUI.textContent = `Player Wins ` + playerScore + `-` + cpuScore + `!`;
      }
      else {
        finalScoreGUI.textContent = `CPU Wins ` + cpuScore + `-` + playerScore + `!`;
      }
      body.appendChild(resetButton);
      resetButton.addEventListener(`click`, () => {
        resetGame();
        delButton.remove();
      })
    }
  })
)

function resetGame(){
  playerScore = 0;
  cpuScore = 0;
  playerScoreGUI.textContent = `Player Score: 0`;
  cpuScoreGUI.textContent = `CPU Score: 0`;
  results.textContent = ``;
  finalScoreGUI.textContent = ``;
}

function getComputerChoice() {
  return Math.floor(Math.random() * 3);  
}

function lookupPlayerChoice(playerInput) {
  let keepGoing = true;
  while (keepGoing === true){
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
      results.textContent = 'You Lose! ' + decodeChoice(computerSelection) + ' beats ' + decodeChoice(playerSelection);
      cpuScore++;
      break;
    case 0:
      console.log('Draw!');
      results.textContent = 'Draw!';
      break;
    case 1:
      console.log('You Win! ' + decodeChoice(playerSelection) + ' beats ' + decodeChoice(computerSelection));
      results.textContent = 'You Win! ' + decodeChoice(playerSelection) + ' beats ' + decodeChoice(computerSelection);
      playerScore++;
      break;
  }
}

function playRound(playerChoice) {
  playerSelection = lookupPlayerChoice(playerChoice);
  computerSelection = getComputerChoice();
  let winner = getWinner(playerSelection, computerSelection);
  printWinner(winner, playerSelection, computerSelection);
  return winner;
}

/*
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
*/