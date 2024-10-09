// 1.AND (&&): Write a function that takes two boolean values and returns true only if both are true.

function XYZ(a, b) {
  if (a && b) {
    console.log(true);
  } else {
    console.log(false);
  }
}
XYZ(true, true);

// 2.OR (||): Write a function that takes two boolean values and returns true if at least one is true.

const a = true;
const b = true;

switch (a || b) {
  case true:
    console.log(true);
    break;
  case false:
    console.log(false);
    break;
  default:
    console.log("Nothing");
    break;
}

// 3.NOT (!): Write a function that takes a boolean value and returns the opposite.

function rewers(a) {
  return a != a;
}
let resualt = rewers(true);
console.log(resualt);

// 4.Combining Logical Operators: Create an expression using &&, ||, and ! to evaluate a set of conditions.

console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log(true != true);
console.log(true != false);
console.log(false != false);

// 5.Short-Circuit Evaluation: Demonstrate short-circuiting in JavaScript using && and || in expressions with functions that log messages.

function returnTrue() {
  console.log("This is true");
  return true;
}
function returnFalse() {
  console.log("This is false");
  return false;
}

const resualt_AND = returnTrue() && returnFalse();
console.log("resualt of && is " + resualt_AND);

const resualt_OR = returnTrue() || returnFalse();
console.log("resualt of || is " + resualt_OR);

// 6.Conditional Logic with AND: Write a function that returns "Pass" if both inputs are true, otherwise "Fail".

function conditionalLogicAnd(a, b) {
  if (a && b) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}
conditionalLogicAnd(true, true);

// 7.Conditional Logic with OR: Write a function that returns "Allow" if at least one of the two inputs is true, otherwise "Deny".

function conditionalLogicOr(a, b) {
  if (a || b) {
    console.log("Allow");
  } else {
    console.log("Deny");
  }
}
conditionalLogicOr(true, true);

// 8. Truthy and Falsy Values: Test various JavaScript values (like 0, "", null, undefined, NaN) with logical operators to see which are treated as true or false.

Boolean(0);
Boolean("");
Boolean(null);
Boolean(undefined);
Boolean(NaN);

//In JavaScript, "truthy" and "falsy" values are used in contexts where a Boolean value is expected, such as in conditional statements.
// A value is considered "truthy" if it evaluates to true when converted to a Boolean, and "falsy" if it evaluates to false.
