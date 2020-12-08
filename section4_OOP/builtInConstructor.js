// String

const name1 = "Hung";
const name2 = new String("Hung");

name2.foo = "bar";

console.log(name1);
console.log(name2);

console.log(typeof name1);
console.log(typeof name2);

// Regular Expression
const re1 = /\w+/;
const re2 = new RegExp("\\w+");

console.log(re1);
console.log(re2);
