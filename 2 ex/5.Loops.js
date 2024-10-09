// 1.Print Numbers from 1 to 10: Write a loop that prints numbers from 1 to 10.
for (let x = 0; x <= 10; x++) {
  console.log(x);
}
// 2.Print Even Numbers between 1 and 20: Write a loop that prints only the even numbers between 1 and 20.

for (let y = 0; y <= 20; y++) {
  if (y % 2 == 0) {
    console.log(y);
  }
}

// 3.Print Array Elements: Given an array let fruits = ["apple", "banana", "cherry"];, write a loop to print each fruit in the array.

const fruits = ["apple", "banana", "cherry"];
for (const element of fruits) {
  console.log(element);
}

// 4.Sum of Array Elements: Write a loop that calculates the sum of all numbers in an array let numbers = [1, 2, 3, 4, 5];

let numbers = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
// 5.Countdown from 10 to 1: Write a loop that prints numbers from 10 down to 1.

for (i = 10; i >= 1; i--) {
  console.log(i);
}

// 6.Repeat a String 5 Times: Write a loop that prints the string "Hello" five times.
// const word = "Hello";

for (let i = 0; i < 3; i++) {
  console.log("Hello");
}

// 7.Print Multiples of 3 from 1 to 30: Write a loop that prints all multiples of 3 between 1 and 30.
for (let k = 0; k <= 30; k++) {
  if (k % 3 == 0) {
    console.log(k);
  }
}

// 8.Print Characters of a String: Write a loop that prints each character of the string "JavaScript" on a new line.

let language = "JavaScript";
for (let i = 0; i < language.length; i++) {
  console.log(language[i]);
}

// 10.FizzBuzz: Create a function that prints numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number; for multiples of 5, print "Buzz". For multiples of both, print "FizzBuzz".

function XYZ() {
  for (let i = 0; i <= 100; i++) {
    if (i % 15 == 0) {
      console.log("FizzBuzz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}

XYZ();
