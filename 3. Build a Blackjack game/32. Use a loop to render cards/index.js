let firstCard = 0
let secondCard = 0
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    if (!isAlive){
        isAlive = true
        firstCard = Math.round(Math.random()*14)
        secondCard = Math.round(Math.random() * 14)
        cards.push(firstCard)
        cards.push(secondCard)
        sum = firstCard + secondCard
        renderGame()
    }
    else{
        console.log("the game is going on...")
    }
}

function renderGame() {
    // Create a for loop that renders out all the cards instead of just two
    let cardMsg = "Cards:"
    for (i=0;i<cards.length;i++){
        cardMsg += " " + cards[i]
    }
    cardsEl.textContent = cardMsg
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        resetTheGame()
    } else {
        message = "You're out of the game!"
        resetTheGame()
    }
    messageEl.textContent = message
}


function newCard() {
    let card = 6
    sum += card
    // Push the card to the cards array
    cards.push(card)
    console.log(cards)
    renderGame()
}

function resetTheGame(){
    isAlive = false
    sum = 0
    cards = []
}