const rollButton = document.querySelector('#roll-button')
let diceRoll = []
const numOfDice= document.querySelector ('#number-of-dice')
const total = document.querySelector('#Total')
rollButton.addEventListener("click", function () {
    
    let numberOfRollDice = numOfDice.value
    let dice = 0
    while (dice < numberOfRollDice) {
        diceRoll.push(Math.floor(Math.random() * 6+1));
        dice += 1
    }

    let sum = diceRoll.reduce(function (a, b) {
        return a+b;
    }, 0);
    total.innerHTML = +sum
})

const showAllRolls = document.querySelector('#number-of-rolls')
const allRollsList= document.querySelector('#all-rolls')
showAllRolls.addEventListener("click", function() {
    for (let i=0; i < diceRoll.length; i++) {

        allRollsList.innerHTML += "<li class= 'dice'>" + diceRoll[i] + "</li>"
    }
})

const resetButton=document.querySelector ("#reset-button")
resetButton.addEventListener("click", function() {

    numOfDice.value = ''
    allRollsList.innerHTML= ''
    total.innerHTML= ''
    diceRoll= []
})