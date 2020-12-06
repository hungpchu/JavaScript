let val;
const today = new Date();
let birthday = new Date("9-16-1997 10:00:00");
birthday = new Date("September 16 1997 10:00:00");

val = birthday;

val = today.getMonth();
val = today.getDate();
val = today.getDay();
console.log(val);
