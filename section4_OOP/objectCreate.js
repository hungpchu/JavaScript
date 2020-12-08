const personPrototype = {
  // protype method
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
};

// Object.create take personPrototype
const hung = Object.create(personPrototype);
hung.firstName = "Hung";
hung.lastName = "Chu";
hung.age = 23;

console.log(hung);

console.log(hung.greeting());

const han = Object.create(personPrototype, {
  firstName: { value: "Han" },
  lastName: { value: "Lee" },
  age: { value: 24 },
});

console.log(han);
