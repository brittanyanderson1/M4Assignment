let coinFlip

let numberOfFlips = parseInt(prompt("Enter how many times you want to flip the coin."), 10);

for (let i = 0; i < numberOfFlips; i++) {
    coinFlip = Math.round(Math.random())

    if (coinFlip === 0) {
        console.log("it's heads!")
    } else {
        console.log("it's tails!")
    }
}