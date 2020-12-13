/**
 * try catch
 * 1. print the error out and let the code continue
 */

const user = { email: "cphung@gmail.com" };

try {
  // Produce a TypeError
  // myFunction()
  // produce a Reference Error
  // null.myFunction();
  // produce SyntaxError
  // eval('hello');
  // Produce a URIError
  // decodeURIComponent('%');

  //
  if (!user.name) {
    throw new SyntaxError("User has no name");
  }
} catch (e) {
  console.log(e.name, e.message);
  // run even
} finally {
  console.log("Finally run regard of the result above...");
}

console.log("Program continues...");
