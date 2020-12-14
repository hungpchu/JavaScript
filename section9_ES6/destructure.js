/**
 * Destructuring Assignment
 */

let a, b;
[a, b] = [100, 200];
//  Rest pattern for array
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

console.log(rest);
//  Rest pattern for object
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

console.log(rest);

//  Array Destructuring
const people = ["John", "Beth", "Mike"];

let [person1, person2, person3] = people;

// Parse array returned from function
function getPeople() {
  return ["John", "Beth", "Mike"];
}

[person1, person2, person3] = getPeople();

console.log(person1, person2, person3);

// Object Destructing
const person = {
  name: "Hung Chu",
  age: 23,
  city: "Hanoi",
  gender: "Male",
};

// old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city;

// new ES6
const { name, age, city } = person;

console.log(name, age, city);
