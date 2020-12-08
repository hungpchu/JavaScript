// create constructor in ES6
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDay = new Date(dob);
  }
  // Method greeting and calculateAge by default get added to
  // prototype
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
  calculateAge() {
    const diff = Date.now() - this.birthDay.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  // static method
  static addNumber(x, y) {
    return x + y;
  }
}

const hung = new Person("Hung", "Chu", "09-16-1997");

console.log(hung.greeting());
console.log(hung.calculateAge());

console.log(Person.addNumber(1, 1));
