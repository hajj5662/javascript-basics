// Part 1: Data Types
console.log("=== Part 1: Data Types ===");

// 1. Create variables of different data types
let greetingMessage = "Welcome to JavaScript Land!"; // String
let luckyNumber = 27;                                 // Number
let isActive = false;                                 // Boolean
let emptyValue = null;                                // Null
let notAssigned;                                      // Undefined
let userProfile = { username: "Bob", age: 25 };     // Object
let uniqueIdentifier = Symbol("userID");             // Symbol

// 2. Print these variables to the console
console.log("String:", greetingMessage);
console.log("Number:", luckyNumber);
console.log("Boolean:", isActive);
console.log("Null:", emptyValue);
console.log("Undefined:", notAssigned);
console.log("Object:", userProfile);
console.log("Symbol:", uniqueIdentifier);

// Part 2: Arrays
console.log("=== Part 2: Arrays ===");

// 1. Create an array of random integers
let randomIntegers = [15, 22, 7, 34, 5];

// 2. Use the map method to create a new array where each number is multiplied by 3
let tripledIntegers = randomIntegers.map(num => num * 3);
console.log("Tripled Integers:", tripledIntegers);

// 3. Use the filter method to create a new array that only includes numbers greater than 10
let filteredIntegers = randomIntegers.filter(num => num > 10);
console.log("Filtered Integers (greater than 10):", filteredIntegers);

// 4. Use the reduce method to find the sum of all numbers in the array
let totalSum = randomIntegers.reduce((acc, num) => acc + num, 0);
console.log("Total Sum of Integers:", totalSum);

// 5. Use the forEach method to print each number in the array to the console
console.log("Integers in the Array:");
randomIntegers.forEach(num => console.log(num));

// Part 3: Functions
console.log("=== Part 3: Functions ===");

// 1. Create a function named sayHello
function sayHello(personName) {
    console.log(`Greetings, ${personName}! Enjoy your coding journey.`);
}

// Test the sayHello function
sayHello("Charlie");

// 2. Create a function named calculateSum
function calculateSum(numArray) {
    return numArray.reduce((acc, num) => acc + num, 0);
}

// Test the calculateSum function
console.log("Sum of Array [4, 5, 6]:", calculateSum([4, 5, 6]));

// 3. Create a function named getMaxValue
function getMaxValue(numArray) {
    return Math.max(...numArray);
}

// Test the getMaxValue function
console.log("Maximum in Array [15, 22, 7, 34, 5]:", getMaxValue(randomIntegers));