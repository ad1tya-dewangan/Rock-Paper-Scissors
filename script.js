const choices = ["rock","paper","scissor"];
const playerDisplay = document.getElementById('playerDisplay')
const computerDisplay = document.getElementById('computerDisplay')
const resultDisplay = document.getElementById('resultDisplay')

function playGame(playerchoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    let result = ""

    if (playerchoice === computerChoice){
        result = "It's a tie";
    }
    else{
        switch(playerchoice){
            case "rock":
                result = (computerChoice === "scissor") ? "You win" : "You lose"
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You win" : "You lose"
                break;
            case "scissor":
                result = (computerChoice === 'rock') ? "You lose" : "You win"
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerchoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = `${result}`
}