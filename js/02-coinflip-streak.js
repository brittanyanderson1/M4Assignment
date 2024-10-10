let coinFlips

let winningFlip = 0

do {
    coinFlips = Math.round(Math.random())

    if (coinFlips === 0) {
        console.log("The flip is heads!")
        winningFlip++
    } else {
        console.log("The flip is tails!")
    }
} while (coinFlips === 0)

console.log(`You won ${winningFlip} times in a row!`)