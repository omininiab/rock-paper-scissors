let i = 1;
let player = 0;
let ominini = 0;
let playerName = "";

function clearDOM() {
  const clearGame = document.querySelector("#game");
  clearGame.innerHTML = "";
  let clearResults = document.querySelector("#round");
  clearResults.innerHTML = "";
  clearResults = document.querySelector("#score");
  clearResults.innerHTML = "";
  clearResults = document.querySelector("#winner");
  clearResults.innerHTML = "";
  clearResults = document.querySelector("#newGame");
  clearResults.classList.remove("btn");
  clearResults.innerHTML = "";
  clearResults = document.querySelector("#resultCard");
  clearResults.classList.remove("card-content");
}

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
    result = "You win";
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

        switch (winner) {
          case "You win":
            player++;
            break;
          case "Ominini wins":
            ominini++;
            break;
        }
        const round = document.querySelector("#round");
        const card = document.querySelector("#resultCard");
        card.classList.add("card-content");

        const score = document.querySelector("#score");
        score.textContent = `${playerName} ${player} : ${ominini} OMININI`;
        round.textContent = `Round ${i}/5 : ${winner}`;
        i++;
      }
      if (i == 6) {
        gameplay();
      }
    };
  });
}

function gameplay() {
  if (i < 5 && playerName != "") {
    console.log(playerName);
    playerOptions();
  } else if (i == 6) {
    i++;
    if (ominini > player) {
      gameWinner = "Ominini wins";
    } else if (ominini < player) {
      gameWinner = `${playerName} wins`;
    } else {
      gameWinner = "It's a draw";
    }
    const round = document.querySelector("#round");
    round.textContent = "";
    const winner = document.querySelector("#winner");
    winner.textContent = `Final Result: ${gameWinner}`;
    const newGame = document.querySelector("#newGame");
    newGame.classList.add("btn");
    newGame.textContent = "Play Again";
    newGame.onclick = function () {
      i = 1;
      player = 0;
      ominini = 0;
      clearDOM();
      gameplay();
    };
  }
}

const submit = document.querySelector("#submitName");
submit.onclick = function () {
  playerName = document.getElementById("name").value;
  if (playerName.trim() === "") {
    playerName = "Player";
  } else {
    playerName = playerName.toUpperCase();
  }
  clearDOM();
  i = 1;
  player = 0;
  ominini = 0;
  gameplay();
  return false;
};
