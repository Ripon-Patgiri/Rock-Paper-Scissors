let playerSelection;
let computerSelection;
let playerWin = 0;
let computerWin = 0;

// Function where game play starts
function game()
{
    for(let i = 0 ; i < 5 ; i++)
    {
        playerSelection = prompt("Rock - Paper - Scissors : Enter Pick : ").toLowerCase();
        computerSelection = computerPlay();
        let result = playRound(playerSelection,computerSelection);
        if (result == "Tie")
        {
            continue;
        }
        else if (result == "Win")
        {
            playerWin++;
        }
        else if ( result == "Lose")
        {
            computerWin++;
        }
    }
    if (playerWin > computerWin)
    {
        alert("Player Wins");
    }
    else if(computerWin > playerWin)
    {
        alert("Computer Wins");
    }
    else
    {
        alert("Its a Tie");
    }
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
    else
    {
        return "scissors";
    }
}

// Function to play a round of Rock Paper Scissors
function playRound(playerSelection,computerSelection)
{
    if (playerSelection == computerSelection)
    {
        return "Tie";
    }
    else if(playerSelection == "rock")
    {
        if(computerSelection == "paper")
            return "Lose";
        else
            return "Win";
    }
    else if(playerSelection == "paper")
    {
        if(computerSelection == "rock")
            return "Win";
        else
            return "Lose";
    }
    else if(playerSelection == "scissors")
    {
        if(computerSelection == "rock")
            return "Lose";
        else
            return "Win";
    }

}

game();