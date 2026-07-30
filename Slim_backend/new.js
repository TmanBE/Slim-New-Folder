let fName = "Tolulope";

// console.log(fName);

// if (fName === "Tolulope") {
//     console.log("Hello Tolulope");
// } else {
//     console.log("Hello Guest");
// }

//fName === "Tolulope" ? console.log("Hello Tolulope") : console.log("Hello Guest")

// let num = 26;
// if (num > 0) {
//     if (num % 2 == 0) {
//         console.log("The number is even and positive")
//     } else {
//         console.log("The number is odd and positive")
//     }
// } else if (num < 0) {
//     if (num % 2 == 0) {
//         console.log("The number is even and negative")
//     } else {
//         console.log("The number is odd and negative")
//     }
// } else {
//     console.log("The number is zero")
// }

// num > 0 ? (num % 2 == 0 ? console.log("The number is even and positive") : console.log("The number is odd and negative"))
// : num < 0 ? (num % 2 == 0 ? console.log("The number is even and positive") : console.log("The number is odd and negative"))
// : console.log("The number is zero")

let num = 15;
let index = 0;

// while (num > 10) {
//     index++
//     console.log(`How many times do i have to print this  ${index}`);
//     num--
// }

// do {
//     index++
//     console.log(`Its about to go down ${index}`);
//     num--;
// } while (num > 10);

// let number = 10;
// console.log(number.toString())
// console.log(typeof number.toString())

const person = {
  name: "John",
  age: 30,
  isStudent: true
};

//console.log(person)

// const emptyArray = new Array(5); // creating an empty array with 5 slots using the Array constructor
// console.log(emptyArray.length); // 5
// console.log(emptyArray); // [ , , , , ] creating an empty array with 5 slots
// console.log(typeof emptyArray); // object

/*function createGreeter(greeting) {
    return function(name) {
        console.log(greeting + ", " + name);
    };
}

let sayHello = createGreeter("Hello");
sayHello("Alice");

let greeting = "Hello";
console.log(greeting[greeting.length - 1])

const song = "Bohemian Rhapsody";
const score = 9.5;
const highestScore = 10;
const output = `One of my favorite songs is "${song}". I rated it ${
  (score / highestScore) * 100
}%.`;
console.log(output); 

let sentence = "JavaScript is awesome!";
let position = sentence.indexOf("fantastic");
console.log(position); // -

// console.log(sentence.charCodeAt(0));
// console.log(sentence.charCodeAt(1));
// console.log(sentence.charCodeAt(2));
// console.log(sentence.charCodeAt(11));
// console.log(sentence.charCodeAt(12));

let char = String.fromCharCode(70);
//console.log(char);

function greet(name) {
  console.log("Hello, " + name + "!");
  console.log(`Hello, ${name}!`);
}

greet("Alice");
greet("Bob");*/

/*function doSomething() {
  console.log("Doing something...");
}

let result = doSomething();
console.log(result);*/

/*let globalVar = "I am a Global Variable";

function iAmGlobalVar(){
    console.log(globalVar);
    let iamLocal = "I am a local variable";
    console.log(iamLocal);
}

iAmGlobalVar();
console.log(globalVar);
//console.log(iamLocal);

function maskEmail(email) {
  let [username, domain] = email.split("@");
  let maskedUsername = username[0] + "*".repeat(username.length - 1);
  return maskedUsername + "@" + domain;
}

let email = "john.doe@example.com";
console.log(maskEmail(email)); // Output: "j***@example.com"

email = "jane.smith@example.com";
console.log(maskEmail(email)); // Output: "j***@example.com"

email = "alice.jones@example.com";
console.log(maskEmail(email)); // Output: "a***@example.com"

email = "bob.wilson@example.com";
console.log(maskEmail(email)); // Output: "b***@example.com"

fahrenheit = celsius * (9/5) + 32
 function celsiusToFahrenheit(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
  }
  
  let celsius = 25;
  let fahrenheit = celsiusToFahrenheit(celsius);
  console.log(`${celsius}°C is equal to ${fahrenheit}°F`);*/

/*let count = 0;

const cardCounter = (card) => {
  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6){
    count++;
  } else if (card === 7 || card === 8 || card === 9){
    count;
  } else if (card === 10 || card === "J" ||card === "Q" || card === "K" || card === "A"){
    count--;
  } if (count > 0){
    return `${count}  Bet`;
  } else {
    return `${count}  Hold`;
  } 
}
 console.log(cardCounter("J"));
 console.log(cardCounter(3));
 console.log(cardCounter(5));
console.log(cardCounter(8));
 console.log(cardCounter(10));

 const truncateString = (str, num) => {
  if (str.length > num){
    return str.slice(0, num) + ".".repeat(3);
  } return str;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));*/


const lunches = [];

const addLunchToEnd = (arr, lunchItem) => {
  arr.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return arr;
}

const addLunchToStart = (arr, lunchItem) => {
  arr.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return arr;
}

const removeLastLunch = (arr) => {
  const removedItem = arr.pop();       // arr is now still [] -> pop() returns undefined
  if (arr.length === 0) {              // this fires, but too late
    console.log("No lunches to remove.");
  } else {
    console.log(`${removedItem} removed from the end of the lunch menu.`);
  } return arr;
}

const removeFirstLunch = (arr) => {
  const removedFirst = arr.shift();
  if (arr.length === 0){
    console.log("No lunches to remove.");
  } else {
    console.log(`${removedFirst} removed from the start of the lunch menu.`);
  }  return arr;
}

const getRandomLunch = (arr) => {
  if (arr.length === 0) {
    console.log("No lunches available.");
    return arr;
  } 

  const randomIndex = Math.floor(Math.random() * arr.length);
  const lunchItem = arr[randomIndex];
  console.log(`Randomly selected lunch: ${lunchItem}`);
}

const showLunchMenu = (arr) => {
  if (arr.length === 0) {
    console.log("The menu is empty.");
    return;
  }
  console.log(`Menu items: ${arr.join(", ")}`);
}

console.log(addLunchToEnd(lunches, "Tacos"));

console.log(removeLastLunch(["Stew", "Soup", "Toast"]));

console.log(removeLastLunch(["Sushi", "Pizza", "Noodles"]));

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

const golfScore = (num1, num2) => {
  if (num2 === 1){
    return "Hole-in-one!";
  } else if (num2 <= (num1 - 2)){
    return "Eagle";
  } else if (num2 <= (num1 - 1)){
    return "Birdie";
  } else if (num2 === num1){
    return "Par";
  } else if (num2 === (num1 + 1)){
    return "Bogey";
  } else if (num2 === (num1 + 2)){
    return "Double Bogey";
  } else {
    return "Go Home!";
  }
}

console.log(golfScore(1, 1));
console.log(golfScore(3, 1));
console.log(golfScore(4, 1));
console.log(golfScore(5, 1));
console.log(golfScore(4, 2));
console.log(golfScore(5, 2));
console.log(golfScore(3, 2));
console.log(golfScore(3, 3));
console.log(golfScore(4, 3));
console.log(golfScore(3, 4));
console.log(golfScore(4, 4));
console.log(golfScore(5, 4));
console.log(golfScore(3, 5));
console.log(golfScore(4, 5));
console.log(golfScore(5, 5));
console.log(golfScore(4, 6));
console.log(golfScore(5, 6));
console.log(golfScore(3, 7));
console.log(golfScore(5, 7));
console.log(golfScore(4, 8));
console.log(golfScore(5, 9));
