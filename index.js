//Create array of choices to pull from randomly for computer
//Create function to play 1 round
//Keep track of player/computer score, increment and decrement as needed
//Loop through 5 rounds, declare winner





const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = choice[randomIndex];
    return computerChoice
};

function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        console.log("It's a tie!");
        return 0;
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        console.log("Rock beats scissors - You Lost!");
        return -1;
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        console.log("Paper beats rock - You Lost!");
        return -1;
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        console.log("Scissors beats paper - You Lost!");
        return - 1;
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        console.log("Paper beats rock - You Won!");
        return 1;
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        console.log("Scissors beats paper - You Won!");
        return 1
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        console.log("Rock beats scissors - You Won!");
        return 1;
    };
};

function game() {
    let computerSelection;
    let counter = 0;

    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("Choose your weapon: ").toLowerCase();
        counter += playRound(playerSelection, computerSelection);
    }

    if (counter < 0) {
        return "You Lost the game!";
    } else if (counter > 0) {
        return "You Won the game!";
    } else {
        return "It's a Draw"
    }
}

console.log(game());





