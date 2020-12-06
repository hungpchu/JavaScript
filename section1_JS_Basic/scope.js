// Global scope
// var cause security risk + has function scope
var a = 1;
let b = 2;
const c = 3;

// function test() {
//   let a = 4;
//   let b = 5;
//   const c = 6;
//   console.log("Function scope ", a, b, c);
// }
// test();

// Block scope same with function scope
// if (true){
//     // var will change but let will not
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log("Block scope ", a, b, c);
// }

for (var a = 0; a < 10; a++) {
  console.log(`Loop ${a}`);
}
console.log("Global scope ", a, b, c);
