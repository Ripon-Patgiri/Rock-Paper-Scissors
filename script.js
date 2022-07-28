// Variables to store R, P, S.
let playerSelection;
let computerSelection;

// Variables to keep count of Scores
let playerWin = 0;
let computerWin = 0;

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

// Function to play a round of Rock Paper Scissors
function playRound(playerSelection,computerSelection) {
    let result = ""
    result = ('Player Selection : ' + playerSelection + '<br>Computer Selection : ' + computerSelection);

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerWin += 1
        result += ('<br>You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerWin + "<br>Computer score: " + computerWin)

        if (playerWin == 5) {
            result += '<br><br>You won the game! Reload the page to play again';
            disableButtons();
        }
    }
    else if (playerSelection == computerSelection) {
        result += ('<br>It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + playerWin + "<br>Computer score: " + computerWin)
    }
    else {
        computerWin += 1
        result += ('<br>You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerWin + "<br>Computer score: " + computerWin)

        if (computerWin == 5) {
            result += '<br><br>I won the game! Reload the page to play again';
            disableButtons();
        }
    }

    document.getElementById('result').innerHTML = result
    return
}

function disableButtons(){
    rockbtn.disabled = true;
    paperbtn.disabled = true;
    scissorsbtn.disabled = true;
}

const rockbtn = document.querySelector('#rockbtn');
const paperbtn = document.querySelector('#paperbtn');
const scissorsbtn = document.querySelector('#scissorsbtn');

rockbtn.addEventListener('click',() => playRound("rock",computerPlay()));
paperbtn.addEventListener('click',() => playRound("paper",computerPlay()));
scissorsbtn.addEventListener('click',() => playRound("scissors",computerPlay()));