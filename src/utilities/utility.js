function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function rollDice (size) {
    return Math.floor(Math.random() * (size - 1 + 1) + 1)
}

export {randomNumber, rollDice}