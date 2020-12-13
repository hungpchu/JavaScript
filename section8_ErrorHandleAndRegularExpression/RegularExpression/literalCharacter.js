/**
 * Regular Expression
 * 1. describe the pattern of character
 * 2. used for pattern matching and searching
 * 3. used for validation
 */

let re;
//  i = case insensitive
re = /hello/i;
//  g = global search
//  re = /hello/g;

console.log(re);
console.log(re.source);

// exec() - Return result in an array or null
let result = re.exec("hello world");

console.log(result);
console.log(result[0]);
console.log(result.index);

// test() - Return true or false if there is a match
result = re.test("Hello");

console.log(result);

// match() - Return result array or null
let str = "Hello There";
// return the same thing with exec()
re = str.match(re);

console.log(re);

// search() - returns the index of the first match, if not found the -1
str = "Hello There";
re = str.search(re);

console.log(re);

// replace() - Returns the new string with some or all matches of the pattern
str = "Hello there";
re = str.replace(re, "Hi");

console.log(re);
