let humanScore = 0
let computerScore = 0

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

function getHumanChoice(){
    return prompt("Enter Rock, Paper or Scissors:").toLowerCase();
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice) {
        console.log("It's a Tie.")
    }
    else if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats Rock");
        computerScore += 1;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You Won! Rock beats Scissors")
        humanScore += 1;
    }
    else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("You Won! Paper beats Rock")
        humanScore += 1;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You Lose! Scissors beats Paper")
        computerScore += 1;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You Lose! Rock beats Scissors")
        computerScore += 1;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You Won! Scissors beats Paper")
        humanScore += 1;
    }
}

const humanChoice = getHumanChoice()
console.log("Human: "+humanChoice)

const computerChoice = getComputerChoice()
console.log("Computer: "+computerChoice)

playRound(humanChoice, computerChoice);