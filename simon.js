//user and game condition store in array
let userseq = [];
let gameseq = [];

//started game value
let started = false;
let level = 0;

let btns = ["red", "green", "blue", "yellow"];

let para = document.querySelector("p");
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    console.log("game started");

    levelUp();
  }
});

//game flash function
function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

//user flash function
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

//all divs click function
function btnPress() {
  let btn = this;
  userFlash(btn);
  console.log(btn);

  let color = btn.getAttribute("id");
  userseq.push(color);
  console.log(color);
  checkAns(userseq.length - 1);
}

//level updated
function levelUp() {
  userseq = [];
  level++;
  para.innerHTML = `<b>level = <b> ${level}`;

  let randIndx = Math.floor(Math.random() * 3);
  let randColor = btns[randIndx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameseq.push(randColor);

  console.log(randIndx);
  console.log(randColor);
  console.log(randBtn);

  gameFlash(randBtn);
}

//check the color == same color
function checkAns(idx) {
  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    para.innerHTML = `game over ! your total score is ${level}<br> <i>press any kay to restart <i>`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "white";
    }, 1000);
    reset();
    h2.innerHTML = `your total score is = ${level.push(level++)}`;
  }
}

//select all buttons And add click event
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  level = 0;
  userseq = [];
  gameseq = [];
}
