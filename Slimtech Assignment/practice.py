#Learning loops in python
#For loop
number = [2,4,7,90,12,23]
total = 0

#for x in number:
    #total += x
#print(total)

text = "python"
reversed_text = ""

'''for char in text:
    reversed_text = char + reversed_text
print(reversed_text) '''

#FizzBuzz Challenge

'''for x in range(51):
    if x % 3 == 0 and x % 5 == 0:
        print("FizzBuzz")
    elif x % 3 == 0:
        print("Fizz")
    elif x % 5 == 0:
        print("Buzz")
    else:
        print(x)'''

'''x = 1

while x <= 50:
    if x % 3 == 0 and x % 5 == 0:
        print("FizzBuzz")
    elif x % 3 == 0:
        print("Fizz")
    elif x % 5 == 0:
        print("Buzz")
    else:
        print(x)

    x += 1'''


i = 1

'''while i <= 5:
    j = 1
    while j <= 5:
        print(i * j, end = "\t")
        j += 1
    print()

    i += 1'''

'''name = input("What is your name? ")
age = int(input("what is your current age? "))

if age >= 30:
    print("You must be less than 30 years of age to proceed further")
else:
    year = 30 - age
    print(f"Hi {name}, you will turn 30 in {year} years")'''

'''num = int(input("Enter a number! "))

if (num % 2 == 1):
    print("This is an Odd Number")

else:
    print("This is an Even number")'''

for x in range(1,21):
    if x % 3 == 0 and x % 5 == 0:
        print("FizzBuzz")
    elif x % 3 == 0:
        print("Fizz")
    elif x % 5 == 0:
        print("Buzz")
    else:
        print(x)





