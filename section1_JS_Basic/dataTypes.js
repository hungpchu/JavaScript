/*
  Primitive Data Types:
  - stored directly in the location the variable access
  - stored on the stack
  - String, Number (int, double, float), Boolean, Null (empty value), Undefined (not assigned value), Symbols (ES6)

  Reference Data Type:
  - accessed by reference
  - object(data) are stored on the heap
  - store a pointer to a location in memory
  - Arrays, Object, Function

  JavaScript:
  - is a dynamically typed languages
  - types are associated with values not variables
  - the same variable can hold multiple types
  - we not need to specific types
  - there are super set of JS to allow static typing (TypeScript)
 */

//  primitive type
// String
const name = "John Doe";
// Number
const age = 45;
// Boolean
const hasKid = true;
//  Null
const car = null;
// Undefined
// const test = undefined will give error
let test;
// Symbol
const sym = Symbol();

// Reference Type
// Array
const hobby = ["movies", "music"];
// Object
const address = {
  city: "Boston",
  state: "MA",
};
// Date
const today = new Date();

console.log(typeof name);
console.log(typeof age);
console.log(typeof hasKid);
console.log(typeof car);
console.log(typeof test);
console.log(typeof sym);

console.log(typeof movies);
console.log(typeof address);
console.log(typeof today);
