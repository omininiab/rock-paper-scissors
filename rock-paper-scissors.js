function computerPlay() {
    const plays = ['rock', 'paper', 'scissors']; // options
    return plays[Math.floor(Math.random() * 3)]; // return a random element from plays array
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    plays = ['rock', 'paper', 'scissors'];
    
    if (!plays.includes(playerSelection.toLowerCase().trim())) {
        return playRound(prompt("You played an Invalid entry. Play again: "), computerSelection);
    }

    // get indexes of the player and computer selections
    const p_index = plays.indexOf(playerSelection.toLowerCase().trim());
    const c_index = plays.indexOf(computerSelection);

    // if index of playerSelection in plays is 1 more or 2 less than index of computerSelection in plays, then computer wins
    if (p_index == c_index + 1 || p_index == c_index - 2) {
        result = 'Player wins';
    }

    // else if index of playerSelection in plays is 1 less or 2 more than index of computerSelection in plays, then computer wins
    else if (p_index == c_index - 1 || p_index == c_index + 2) {
        result = 'Ominini wins';
    }

    else {
        result = "It's a Draw";
    }

    return result;
}

function game() {
    winners = [];
    player = 0;
    ominini = 0;

    for (let i=1; i<=5; i++) {
        const playerSelection = prompt("Play a round: ");
        const computerSelection = computerPlay();
        console.log(`Round ${i}: Player plays ${playerSelection}; Ominini plays ${computerSelection}`);
        winner = playRound(playerSelection, computerSelection);
        console.log(winner);
        const rounds = document.querySelector("#rounds");
        const roundWinner = document.createElement("li");
        roundWinner.classList.add("round-winner");
        roundWinner.textContent = `${winner}: ${playerSelection} vs ${computerSelection}`;
        rounds.appendChild(roundWinner);
        switch(winner) {
            case "Player wins":
                player++;
                break;
            case "Ominini wins":
                ominini++;
                break;
        }
        winners.push(winner);
    }
    console.log(`Player: ${player}\nOminini: ${ominini}`);
    if (player > ominini) {
        return "You win!";
    }
    else if (ominini > player) {
        return "Ominini wins!";
    }
    else {
        return "It's a draw";
    }
}

gameWinner = game();
const insertWinner = document.querySelector("#winner");
const winnerName = document.createElement("p");
winnerName.classList.add("flow-text");
winnerName.textContent = gameWinner;
insertWinner.appendChild(winnerName);