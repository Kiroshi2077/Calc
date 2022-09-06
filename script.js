"use strict";

const display = document.querySelector(".answer");
const buttons = [];
const addButton = document.querySelector("#addition");
const subButton = document.querySelector("#subtract");
const multButton = document.querySelector("#multiply");
const divButton = document.querySelector("#divide");
const dotButton = document.querySelector("#dot");
const enterButton = document.querySelector("#enter");
const clearButton = document.querySelector("#clear");
let answered = false;

for (let i = 0; i < 10; i++) {
  buttons.push(document.getElementById(i));
  buttons[i].addEventListener("click", function () {
    if (answered === false) {
      display.innerHTML += i;
    } else {
      display.innerHTML = i;
      answered = false;
    }
  });
}
addButton.addEventListener("click", function () {
  answered = false;
  display.innerHTML += " + ";
});
subButton.addEventListener("click", function () {
  answered = false;
  display.innerHTML += " - ";
});
multButton.addEventListener("click", function () {
  answered = false;
  display.innerHTML += " * ";
});
divButton.addEventListener("click", function () {
  answered = false;
  display.innerHTML += " / ";
});
dotButton.addEventListener("click", function () {
  answered = false;
  display.innerHTML += ".";
});
enterButton.addEventListener("click", function () {
  display.innerHTML = eval(display.innerHTML);
  answered = true;
});
clearButton.addEventListener("click", function () {
  display.innerHTML = "";
  answered = false;
});
