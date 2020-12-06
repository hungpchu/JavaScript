/* Traverse: move up and down
   Deal with parent and child Node
 Element type:
    1 - Element
    2 - Attribute
    3 - Text Node
    8 - Comment
    9 - Document
    10 - Doctype
*/

let val;

const list = document.querySelector("ul.collection");
// select first
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

// get the child Nodes with text Node and li Node
// return node list
val = list.childNodes;

// get the children element with li Node only
// return HTML collection
val = list.children;

// get the 1st children element
val = list.firstElementChild;
// get the last children element
val = list.lastElementChild;
// number of children element
val = list.childElementCount;

// Get parent node => return ul
val = listItem.parentNode;
val = listItem.parentElement;

// Get the next siblings node => return text
val = listItem.nextSibling;
// Get the next siblings element => return li
val = listItem.nextElementSibling;

// Get the previou siblings node => return text
val = listItem.previousSibling;
// Get the previous siblings element => return null
// since first li has no previous sibling element
val = listItem.previousElementSibling;

console.log(val);
