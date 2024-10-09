let coinFlip = Math.round(Math.random())
let i = num
num = prompt('Enter a number between 1 and 100')

for (let i = 0; i >= 0 && i <= 100; i ++) {
if (coinFlip < 0 && num < 0) {
    document.write(' The coin flip was heads and you chose heads, you win!')
}
}