// define object
const person = {
  firstName: "Hung",
  lastName: "Chu",
  age: 23,
  email: "hungpchu@gmail.com",
  hobbies: ["gym", "music", "sport"],
  address: {
    city: "Ha Noi",
    state: "VN",
  },
  getBirthYear: function () {
    // use this key word
    return 2020 - this.age;
  },
};

let val;
val = person;
// get the firstName of person
val = person.firstName;
val = person["firstName"];

val = person.age;
val = person.hobbies[1];

val = person.address;
// have () for function
val = person.getBirthYear();

const people = [
  { name: "John", age: 30 },
  { name: "Mike", age: 1 },
];

console.log(val);
