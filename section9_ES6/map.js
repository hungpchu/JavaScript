/**
 * Map
 * 1. An object that holds key, value pair
 * 2. can used any type as a key or value
 */

const map1 = new Map();

//  Set keys
const key1 = "some string",
  key2 = {},
  key3 = () => {};

// Set map value by key
map1.set(key1, "Value of key1");
map1.set(key2, "Value of key2");
map1.set(key3, "Value of key3");

// Get values by key
console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));

// Count values
console.log(map1.size);

// Iterating maps
// Loop using for...of to get keys and values
for (let [key, value] of map1) console.log(key, value);

// Iterate keys only
for (let key of map1.keys()) console.log(key);

// Iterate value only
for (let value of map1.values()) console.log(value);

// Loop with forEach
map1.forEach((value, key) => {
  console.log(key, value);
});

// Convert To Arrays

// Create an array of the key value pairs
const keyValuePair = Array.from(map1);
console.log(keyValuePair);

// Create an array of the key value pairs
const valuePair = Array.from(map1.values());
console.log(valuePair);

// Create an array of the key value pairs
const keyPair = Array.from(map1.keys());
console.log(keyPair);
