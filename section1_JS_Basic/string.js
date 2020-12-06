const firstName = "Hung";
const lastName = "Chu";
const str = "Hello there my name is Hung Chu";

let val;
// concat
val = firstName + " " + lastName;

val = "Brad ";
// append
val += "John";

// Escaping
val = "This's awesome, I can't wait";
val = "This's awesome, I can't wait";

// Length
val = firstName.length;

// concat
val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();

// string as array
val = firstName[0];

// indexOf()
val = firstName.indexOf("u");

// lastIndexOf()
val = firstName.lastIndexOf("H");

// charAt()
val = firstName.charAt(1);

// substring
val = firstName.substring(0, 3);

// slice()
val = firstName.slice(0, 3);
//  start from the end
val = firstName.slice(-3);

// split() -> string to array
val = str.split(" ");

// replace
val = str.replace("Hung", "Jack");

// includes()
val = str.includes("Hung");

console.log(val);
