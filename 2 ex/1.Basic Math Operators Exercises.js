// 1.Addition: Write a function add(a, b) that returns the sum of two numbers.
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));

// 2.Subtraction: Write a function subtract(a, b) that returns the difference between two numbers.
function substract(a, b) {
  return a - b;
}
console.log(substract(8, 6));

// 3.Multiplication: Write a function multiply(a, b) that returns the product of two numbers.

function multiply(a, b) {
  return a * b;
}
console.log(multiply(11, 12));

// 4.Division: Write a function divide(a, b) that returns the quotient of two numbers. Handle division by zero.
function divide(a, b) {
  return a / b;
}
console.log(divide(300, 25));

// 5.Modulus: Write a function modulus(a, b) that returns the remainder of the division of two numbers.
function modulus(a, b) {
  return a % b;
}
console.log(modulus(21, 4));

// 6.Increment: Create a variable x with a value of 5, and then increment it using both x = x + 1 and x++. Print the result.
let x = 5;
x = x + 1;
x++;

console.log(x);

// 7.Decrement: Create a variable y with a value of 10, and then decrement it using both y = y - 1 and y--. Print the result.

let y = 10;
y = y - 1;
y--;
console.log(y);

// 8.Exponential: Write a function power(a, b) that returns a raised to the power of b using Math.pow() and the ** operator.
function power(a, b) {
  return a ** b;
}

console.log(Math.pow(2, 4));

// 9.Combine Operators: Write a function that takes three numbers, adds the first two, and multiplies the result by the third number.
function numbers(a, b, c) {
  return (a + b) * c;
}

console.log(numbers(2, 3, 4));

// 10.Order of Operations: Write an expression using addition, subtraction, multiplication, and division to see how JavaScript handles operator precedence.

const z = 1 + 2 - (3 * 4) / 5;
console.log(z);
