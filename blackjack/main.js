let player = {
    name: "Ryan",
    chips: 145
}
let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 13 ) + 1
    if (randomNumber > 10 ) {
        return 10
    }
    else if(randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstNumber = getRandomNumber()
    let secondNumber = getRandomNumber()
    cards = [firstNumber, secondNumber]
    sum = firstNumber + secondNumber
    renderGame()
}

function renderGame() {
cardEl.textContent = "Cards: "
for(i = 0; i < cards.length; i += 1)
    {
        cardEl.textContent += cards[i] + " "
    }    

sumEl.textContent = "Sum : " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomNumber()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
}