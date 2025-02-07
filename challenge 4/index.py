fruits = ["apple", "banana", "cherry", "date", "elderberry"]
for fruit in fruits:
    print(fruit)

students = {
    "Alice": 85,
    "Bob": 92,
    "Charlie": 78,
    "Diana": 90,
    "Evan": 88
}

for student, grade in students.items():
    print(f"{student}: {grade}")

numbers = [23, 45, 12, 67, 34, 89, 2]

def find_highest_number(arr):
    if not arr:
        return None
    highest = arr[0]
    for num in arr:
        if num > highest:
            highest = num
    return highest

print(f"The highest number is: {find_highest_number(numbers)}")
