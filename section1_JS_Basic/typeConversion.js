let val;

// Number to String: String(), toString()
val = String(555);
//  override the value before
val = String(4 + 4);

//  Boolean to String
val = String(true);

// Date to String
val = String(new Date());

// Array to String
val = String([1, 2, 3, 4]);

// toString method
val = (5).toString();

// String to number : Number(), parseInt()
val = Number("5");
val = Number(true);
val = Number(false);
// nulll give 0
val = Number(null);
// string give NaN -> Not a Number
val = Number("hello");
val = Number([1, 2, 3]);

// parseInt method
val = parseInt("100.30");

//  String to float
val = parseFloat("100.3");

// Type coersion
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(val);
console.log(typeof val);
// .length only works with string
// console.log(val.length)
console.log(val.toFixed(2));

console.log(sum);
console.log(typeof sum);
