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