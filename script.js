let humanScore = 0;
let computerScore = 0;
const winScore = 5;

// a map to decide computer choice
const compChoiceMap = {
    1: "rock",
    2: "paper",
    3: "scissor"
};

//fuction for getting computer's choice
function getComputerChoice(){
    let cc = Math.ceil(Math.random() * 3);
    return compChoiceMap[cc];
}

// a map to decide round winner
const winAgainst = {
    rock: "scissor",
    paper: "rock",
    scissor: "paper"
};

// function to play a round 
function playRound(humanChoice, computerChoice){

    if(humanChoice === computerChoice){
        setTimeout(() => {
            roundResult.textContent = "That's a tie";
        }, 500);
        return;
    }

    if(winAgainst[humanChoice] === computerChoice){
        setTimeout(() => {
            roundResult.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
        }, 500);
        humanScore++;
    }
    else{
        setTimeout(() => {
            roundResult.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
        }, 500);
        computerScore++;
    }
}

// image reference
const humanImage = document.querySelector(".humanImage");
const computerImage = document.querySelector(".computerImage");

// a map to decide image choice
const imageMap = {
    rock: "./images/rock.png",
    paper: "./images/paper.png",
    scissor: "./images/scissor.png"
};

// function to change image on page
function setHumanImage(choice){
    humanImage.src = imageMap[choice];
}

function setComputerImage(choice, delay = 500){
    setTimeout(() => {
        computerImage.src = imageMap[choice];
    }, delay);
}

// function changeImage(h,c){
//     humanImage.src = imageMap[h];
//     computerImage.src = imageMap[c];
// }

// score reference
const hScore = document.querySelector(".hScore");
const cScore = document.querySelector(".cScore");

function showScore() {
    setTimeout(() => {
        hScore.textContent = `Score: ${humanScore}`;
        cScore.textContent = `Score: ${computerScore}`;
    }, 500);
}

// results reference
const roundResult = document.querySelector(".round-result");
const gameResult = document.querySelector(".game-result");

// function to check who wins 5 round first
function checkWinner(){
    if(humanScore === winScore){
        endGame("Congratulation! You win the Game 🎉");
    }
    else if(computerScore === winScore){
        endGame("You lost! Better luck next time 😅");
    }
}

function endGame(message){
    gameResult.textContent = message;
    disableButtons();
}

// buttons reference
const btnGroup = document.querySelectorAll(".btn");

// disabling buttons after winner is decided
function disableButtons(){
    btnGroup.forEach(btn => {
        btn.disabled = true;
    });
}

// enabling button when new-game is pressed
function enableButtons(){
    btnGroup.forEach(btn => {
        btn.disabled = false;
    });
}

// buttons click event handeler
document.addEventListener("click", e => {
    if(e.target.classList.contains("btn")){
        let humanSelection = e.target.id;
        let computerSelection = getComputerChoice();
        // changeImage(humanSelection,computerSelection);
        setHumanImage(humanSelection);
        setComputerImage(computerSelection);
        playRound(humanSelection, computerSelection);
        showScore();
        checkWinner();
    }
});

const newGame = document.querySelector(".newGame-btn");

// new-game button event handeler
newGame.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    showScore();
    humanImage.src = "./images/defaultHand-start.png";
    computerImage.src = "./images/defaultHand-start.png";
    roundResult.textContent = "";
    gameResult.textContent = "";
    enableButtons();
});

