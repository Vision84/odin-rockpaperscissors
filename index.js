function computerPlay() {
    let validMoves = ["rock", "paper", "scissors"];
    return validMoves[Math.floor(Math.random()*validMoves.length)];
}

function playRound(playerSelection, computerSelection) {
    ps = playerSelection.toLowerCase();
    if (ps === "rock" || ps === "paper" || ps === "scissors") {
    } else {
        return "Invalid move";
    }

    if (ps === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (ps === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    } else if (ps === "rock" && computerSelection === "rock") {
        return "It is a tie!";
    } else if (ps === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (ps === "paper" && computerSelection === "paper") {
        return "It is a tie!";
    } else if (ps === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    } else if (ps === "scissors" && computerSelection === "scissors") {
        return "It is a tie!";
    } else if (ps === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
    } else {
        return "You Lose! Rock beats Scissors";
    }
}    
    
function game() {
        let score = 0;
        
        for (let i = 0; i < 5; i++) {
            const playerSelection = prompt("Please enter your move: (rock, paper, scissors)");
            const computerSelection = computerPlay();
            let result = playRound(playerSelection, computerSelection);
            if (result.startsWith("You Win") === true) {
                score++;
            }
            console.log(result);
        }
    
        console.log("\n");
        
        if (score > 2) {
            console.log("You won the game!");
        } else {
            console.log("Oh no! You lost...");
        }
}

let score = 0;


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const latest = document.querySelector('#latest');
const scoreDiv = document.querySelector('#score')

rock.addEventListener('click', function(e) {
    const computerSelection = computerPlay();
    const playerSelection = e.target.value;

    let result = playRound(playerSelection, computerSelection);
    latest.innerHTML = `${result}`;
    if (result.startsWith("You Win")) {
        score += 1;
    }

    if (score === 5) {
        scoreDiv.innerHTML = `Score: ${score+1}`;
        alert("You won!");
        score = 0;
    }
    scoreDiv.innerHTML = `Score: ${score}`;
});

paper.addEventListener('click', function(e) {
    const computerSelection = computerPlay();
    const playerSelection = e.target.value;

    let result = playRound(playerSelection, computerSelection);
    latest.innerHTML = `${result}`;
    if (result.startsWith("You Win")) {
        score += 1;
    }

    if (score === 5) {
        alert("You won!");
        score = 0;
    }
    scoreDiv.innerHTML = `Score: ${score}`;
});

scissors.addEventListener('click', function(e) {
    const computerSelection = computerPlay();
    const playerSelection = e.target.value;

    let result = playRound(playerSelection, computerSelection);
    latest.innerHTML = `${result}`;
    if (result.startsWith("You Win")) {
        score += 1;
    }

    if (score === 5) {
        alert("You won!");
        score = 0;
    }
    scoreDiv.innerHTML = `Score: ${score}`;
});
