let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userinput = document.querySelector("#guessfield");
const guessslot = document.querySelector(".gusses");
const lastresult = document.querySelector(".lastresult");
const loworhi = document.querySelector(".loworHi");
const startover = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevguess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    validate(guess);
  });
}

function validate(guess) {
  if (isNaN(guess)) {
    alert("plz enter a valid number");
  } else if (guess < 1) {
    alert("plz enter a number more than 1");
  } else if (guess > 100) {
    alert("plz enter a number less than 100");
  } else {
    prevguess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMsg(`Game over.Random no was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMsg(`You Are Win!.`);
    endGame();
  } else if (guess < randomNumber) {
    displayMsg(`No is Too Low`);
  } else if (guess > randomNumber) {
    displayMsg(`No is Too High`);
  }
}

function displayGuess(guess) {
  userinput.value = "";
  guessslot.innerHTML += `${guess},`;
  numGuess++;
  lastresult.innerHTML = `${12 - numGuess}`;
}

function displayMsg(msg) {
  loworhi.innerHTML = `<h2>${msg}</h2>`;
}

function newGame() {
  const newgamebtn = document.querySelector("#newGamw");
  newgamebtn.addEventListener("click", function (e) {
    //   e.preventDefault()
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numGuess = 1;
    guessslot.innerHTML = "";
    lastresult.innerHTML = `${1 - numGuess}`;
    userinput.removeAttribute("disabled");
    startover.removeChild(p);
    playGame = true;
  });
}

function endGame() {
  userinput.value = "";
  userinput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGamw">Start New Game</h2>`;
  startover.appendChild(p);
  playGame = false;
  newGame();
}
