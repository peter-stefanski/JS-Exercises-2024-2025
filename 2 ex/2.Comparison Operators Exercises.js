// 1.Equal (==): Compare two numbers using the == operator and print whether they are equal.
// const x = 5;
// const y = 10;

if (5 == 10) {
  console.log(true);
} else {
  console.log(false);
}

// 2.Strict Equal (===): Compare two variables, one number and one string, using === and print the result.

const a = 12;
const b = "car";

if (a === b) {
  console.log("that is true");
} else {
  console.log("That is not true");
}

// 3.Not Equal (!=): Compare two numbers using the != operator and print whether they are not equal.

if (5 != 9) {
  console.log("True");
} else {
  console.log("False");
}

// 4.Strict Not Equal (!==): Compare a number and a string using !== to see if they are not strictly equal.

if (8 !== "Beer") {
  console.log("Option_01");
} else {
  console.log("Option_02");
}

// 5.Greater Than (>): Write a function isGreater(a, b) that returns true if a is greater than b.

function isGreater(a, b) {
  if (a > b) {
    console.log("true");
  } else {
    console.log("false");
  }
}
isGreater(5, 4);

// 6.Less Than (<): Write a function isLess(a, b) that returns true if a is less than b.

function isLess(a, b) {
  if (a < b) {
    console.log("True");
  } else {
    console.log("False");
  }
}

isLess(13, 21);
// 7.Greater Than or Equal (>=): Write a function isGreaterOrEqual(a, b) that checks if a is greater than or equal to b.

function isGreaterOrEqual(a, b) {
  if (a >= b) {
    console.log("Greater or equal");
  } else {
    console.log("Less");
  }
}

isGreaterOrEqual(4, 4);
// 8.Less Than or Equal (<=): Write a function isLessOrEqual(a, b) that checks if a is less than or equal to b.
function isLessOrEqual(a, b) {
  if (a <= b) {
    console.log("Less or equal");
  } else {
    console.log("More");
  }
}

isLessOrEqual(88, 99);

// 9.Comparison of Different Types: Compare a number and a string numerically using == and === to see the difference.
let aNumber = 5;
let aString = "5";

const firstOption = aNumber == aString;
console.log(firstOption);
const secondOption = aNumber === aString;
console.log(secondOption);

// 10.Using Comparison in Conditional Statements: Write a function that takes two numbers and prints "Equal" if they are the same or "Not equal" if they are different.

function conState(a, b) {
  if (a === b) {
    console.log("Equel");
  } else if (a !== b) {
    console.log("Not equel");
  }
}
conState(4, 4);
