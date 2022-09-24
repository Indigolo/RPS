function getComputerChoice(){
    
    let rng = Math.floor((Math.random() * 3)) + 1;

    if(rng == 1)
    return choice = "Rock";
    

    else if(rng == 2)
    return choice = "Paper";
    

    else
    return choice = "Scissors";
    
    
}

function round(playerSelection, computerSelection){

    if(playerSelection == computerSelection)
    alert("Draw");

    else if(playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "SCISSORS")
    alert("Victory");

    else if(playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "ROCK")
    alert("Victory");

    else if(playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "PAPER")
    alert("Victory");

    else
    alert("Defeat");
}