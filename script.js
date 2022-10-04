function getComputerChoice(){

    let rng = Math.floor((Math.random() * 3)) + 1;

    if(rng == 1)
    return "rock";
    

    else if(rng == 2)
    return "paper";
    

    else
    return "scissors";
    
    
}

function playRound(playerSelection, computerSelection){

    if(playerSelection == computerSelection)
    return "Draw";

    else if(playerSelection == "rock" && computerSelection == "scissors")
    return true;

    else if(playerSelection == "paper" && computerSelection == "rock")
    return true;

    else if(playerSelection == "scissors" && computerSelection == "paper")
    return true;

    return false;
}

const result = document.createElement('div');
document.body.appendChild(result);


const rock = document.createElement('button');
rock.textContent = "rock";

const paper = document.createElement('button');
paper.textContent = "paper";

const scissors = document.createElement('button');
scissors.textContent = "scissors";

document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissors);

let win = 0;
let loss = 0;

rock.addEventListener('click', () => {
  let answer = playRound("rock", getComputerChoice());

  if(answer == "Draw")
  result.textContent = win + " - " + loss;

  else if(answer == true){
    win += 1;
    result.textContent = win + " - " + loss;
  }

  else{
    loss += 1;
    result.textContent = win + " - " + loss;
  }

  if(win == 5)
    result.textContent = "Victory!";

  else if(loss == 5)
  result.textContent = "Loss";
});

paper.addEventListener('click', () => {
    let answer = playRound("paper", getComputerChoice());

    if(playRound("paper", getComputerChoice) == "Draw")
    result.textContent = win + " - " + loss;
  
    else if(playRound("paper", getComputerChoice())){
      win += 1;
      result.textContent = win + " - " + loss;
    }
  
    else{
      loss += 1;
      result.textContent = win + " - " + loss;
    }

    if(win == 5)
    result.textContent = "Victory!";

    else if(loss == 5)
    result.textContent = "Loss";
  });

  scissors.addEventListener('click', () => {
    let answer = playRound("scissors", getComputerChoice());

    if(answer == "Draw")
    result.textContent = win + " - " + loss;
  
    else if(answer){
      win += 1;
      result.textContent = win + " - " + loss;
    }
  
    else{
      loss += 1;
      result.textContent = win + " - " + loss;
    }

    if(win == 5)
    result.textContent = "Victory!";

    else if(loss == 5)
    result.textContent = "Loss";
  });

