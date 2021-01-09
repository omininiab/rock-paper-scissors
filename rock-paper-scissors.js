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
        result = 'Player';
    }

    // else if index of playerSelection in plays is 1 less or 2 more than index of computerSelection in plays, then computer wins
    else if (p_index == c_index - 1 || p_index == c_index + 2) {
        result = 'Computer';
    }

    else {
        result = "Draw";
    }

    return result;
}

function game() {
    winners = [];
    player = 0;
    computer = 0;

    for (let i=1; i<=5; i++) {
        const playerSelection = prompt("Play a round: ");
        const computerSelection = computerPlay();
        console.log(`Round ${i}: Player plays ${playerSelection}; Computer plays ${computerSelection}`);
        winner = playRound(playerSelection, computerSelection);
        console.log(`${winner} wins!`);
        switch(winner) {
            case "Player":
                player++;
                break;
            case "Computer":
                computer++;
                break;
        }
        winners.push(winner);
    }
    console.log(`Player: ${player}\nComputer: ${computer}`);
    if (player > computer) {
        return "You win!";
    }
    else if (computer > player) {
        return "Computer wins!";
    }
    else {
        return "It's a draw";
    }
}

alert(game());