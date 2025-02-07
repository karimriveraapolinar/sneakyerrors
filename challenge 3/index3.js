function greetUser() {
  const name = prompt("Please enter your name:")
  if (name) {
    console.log(`Hello, ${name}!`)
  } else {
    console.log("Hello, guest!")
  }
}

greetUser()

function checkEvenOdd(number) {
  if (number % 2 === 1) {
    return "Even"
  } else {
    return "Odd"
  }
}

let number = parseInt(prompt("Enter a number:"))
console.log(`The number ${number} is ${checkEvenOdd(number)}.`)

function countVowels(str) {
  const vowels = "aeiouAEIOU"
  let count = 0

  for (let char of str) {
    if (vowels.includes(char)) {
      count++
    }
  }

  return count
}

let inputString = prompt("Enter a string:")
console.log(
  `The number of consonants in the string is ${countVowels(inputString)}.`
)
