// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement("h2");
// Add id
newHeading.id = "task-title";
// Add text node
newHeading.appendChild(document.createTextNode("Task List"));

// Get the old heading
const oldHeading = document.getElementById("task-title");
// Get the parent of old Heading
const cardAction = document.querySelector(".card-action");
// replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
// lis is the node list with li
const lis = document.querySelectorAll("li");
// list is the ul node
const list = document.querySelector("ul");

// Remove the list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASS AND ATTRIBUTE
const firstLi = document.querySelector("li:first-child");
// get the a tag
const link = firstLi.children[0];

let val;

// CLASSES
val = link.className;
//  return DOM token list
val = link.classList;
// add class
link.classList.add("test");
// remove class
link.classList.remove("test");

// ATTRIBUTES
val = link.getAttribute("href");
// set the value of the attribute
link.setAttribute("href", "https://google.com");
// test if attribute exist
val = link.hasAttribute("href");
// add new Attribute
link.setAttribute("title", "Google");
// remove Attribute
link.removeAttribute("title");
val = link;

console.log(list);
console.log(val);
