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

    return choice
}

let computerChoice = getComputerChoice()
console.log("Computer: "+computerChoice)

function getHumanChoice(){
    return prompt("Enter Rock, Paper or Scissors:");
}

let humanChoice = getHumanChoice()
console.log("Human: "+humanChoice)