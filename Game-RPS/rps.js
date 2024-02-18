let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  tie: 0,
};

updateScoreElement();

document.querySelector(".js-result").innerHTML = result;

document.querySelector(
  ".js-moves"
).innerHTML = `you ${computeMove} - ${computeMove} computer`;

function playGame(playMove) {
  const computeMove = pickComputerMove();
  //console.log(computeMove);
  let result = "";

  if (playMove === "Scissors") {
    if (computeMove === "Rock") {
      result = "yoy Lose.";
    } else if (computeMove === "Paper") {
      result = "you win.";
    } else if (computeMove === "Scissors") {
      result = "Tie.";
    }
  } else if (playMove === "Paper") {
    if (computeMove === "Rock") {
      result = "You win.";
    } else if (computeMove === "Paper") {
      result = "Tie.";
    } else if (computeMove === "Scissors") {
      result = "you Lose.";
    }
  } else if (playMove === "Rock") {
    if (computeMove === "Rock") {
      result = "Tie.";
    } else if (computeMove === "Paper") {
      result = "you Lose.";
    } else if (computeMove === "Scissors") {
      result = "you win.";
    }
  }

  if (result === "you win.") {
    score.wins = score.wins += 1;
  } else if (result === "you Lose.") {
    score.losses = score.losses += 1;
  } else if (result === "Tie.") {
    score.tie = score.tie += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-moves").innerHTML = `
    you ${playMove} - ${computeMove} Computer `;
}
//`you ${playMove} - ${computeMove} Computer`
function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `wins:${score.wins},losses:${score.losses}
        ,tie:${score.tie}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computeMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computeMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computeMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computeMove = "Scissors";
  }
  return computeMove;
}
