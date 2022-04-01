let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("counter-el");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    countStr = count + " - "
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0
}

function error() {
countEl.textContent = "Error processing purchase"
}