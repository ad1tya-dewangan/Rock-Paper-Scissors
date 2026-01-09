let humanScore = 0;
let computerScore = 0;

//function for getting users's choice
function getHumanChoice(){
    let hc = prompt("Enter your choice(rock,paper or scissor): "); 
    return hc.toLowerCase();
}

//fuction for getting computer's choice
function getComputerChoice(){
    let cc = Math.ceil(Math.random() * 3);
    if(cc === 1){
        return "rock";
    }
    if(cc === 2){
        return "paper";
    }
    if(cc === 3){
        return "scissor";
    }
}

//function to play a round 
function playRound(humanChoice, computerChoice){

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if(humanChoice === computerChoice){
        console.log("That's a tie");
    }

    if(humanChoice === "rock"){
        if(computerChoice === "paper"){
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }
        else if(computerChoice === "scissor"){
            console.log("You win! Rock beats Scissor");
            humanScore++;
        }
    }

    if(humanChoice === "paper"){
        if(computerChoice === "scissor"){
            console.log("You lose! Scissors beat Paper");
            computerScore++;
        }
        else if(computerChoice === "rock"){
            console.log("You win! Paper beats Rock");
            humanScore++;
        }
    }

    if(humanChoice === "scissor"){
        if(computerChoice === "rock"){
            console.log("You lose! Rock beat Scissor");
            computerScore++;
        }
        else if(computerChoice === "paper"){
            console.log("You win! Scissors beat Paper");
            humanScore++;
        }
    }

}

const button = document.querySelectorAll(".btn");

document.addEventListener("click", e => {
    if(e.target.classList.contains(".btn")){
        console.log(e.target.textContent);
    }
})
