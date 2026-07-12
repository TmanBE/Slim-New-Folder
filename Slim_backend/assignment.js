//1. Declare the following variables
//your name (string)
let myName = "Tolulope";

//your age (number)
let myAge = 39;

//isStudent (boolean)
let isStudent = true;

//favorite Subjects (array of strings)
let favoriteSubjects = ["Geography", "Physics", "Chemistry", "Biology", "Mathematics"];

//2. Use typeof to log the data type of each variable above.
console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof isStudent);
console.log(typeof favoriteSubjects);

//3. Type Coercion
//Create two variables holding numbers as strings:
//let a = "10";
//let b = "5";

//Add them using the + operator, log the result, and explain in your own words why it behaves that way.
//let result = a + b;
//console.log(result); //The result gives a value of 105, this is because the data types are strings, hence it gives the value of 105 but when the data type changes to numbers, the value changes to 15

//Part 2 — Operators
//1. Given the following:
let a = 15;
let b = 4;

//Log the result of: addition, subtraction, multiplication, division, and modulus (%) between a and b.
//Addition
let result = a + b;
console.log(result); //result gives a value of 19

//subtraction
result = a - b;
console.log(result); //result gives a value of 11

//multiplication
result = a * b;
console.log(result); //result gives a value of 60

//division
console.log(a / b); //result gives a value of 3.75

//modulus
console.log(a % b); //result gives a value of 3

//2. Assignment Operators
let score = 50;

//Using +=, -=, and *= (one at a time), update score three times. Log the value after each step
score += 15;
console.log(score); //result gives a value of 65

score -= 12;
console.log(score); //result gives a value of 53

score *= 10
console.log(score); //result gives a value of 530


//3. Comparison Operators
//Write three comparison expressions using >, <=, and ===. Predict the output BEFORE running the code, then check yourself.

total = a > b;
console.log(total); //result outputs a boolean value of true

total = a <= b;
console.log(total); //result outputs a boolean value of false

total = a === b;
console.log(total); //result outputs a boolean value of false

//4. Logical Operators
//Combine two comparisons using && and two using || (e.g., checking if a number is between 10 and 20).

let myNumber = 15;
console.log(myNumber > 10 && myNumber < 20); //result outputs a boolean value of true
console.log(myNumber < 10 || myNumber > 20); //result outputs a boolean value of false

//Part 3 — Conditionals (if / else if / else)
//1. Grade Calculator
//Given a variable score, write if/else if/else statements that log:
//"A" if score >= 90
//"B" if score >= 80
//"C" if score >= 70
//"F" otherwise

let myScore = 79;
if (myScore >= 90) {
    console.log("A");
} else if (myScore >= 80) {
    console.log("B");
} else if (myScore >= 70) {
    console.log("C");
} else {
    console.log("F");
}


//2. Even/Odd + Positive/Negative
//Given a number, log whether it's even or odd, AND whether it's positive, negative, or zero — using nested if statements.

let num = 26;
if (num > 0) {
    if (num % 2 == 0) {
        console.log("The number is even and positive")
    } else {
        console.log("The number is odd and positive")
    }
} else if (num < 0) {
    if (num % 2 == 0) {
        console.log("The number is even and negative")
    } else {
        console.log("The number is odd and negative")
    }
} else {
    console.log("The number is zero")
}

//3. Login Gatekeeper
let age = 16;
let hasPermission = false;

//Write a conditional that logs:
//"Access granted" if age >= 18
//"Access granted with permission" if age is between 13 and 17 AND hasPermission is true
//"Access denied" otherwise

if (age >= 18) {
    console.log("Access granted");
} else if (age >= 13 && age <= 17 && hasPermission === true) {
    console.log("Access granted with permission");
} else {
    console.log("Access denied");
}


//Part 4 — Challenge: Ticket Price Calculator
//Given age and isStudent, determine the ticket price using these rules:
//Under 5 → Free
//Age 5–17 → $10
//Age 18+ and isStudent is true → $12
//Everyone else → $15
//Use if/else if/else and comparison/logical operators together to solve this.

if (age < 5) {
    console.log("Free");
} else if (age >= 5 && age <= 17) {
    console.log("$10");
} else if (age >= 18 && isStudent === true) {
    console.log("$12");
} else {
    console.log("$15")
}