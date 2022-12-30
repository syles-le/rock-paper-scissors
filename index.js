let answers = ["rock", "paper", "scissors"];
function getComputerChoice(ans) {
    answers[Math.floor(Math.random() * answers.length)];
    return answers
}
console.log(getComputerChoice)