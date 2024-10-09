//There are only a few values in JavaScript that are considered falsy:

//false: The Boolean value false is obviously falsy.
//0: The number zero is falsy.
//-0: Negative zero is also falsy.
//0n: BigInt zero is falsy.
//"" (Empty string): An empty string with no characters is falsy.
//null: Represents the absence of any value and is falsy.
//undefined: Indicates a variable that has been declared but not assigned a value, and is falsy.
//NaN: Stands for "Not-a-Number" and is falsy.

// Truthy Values in JavaScript
// All other values are considered truthy. This includes:

// Non-zero numbers: Any number other than 0 or -0, whether positive or negative (e.g., 1, -2, 3.14).
// Non-empty strings: Any string with one or more characters (e.g., "hello", "0", "false").
// true: The Boolean value true is obviously truthy.
// Objects: All objects are truthy, including empty objects ({}) and arrays ([]).
// Symbols: Any Symbol value is truthy.
// BigInts: Any BigInt value that is not 0n is truthy.
// Functions: Any function, even if it does nothing, is truthy.

// if ("hello") {
//   console.log("This is truthy!"); // This will print
// }

// if (0) {
//   console.log("This is falsy!"); // This will not print
// }

// if ({}) {
//   console.log("Empty objects are truthy!"); // This will print
// }

// if (NaN) {
//   console.log("NaN is falsy!"); // This will not print
// }

// if (undefined) {
//   console.log("Undefined is falsy!"); // This will not print
// }

// if ([]) {
//   console.log("Empty arrays are truthy!"); // This will print
// }
