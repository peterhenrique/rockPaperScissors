const options = ['rock', 'paper', 'scissors'];
function computerPlay() {
    const random = Math.floor(Math.random () * (options.length));
    return options[random];
}

function victoryscreen(){
    if (humanWins > computerWins) {
        return alert("You Win")
    } else 
    {return alert("You lose") };
}

function playRound(playerSelection, computerSelection) {

    if (humanWins >= 5  || computerWins >= 5) {
        victoryscreen()
    } else {
        if (playerSelection === "rock" && computerSelection === "scissors") {
            humanWins++;
            pScore.textContent ++
            return alert("You win, rock beats scissors")
        } 
        if (playerSelection === "scissors" && computerSelection === "rock") {
            computerWins++;
            cScore.textContent++;
            return alert("You lose, rock beats scissors")
        }
         if (playerSelection == computerSelection) {
            return alert("It's a tie!");
        }
        if (playerSelection === "paper" && computerSelection === "scissors") {
            computerWins++;
            cScore.textContent++;
            return alert("You lose, scissors beats paper ");
        } 
        if (playerSelection === "scissors" && computerSelection === "paper") {
            humanWins++;
            pScore.textContent ++;
            return alert ("You win, scissors beats paper ")
        } 
        if (playerSelection === "rock" && computerSelection === "paper"){  
            computerWins++;
            cScore.textContent++;
            return alert("You lose, paper beats rock ")
        } 
         if (playerSelection === "paper" && computerSelection === "rock"){ 
            humanWins++;
            pScore.textContent ++;
            return alert("You win, paper beats rock ")
        }

    } 
 
}

//rock
const rock = document.querySelector('#rock');

rock.addEventListener('click', () => {
    let playerSelection = 'rock'
    let computerSelection = computerPlay()
    console.log(playerSelection);
    playRound(playerSelection,computerSelection)
    console.log(computerPlay())
    console.log(humanWins);
    console.log (computerWins)  
    }
)

// paper
const paper = document.querySelector('#paper');

paper.addEventListener('click', () =>{
    let playerSelection = 'paper';    
    let computerSelection = computerPlay()
    console.log(playerSelection);
    playRound(playerSelection,computerSelection)
    console.log(computerPlay())
    console.log(humanWins);
    console.log (computerWins)  
}
)

// scissors
const scissors = document.querySelector('#scissors');
scissors.addEventListener ('click', () =>{
    let playerSelection = 'scissors'
    let computerSelection = computerPlay()
    console.log(playerSelection);
    playRound(playerSelection,computerSelection)
    console.log(computerPlay())
    console.log(humanWins);
    console.log (computerWins)  
})

//scoreboard
//primeiro ele começa como zero

let humanWins = 0

let pScore = document.querySelector('#pScore');
pScore.textContent = humanWins;


let computerWins = 0
let cScore = document.querySelector('#cScore');
cScore.textContent = computerWins;



let reset = document.querySelector('#reset');
reset.addEventListener ('click', () => {
    humanWins = 0;
    pScore.textContent = '0';
    computerWins = 0;
    cScore.textContent = '0';
})

// add each win

/*function Game () {
   
        
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

*/

