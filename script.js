function getComputerChoice(){
    let rng = Math.floor((Math.random() * 3)) + 1;

    if(rng == 1){
        let choice = "Rock";
    }

    else if(rng == 2){
        let choice = "Paper";
    }

    else{
        let choice = "Scissors";
    }
    
}