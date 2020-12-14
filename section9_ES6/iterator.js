/**
 * Iterator
 * 1. advanced loop that can be paused
 *  */

nameIterator = (names) => {
  let nextIndex = 0;
  return {
    next: () => {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    },
  };
};

// Create an array of names
const namesArray = ["Hung", "Chu", "Han"];
// init the iterator and pass in the names array
const names = nameIterator(namesArray);

console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());
