let winners = [];
let i = 1;
let player = 0;
let ominini = 0;

function computerPlay() {
  const plays = ["rock", "paper", "scissors"]; // options
  return plays[Math.floor(Math.random() * 3)]; // return a random element from plays array
}

function playRound(playerSelection, computerSelection) {
  // This function gets 2 inputs for each player and returns string of who won
  let result = "";
  plays = ["rock", "paper", "scissors"];
  console.log(
    `Player plays ${playerSelection}; Ominini plays ${computerSelection}`
  );

  // get indexes of the player and computer selections
  const p_index = plays.indexOf(playerSelection.toLowerCase().trim());
  const c_index = plays.indexOf(computerSelection);

  // if index of playerSelection in plays is 1 more or 2 less than index of computerSelection in plays, then computer wins
  if (p_index == c_index + 1 || p_index == c_index - 2) {
    result = "Player wins";
  }

  // else if index of playerSelection in plays is 1 less or 2 more than index of computerSelection in plays, then computer wins
  else if (p_index == c_index - 1 || p_index == c_index + 2) {
    result = "Ominini wins";
  } else {
    result = "It's a Draw";
  }

  console.log(result);
  return result;
}

function playerOptions() {
  const game = document.querySelector("#game");

  const rock = document.createElement("a");
  rock.classList.add("btn");
  rock.classList.add("playOption");
  rock.id = "rock";
  rock.innerHTML = '<i class="material-icons left">terrain</i>rock';
  game.appendChild(rock);

  const paper = document.createElement("a");
  paper.classList.add("btn");
  paper.classList.add("playOption");
  paper.id = "paper";
  paper.innerHTML = '<i class="material-icons left">receipt</i>paper';
  game.appendChild(paper);

  const scissors = document.createElement("a");
  scissors.classList.add("btn");
  scissors.classList.add("playOption");
  scissors.id = "scissors";
  scissors.innerHTML = '<i class="material-icons left">content_cut</i>scissors';
  game.appendChild(scissors);

  const playerSelection = document.querySelectorAll(".playOption");
  playerSelection.forEach((button) => {
    button.onclick = function () {
      if (i <= 5) {
        winner = playRound(button.id, computerPlay());
        const game = document.querySelector("#game");

        const currentRound = document.createElement("p");
        currentRound.classList.add("flow-text");
        currentRound.textContent = `Round ${i}: ${winner}`;
        game.appendChild(currentRound);
        
        winners.push(winner);
        switch (winner) {
          case "Player wins":
            player++;
            break;
          case "Ominini wins":
            ominini++;
            break;
        }
        i++;
      }
      if (i == 6) {
        gameplay();
      }
    };
  });
}

function gameplay() {
  if (i < 5) {
    playerOptions();
  } else if (i == 6) {
    i++
    if (ominini > player) {
      gameWinner = "Ominini wins";
    } else if (ominini < player) {
      gameWinner = "Player wins";
    } else {
      gameWinner = "It's a draw";
    }
    const insertWinner = document.querySelector("#winner");
    const winnerName = document.createElement("h3");
    winnerName.textContent = `Final Result: ${gameWinner}`;
    insertWinner.appendChild(winnerName);
  }
}
gameplay();
