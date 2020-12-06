/*
 == only check for value
 === check for both value and type
*/

const id = "100";

// will print Correct ==
if (id == 100) {
  console.log("Correct ==");
} else {
  console.log("inCorrect ==");
}

// will print InCorrect ==
if (id === 100) {
  console.log("Correct ===");
} else {
  console.log("inCorrect ===");
}

// Test if undefined id
if (typeof id !== "undefined") {
  console.log(`the id is ${id}`);
} else {
  console.log(`No ID`);
}
