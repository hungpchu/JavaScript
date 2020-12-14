/**
 * Generator
 * 1. that can be paused and return multiple values
 * 2. Basically implemented from Iterator
 */

function* sayNames() {
  yield "Hung";
  yield "Han";
  yield "Chu";
}

const name = sayNames();

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

//  ID Creator
function* createIds() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const genID = createIds();

console.log(genID.next().value);
console.log(genID.next().value);
console.log(genID.next().value);
console.log(genID.next().value);
console.log(genID.next().value);
