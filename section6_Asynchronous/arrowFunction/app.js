// function expression
let sayHello = () => {
  console.log("Hello");
};

// one line function not need braces
sayHello = () => console.log("hello");

// return object
sayHello = () => ({ msg: "Hello Object" });

const say = (name) => ({ name: name });

const user = ["Hung", "Chu"];

// map take in parameter as a function which
// is a call back function
const nameLength = user.map((name) => name.length);

console.log(sayHello());
console.log(say("Hung"));

console.log(nameLength);
