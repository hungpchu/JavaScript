// document.getElementByClassName

// global scope
let items = document.getElementsByClassName("collection-item");
// items[0] get first item in the collection items

// local scope inside ul
const listItems = document
  .querySelector("ul")
  .getElementsByClassName("collection-item");

// document.getElementsByTagName
// return collection but have to convert to array bruh
let lis = document.getElementsByTagName("li");

// Convert HTML collection into an array
lis = Array.from(lis);
// reverse method in array
lis.reverse();
console.log(items);
// forEach method in array
lis.forEach((l, index) => {
  l.textContent = `${index}: Hello`;
  console.log(l);
});

// document.querySelectorAll return node list as array bro
items = document.querySelectorAll("ul.collection li.collection-item");
items.forEach((l) => {
  console.log(l);
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach((l) => {
  l.style.background = "#ccc";
});
liEven.forEach((l) => {
  l.style.background = "blue";
});
