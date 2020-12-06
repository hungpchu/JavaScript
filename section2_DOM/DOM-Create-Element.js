// Create the element
const newElement = document.createElement("li");
// Add class
newElement.className = "collection-item";
// Add id
newElement.id = "new-item";
// Add attribute
newElement.setAttribute("title", "New Element");

// Create text node (something inside li) and append
newElement.appendChild(document.createTextNode("Hello World"));
// Create new link element
const link = document.createElement("a");
// add the class
link.className = "delete-item secondary-content";
// add icon html
link.innerHTML = `<i class="fa fa-remove"></i>`;
// append link to newElement
newElement.appendChild(link);

// Append newElement as child to ul
document.querySelector("ul.collection").appendChild(newElement);

console.log(newElement);
