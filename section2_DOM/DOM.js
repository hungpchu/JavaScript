/*
  DOM:
  1. Document Object Model
  2. struture representation of HTML docoment
  3. Tree of node/element created by browser
  4. It can be: <html>, <body>
  5. Use JS to manipulate this DOM elements/node
  6. Object-Oriented Programming
  7. Document Object from Window Object

                    Document
                       |
                     <HTML>
                    /      \
                <head>     <body>
 */

let val;
// get the DOM
val = document;
// get html collection
// (kinda look like array but can not use for loop)
val = document.all;
// return html element
val = document.all[0];
// number of element
val = document.all.length;
// return head
val = document.head;
// return body
val = document.body;

// return form collection
val = document.forms;
// return first form
val = document.forms[0];

// return links collection
val = document.links;
// return first link
val = document.links[0];

// return script
val = document.scripts;
val = document.scripts[2].getAttribute("src");

let scripts = document.scripts;
let scriptsArray = Array.from(scripts);
scriptsArray.forEach(function (script) {
  console.log(script.getAttribute("src"));
});
console.log(val);
