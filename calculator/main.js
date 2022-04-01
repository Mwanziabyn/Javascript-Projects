let num1 = 8;
let num2 = 2;

let num1El = document.getElementById("num1-el").textContent = num1;
let num2El = document.getElementById("num2-el").textContent = num2;
let sumEl = document.getElementById("sum-el");

function add() {
    sum = num1 + num2
    sumEl.textContent = sum
}

function subtract() {
    let subtract = num1 - num2
    sumEl.textContent = subtract
}

function multiply() {
    multply = num1 * num2
    sumEl.textContent = multply
}

function divide() {
    let divide = num1 / num2
    sumEl.textContent = divide
}