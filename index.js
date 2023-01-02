const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}` ;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner()
}))


function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum) {
        case 1: 
            computer = "ROCK";
            break;
        case 2: 
            computer = "PAPER"
            break;
        case 3:
            computer = "SCISSORS"
    }
}

function checkWinner() {
    if(player == computer) {
        return "Draw!";
    }
    else if(computer == "ROCK" && player == "SCISSORS") {
        return "You Lose!";
    }
    else if(computer == "PAPER" && player == "ROCK") {
        return "You Lose!";
    }
    else if(computer == "SCISSORS" && player == "PAPER") {
        return "You Lose!"
    }
    else if(computer == "ROCK" && player == "PAPER") {
        return "You Win!"
    }
    else if(computer == "PAPER" && player == "SCISSORS") {
        return "You Win!"
    }
    else if(computer == "SCISSORS" && player == "ROCK") {
        return "You Win!"
    }

}




