// GAME WORKINGS

// Variables to store R, P, S.
let playerSelection;
let computerSelection;

// Variables to keep count of Scores
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

// Function to play a round of Rock Paper Scissors
function playRound(playerSelection,computerSelection) {
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerScore++;
        roundWinner = 'player';
    }
    else if (playerSelection == computerSelection) {
        roundWinner = 'tie';
    }
    else {
        computerScore++;
        roundWinner = 'computer';
    }
    updateScoreMessage(roundWinner,playerSelection,computerSelection);
}

// Function to assign computer a selection
function computerPlay()
{
    let random = Math.floor(Math.random() * 3);
    if (random == 0)
    {
        return "rock";
    }
    else if (random == 1)
    {
        return "paper";
    }
    else if (random == 2)
    {
        return "scissors";
    }
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5;
}

// UI

const scoreInfo = document.getElementById('scoreInfo');
const scoreMessage = document.getElementById('scoreMessage');
const playerScorePara = document.getElementById('playerScore');
const computerScorePara = document.getElementById('computerScore');
const playerSign = document.getElementById('playerSign');
const computerSign = document.getElementById('computerSign');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const endgameModal = document.getElementById('endgameModal');
const endgameMsg = document.getElementById('endgameMsg');
const overlay = document.getElementById('overlay');
const restartBtn = document.getElementById('restartBtn');

rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));
restartBtn.addEventListener('click', restartGame);
overlay.addEventListener('click',closeEndgameModal);

function handleClick(playerSelection) {
    if(isGameOver()){
        openEndgameModal();
        return;
    }

    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    updateChoices(playerSelection, computerSelection);
    updateScore();

    if(isGameOver()){
        openEndgameModal();
        setFinalMessage();
    }
}

function updateChoices(playerSelection, computerSelection) {
    switch(playerSelection){
        case 'rock':
            playerSign.textContent = '🪨';
            break;
        case 'paper':
            playerSign.textContent = '📃';
            break;
        case 'scissors':
            playerSign.textContent = '✂️';
            break;
    }

    switch(computerSelection){
        case 'rock':
            computerSign.textContent = '🪨';
            break;
        case 'paper':
            computerSign.textContent = '📃';
            break;
        case 'scissors':
            computerSign.textContent = '✂️';
            break;
    }
}

function updateScore() {
    if (roundWinner == 'tie'){
        scoreInfo.textContent = "It's a TIE😑";
    }
    else if (roundWinner == 'player') {
        scoreInfo.textContent = 'You WON😃';
    }
    else if (roundWinner == 'computer') {
        scoreInfo.textContent = 'You LOST😭';
    }

    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
}

function updateScoreMessage(winner,playerSelection,computerSelection){
    if (winner === 'player') {
        scoreMessage.textContent = `${playerSelection.toUpperCase() } beats ${computerSelection.toUpperCase()}`;
        return;
    }
    else if (winner === 'computer') {
        scoreMessage.textContent = `${playerSelection.toUpperCase() } is beaten by ${computerSelection.toUpperCase()}`;
        return;
    }
    else {
        scoreMessage.textContent = `${playerSelection.toUpperCase() } ties with ${computerSelection.toUpperCase()}`;
        return;
    }
}

function openEndgameModal() {
    endgameModal.classList.add('active');
    overlay.classList.add('active');
}

function closeEndgameModal() {
    endgameModal.classList.remove('active');
    overlay.classList.remove('active');
}

function setFinalMessage() {
    return playerScore > computerScore
        ? (endgameMsg.textContent = 'You WON🥳️')
        : (endgameMsg.textContent = 'You LOST🤧')
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    scoreInfo.textContent = 'Choose Your Sign';
    scoreMessage.textContent = 'First to Score 5 Points WINS!';
    playerScorePara.textContent = 'Player: 0'
    computerScorePara.textContent = 'Computer: 0'
    playerSign.textContent = '❌'
    computerSign.textContent = '❌'
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }