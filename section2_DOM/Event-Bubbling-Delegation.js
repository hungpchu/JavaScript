/*
 Event bubbling 
 1. bubbling up of the event through the DOM from the child element 
 to the parent

 Event Delegation
 1. bubbling down of the event through the DOM from the parent element 
 to the child -> used after the html page is done loading
 */

//  get the card-title class name
const col = document.querySelector(".col");
const card = document.querySelector(".card");
const cardContent = document.querySelector(".card-content");
const cardTitle = document.querySelector(".card-title");

col.addEventListener("click", function runEvent() {
  console.log("col");
});

card.addEventListener("click", function runEvent() {
  console.log("card");
});

cardContent.addEventListener("click", function runEvent() {
  console.log("card-content");
});

// EVENT BUBBLING
// if click the cardTitle then it's parent like
// event for cardContent, card and col will be fired
cardTitle.addEventListener("click", function runEvent() {
  console.log("card-title");
});

/* EVENT DELEGATION (IMPORTANT)
 Used: if you dynamically insert something into DOM through JS that what not there when the page is not loaded
 DEFINITION: PUT THAT LISTENER ON THE PARENT OF WHAT U LOOK FOR AND PUT THE CONDITION TO FIND THE TARGET
*/
const bodyItem = document.body;

bodyItem.addEventListener("click", deleteItem);

function deleteItem(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete item");
    // get the parent which is a tag then a tag's parent
    //  which is li
    e.target.parentElement.parentElement.remove();
  }
}
