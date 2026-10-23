function getComputerChoice(){
    let choice
    let number =  Math.round(Math.random() * 2)

    if (number === 0){
        choice = "Rock"
    }
    else if (number === 1){
        choice = "Paper"
    }
    else if (number === 2){
        choice = "Scissors"
    }

    return choice.toLowerCase()
}

let humanScore = 0
let computerScore = 0

function playRound(event){
    let humanChoice = event.target.id
    let computerChoice = getComputerChoice()
    if (humanChoice == computerChoice) {
        result.textContent = "It's a Tie."
    }
    else if (humanChoice == "rock" && computerChoice == "paper"){
        result.textContent = "You lose! Paper beats Rock"
        computerScore += 1;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        result.textContent = "You Won! Rock beats Scissors"
        humanScore += 1;
    }
    else if (humanChoice == "paper" && computerChoice == "rock"){
        result.textContent = "You Won! Paper beats Rock"
        humanScore += 1;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors"){
        result.textContent = "You Lose! Scissors beats Paper"
        computerScore += 1;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock"){
        result.textContent = "You Lose! Rock beats Scissors"
        computerScore += 1;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper"){
        result.textContent = "You Won! Scissors beats Paper"
        humanScore += 1;
    }

    if (humanScore == 5 ){
        result.textContent = "Human Won the Game."
        humanScore = 0
        computerScore = 0
    }
    else if (computerScore == 5){
        result.textContent = "Computer Won the Game."
        humanScore = 0
        computerScore = 0
    }

    scoreBoard.textContent = `Human = ${humanScore} Computer = ${computerScore}`
}

const container = document.querySelector(".container") 
container.addEventListener("click", playRound)

const result = document.querySelector(".result")

const body = document.querySelector("body")
let scoreBoard = document.createElement("div")
scoreBoard.textContent = "Human = 0 Computer = 0"
body.insertBefore(scoreBoard,container)
