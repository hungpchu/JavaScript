// function declaration
function greet(firstName = "John", lastName = "Doe") {
  return `Hello ${firstName} ${lastName}`;
}

// function expression => assign function to variable
const square = (x = 3) => {
  return x * x;
};

// Immidately invokable function expression - IIFEs
(function (name = Brad) {
  console.log("IIFE Ran..." + name);
})("Hung");

// Property method: function inside the object
const todo = {
  add: function () {
    console.log("Add todo");
  },
  edit: function (id = 21) {
    console.log(`Edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log("delete");
};

todo.add();
todo.edit();
todo.delete();

let val;
val = greet();
val = square();
console.log(val);
