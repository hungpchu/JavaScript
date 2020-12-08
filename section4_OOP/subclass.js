// Parent class
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

// Customer is subclass of Person
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    // call parent class Person
    super(firstName, lastName);
    this.phone = phone;
    this.membership = membership;
  }
  // override greeting method from Person
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName} welcome our customer`;
  }
  static getMembershipCost() {
    return 800;
  }
}

const HungPerson = new Person("Hung", "Chu");
const Hung = new Customer("Hung", "Chu", "888-888-8888", "premium");

console.log(HungPerson.greeting());
console.log(Hung.greeting());

// Call static method
console.log(Customer.getMembershipCost());
