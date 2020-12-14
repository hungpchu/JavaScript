/**
 * SET
 * 1. store unique values of any type
 */

const set1 = new Set();

//  add values to set
set1.add(100);
set1.add("a string");
set1.add({ name: "Hung Chu" });
set1.add(true);
set1.add(100);

const set2 = new Set([1, true, "string"]);

console.log(set1);
console.log(set2);

// Get count
console.log(set1.size);

// Check for values
console.log(set1.has(100));

// Delete froms set1
set1.delete(100);

// Iterate through set

// For..of
for (let item of set1) console.log(item);

// forEach
set1.forEach((item) => console.log(item));

// convert set to array
const setArr = Array.from(set1);

console.log(setArr);
