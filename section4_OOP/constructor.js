/*
 Constructor:
 - used for creating multiple instance of object

 "this" key word:
 - refers to the current instance of the object
 */

// just one instance
const Hung = {
  name: "Hung",
  age: 23,
};

//  Person constructor (multiple instance)
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  // create a method
  this.calculateAge = () => {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  // using "this" in the local scope refer to the current person instance
  // like instance hung and john below
  // console.log(this);
}
// using "this" in the global scope
// will get the window object
// console.log(this);

// init the object -> object Person
const hung = new Person("hung", "09/16/1997"),
  john = new Person("john", "09/16/1996");

console.log(hung.calculateAge());
console.log(john.calculateAge());

// console.log(Hung);
