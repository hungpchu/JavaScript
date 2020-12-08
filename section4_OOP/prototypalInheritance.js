// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  // call() that call the construtor Person
  // inherit constructor from parent Person
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype method
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.construtor = Customer;

const person1 = new Person("Hung", "Chu");

console.log(person1);

// create a Customer
const customer1 = new Customer("Han", "Chu", "999-999-9999", "standard");

console.log(customer1);

// Customer greeting -> override parent Person's greeting
Customer.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
};

console.log(person1.greeting());
console.log(customer1.greeting());
