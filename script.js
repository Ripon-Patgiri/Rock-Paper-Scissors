// Variables to store R, P, S.
let playerSelection;
let computerSelection;

// Variables to keep count of Scores
let playerWin = 0;
let computerWin = 0;

// Function where game play starts
/* function game() {   
    // For loop to have 5 rounds
    for(let i = 0 ; i < 5 ; i++)
    {
        // Show Round No.
        alert("Round " + (i + 1));

        // Prompt user to pick a thing
        playerSelection = prompt("Enter Pick : ").toLowerCase();
        computerSelection = computerPlay();

        // Show computers selection for the round.
        alert(computerSelection);

        // Call playRound function to play one round
        let result = playRound(playerSelection,computerSelection);

        // Call roundWinner to find the winner of a round.
        let winner = roundWinner(result);


        alert("Round " + (i +1) + " winner : " + winner);
        alert("Player Score : " + playerWin);
        alert("Computer Score : " + computerWin);
    }
    // Call totalWinner to declare the ultimate winner
    totalWinner();
} */

// Function to determine the winner of a particular round.
function roundWinner(result)
{
    if (result == "Win")
    {
        playerWin += 1;
        return "Player";
    }
    else if ( result == "Lose")
    {
        computerWin += 1;
        return "Computer";
    }
    else
    {
        return "Tie";
    }

}

// Function to calculate the ultimate winner of the game
function totalWinner()
{
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
    else if (random == 2)
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