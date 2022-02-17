const options = ['rock', 'paper', 'scissors'];
function computerPlay() {
    const random = Math.floor(Math.random () * (options.length));
    return options[random];
}
let humanWins = 0
let computerWins = 0

function victoryscreen(){
    if (humanWins > computerWins) {
        return alert("You Win")
    } else 
    {return alert("You lose") };
}

function playRound(playerSelection, computerSelection) { 
  

    if (playerSelection === "rock" && computerSelection === "scissors") {
        humanWins++;
        return alert("You win, rock beats scissors")
    } 
    if (playerSelection === "scissors" && computerSelection === "rock") {
        computerwins++;
        return alert("You lose, rock beats scissors")
    }
     if (playerSelection == computerSelection) {
        return alert("It's a tie!");
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        computerWins++;
        return alert("You lose, scissors beats paper ");
    } 
    if (playerSelection === "scissors" && computerSelection === "paper") {
        humanWins++;
        return alert ("You win, scissors beats paper ")
    } 
    if (playerSelection === "rock" && computerSelection === "paper"){  
        computerWins++;
        return alert("You lose, paper beats rock ")
    } 
     if (playerSelection === "paper" && computerSelection === "rock"){ 
        humanWins++;
        return alert("You win, paper beats rock ")
    }    
}

function Game () {
   
        
    for (let i = 0; i < 5; i++) {  
        let answer = prompt("Choose your Weapon");
        let playerSelection = answer.toLowerCase();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log (humanWins, computerWins)
        
        
    }
    victoryscreen();
     
     
     
}

Game ();



