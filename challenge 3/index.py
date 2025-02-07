name = input("Enter your name: ")
def greet_user(name):
  print(f"Hello, {name}!")
greet_user(name)


def check_even_odd(number):
  if number % 2 == 0:
    return "even"
  else:
    return "odd"

number = int(input("Enter a number: "))
result = check_even_odd(number)
print(f"The number {number} is {result}.")


def count_vowels(s):
  vowels = "aeiouAEIOU"
  return sum(1 for char in s if char in vowels)

string = input("Enter a string: ")
vowel_count = count_vowels(string)
print(f"The number of vowels in the string is {vowel_count}.")