// 1.Calculator: Write a function calculator(a, b, operator) that takes two numbers and an operator (+, -, *, /) and returns the result of the operation.

// let operator = prompt("Enter operator: ");
// let a = parseFloat(prompt("Enter first number: "));
// let b = parseFloat(prompt("Enter second number: "));

// function calculator(a, b, operator) {
//   switch (operator) {
//     case "+":
//       result = a + b;
//       break;
//     case "-":
//       result = a - b;
//       break;
//     case "*":
//       result = a * b;
//       break;
//     case "/":
//       if (b === 0) {
//         console.log("Error: Division by zero is not allowed");
//         return;
//       }
//       result = a / b;
//       break;
//   }
//   console.log(`${a} ${operator} ${b} = ${result}`);
// }

// calculator(a, b, operator);
// 2.Greeting Function: Create a function greet(name, timeOfDay) that prints a greeting based on the time of day (e.g., "Good morning, John").

// let name = prompt("What time it is?");
// let timeofDay;

// function greet(name, timeOfDay) {
//   for (let name = 0; name < 24; name++) {
//     switch (name) {
//       case 0 < name < 6:
//         timeofDay = "Good night";
//         break;
//       case 7 < name < 12:
//         timeofDay = "Good morning";
//         break;
//       case 13 < name < 18:
//         timeofDay = "Good afternoon";
//         break;
//       case 19 < name < 24:
//         timeofDay = "Good night";
//         break;
//       default:
//         console.log("Another number");
//         break;
//     }
//   }
//   console.log(`${name} = ${timeOfDay}`);
// }
// greet(name, timeOfDay);

// Here I wanted to do this by myself, I was trying it for 2 days and ask (with my code) the ChatGPT, sorry mate ;(

// let name = prompt("What is your name?");
// let hour = parseInt(prompt("What time is it? (Enter hour in 24h format)"));
// let timeOfDay;

// function greet(name, hour) {
//   if (hour >= 0 && hour < 6) {
//     timeOfDay = "Good night";
//   } else if (hour >= 6 && hour < 12) {
//     timeOfDay = "Good morning";
//   } else if (hour >= 12 && hour < 18) {
//     timeOfDay = "Good evening";
//   } else if (hour >= 18 && hour <= 24) {
//     timeOfDay = "Good night";
//   } else {
//     console.log("Error, not correct number");
//     return;
//   }
//   console.log(`${timeOfDay}, ${name}!`);
// }

// greet(name, hour);

// 3.Random Number Generator: Write a function randomNumber(min, max) that returns a random number between min and max.

let min = parseInt(prompt("Type min number: "));
let max = parseInt(prompt("Type max number: "));

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

randomNumber(min, max);

const showTheNumber = randomNumber(min, max);
console.log(Math.floor(showTheNumber));

// 4.Convert Temperature: Create a function convertTemperature(value, unit) that converts temperatures between Celsius and Fahrenheit.

// let ValueType = parseInt(prompt("Type Celsius number"));
// let UnitType = parseInt(prompt("Type Celsius number"));

let value = parseFloat(prompt("Enter a value number: "));
let unit = prompt("Choose which unit you want to use (C or K) : ");

function convertTemerature(value, unit) {
  let convertValue;
  if (unit === "C") {
    convertValue = value * 1.8 + 32;
    console.log(
      `${value} degrees Celsius is  equel to ${convertValue.toFixed(
        2
      )} degrees Fahrenheit`
    );
  } else if (unit === "K") {
    convertValue = (value - 32) / 1.8;
    console.log(
      `${value} degrees Fahrenheit is equel to ${convertValue.toFixed(
        2
      )} degrees Celsius`
    );
  } else {
    console.log("Invalid units");
  }
}
convertTemerature(value, unit);

// 5.Countdown: Write a function countdown(seconds) that prints a countdown from a given number of seconds to 0.

let num = parseFloat(prompt("Start from this number to 0:"));

function countdown(num) {
  let count = setInterval(function () {
    if (num >= 0) {
      console.log(`Count from ${num} to 0`);
      num--;
    } else {
      console.log("Done");
      clearInterval(count);
    }
  }, 1000);
}

countdown(num);
