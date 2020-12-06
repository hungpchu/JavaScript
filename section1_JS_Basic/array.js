// array: mutated, iterator and zero based

// Create some array
const numbers = [43, 56, 33, 23, 44, 36, 5];
// 2nd way to create array
const numbers2 = new Array(4, 5, 6, 7);
const fruits = ["apple", "banana", "orange", "pear"];
// mixed array
const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

// get the array length
val = numbers.length;

// check if is array
val = Array.isArray(numbers);

// Get the single value
val = numbers[0];

// insert into array
numbers[2] = 100;

// find index of value
val = numbers.indexOf(100);

// mutating arrays
// add on to end -> 250 to the end
numbers.push(250);

// add on to front -> 120 to then front
numbers.unshift(120);

// take off from end -> 250 gone
numbers.pop();

// take off from the front -> 120 gone
numbers.shift();

// splice values -> take 56 off
numbers.splice(1, 1);
// 100,23,44 off
numbers.splice(1, 3);

// reverse
numbers.reverse();

// concat array
val = numbers.concat(numbers2);

//  sort
val = fruits.sort();

// sort the number array
val = numbers.sort(function (x, y) {
  return x - y;
});

// reverse sort number array
val = numbers.sort(function (x, y) {
  return y - x;
});

// find
function under50(num) {
  return num < 50;
}

// return the first number is under 50
val = numbers.find(under50);

console.log(numbers);
console.log(val);
