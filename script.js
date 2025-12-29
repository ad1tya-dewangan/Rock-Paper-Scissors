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

//function to play the game of 5 to decide the winner
function playGame(){

    for(let i=1; i<=5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    //score section
    console.log("Final Score:");
    console.log("You : " + humanScore);
    console.log("Computer : " + computerScore);

    if(humanScore > computerScore){
        console.log("Congratulations! You are the Winner.");
    }
    else if(computerScore > humanScore){
        console.log("You lost! Better luck next time.");
    }
    else{
        console.log("Your score tied with computer!");
    }
}

//calling the game function
playGame();
