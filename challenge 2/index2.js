for (let i = 1; i <= 10; i++) {
  console.log(i)
}
//

//
let j = 1
while (j <= 5) {
  console.log(j)
  j++
}
//

//
let numbers = parseInt(prompt("Enter a number:"))
let factorial = 1

for (let k = 1; k <= numbers; k++) {
  factorial *= k
}

console.log(`The factorial of ${numbers} is ${factorial}`)
