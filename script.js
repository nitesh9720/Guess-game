"use strict";
let secretnumber = Math.trunc(Math.random() * 100 + 1);

let score = 10;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guessnumber = Number(document.querySelector(".guess").value);

  if (!guessnumber) {
    document.querySelector(".message").textContent = "enter something";
  } else if (score === 0) {
    document.querySelector(".message").textContent =
      "You should restart the game";
  } else if (guessnumber === secretnumber) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector(".number").textContent = guessnumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".guess").style.backgroundColor = "#60b347";
    score > highscore ? (highscore = score) : (highscore = highscore);
    document.querySelector(".highscore").textContent = highscore;

    document.querySelector(".number").style.width = "16vw";
  } else if (guessnumber > secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "guess a lower number";
      score--;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      score = 0;
    }
  } else {
    if (score > 1) {
      document.querySelector(".message").textContent = "guess a higher number";
      score--;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      score = 0;
    }
  }
  document.querySelector(".score").textContent = score;

  // document.querySelector(".guess").value = "";
});

document.querySelector(".again").addEventListener("click", function () {
  secretnumber = Math.trunc(Math.random() * 100 + 1);
  console.log(secretnumber);
  score = 10;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "8vw";
});
