function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Even"
  } else {
    return "Odd"
  }
}

let number = parseInt(prompt("Enter a number:"))
console.log(`The number ${number} is ${checkEvenOdd(number)}.`)

function checkVotingEligibility(age) {
  if (age >= 18) {
    return "Eligible to vote"
  } else {
    return "Not eligible to vote"
  }
}

let age = parseInt(prompt("Enter your age:"))
console.log(`You are ${checkVotingEligibility(age)}.`)

function checkNumberSign(number) {
  if (number > 0) {
    return "Positive"
  } else if (number < 0) {
    return "Negative"
  } else {
    return "Zero"
  }
}

number = parseInt(prompt("Enter a number:"))
console.log(`The number ${number} is ${checkNumberSign(number)}.`)
