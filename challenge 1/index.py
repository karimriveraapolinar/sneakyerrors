def check_even_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"

# Example usage
number = int(input("Enter a number: "))
print(f"The number {number} is {check_even_odd(number)}.")


def check_voting_eligibility(age):
    if age >= 18:
        return "Eligible to vote"
    else:
        return "Not eligible to vote"

# Example usage
age = int(input("Enter your age: "))
print(f"You are {check_voting_eligibility(age)}.")

def check_number_sign(number):
    if number > 0:
        return "Positive"
    elif number < 0:
        return "Negative"
    else:
        return "Zero"

# Example usage
number = int(input("Enter a number: "))
print(f"The number {number} is {check_number_sign(number)}.")