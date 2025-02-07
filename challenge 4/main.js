const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"]

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}

const students = {
  Alice: 85,
  Bob: 92,
  Charlie: 78,
  Diana: 90,
  Eve: 88,
}

for (const student in students) {
  console.log(`${student}: ${students[student]}`)
}

const numbers = [23, 45, 67, 89, 12, 34, 56]

function findHighestNumber(arr) {
  let highest = arr[0]
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i]
    }
  }
  return highest
}

console.log(`The lowest number is: ${findHighestNumber(numbers)}`)
