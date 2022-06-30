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

let computerSelecton = computerPlay();
console.log(computerSelecton);
let playerSelection = prompt("Rock - Paper - Scissors : Enter Pick : ").toLowerCase();

// Function to play a round of Rock Paper Scissors
function playRound(playerSelection,computerSelecton)
{
    if (playerSelection == computerSelecton)
    {
        return "Tie";
    }
    else if(playerSelection == "rock")
    {
        if(computerSelecton == "paper")
            return "Lose";
        else
            return "Win";
    }
    else if(playerSelection == "paper")
    {
        if(computerSelecton == "rock")
            return "Win";
        else
            return "Lose";
    }
    else if(playerSelection == "scissors")
    {
        if(computerSelecton == "rock")
            return "Lose";
        else
            return "Win";
    }

}