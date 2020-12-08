/*
 Each object in JS:
 - has a prototype (nguyên mẫu) 
 - All Object inherit their properties and methods from their prototype
 A prototype is an object itself
 */

//  Object.prototype
// Person.prototype

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // create a method
  // this.calculateAge = () => {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // };
}

//   Calculate age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// get full name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// gets married
Person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
};

const hung = new Person("Hung", "Chu", "09-16-1997");
const han = new Person("Han", "Chu", "09-16-1996");

console.log(hung.calculateAge());
console.log(han.calculateAge());

han.getsMarried("Lee");

console.log(hung.getFullName());
console.log(han.getFullName());

console.log(han.hasOwnProperty("firstName"));
