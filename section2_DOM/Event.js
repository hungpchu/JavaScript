// Add event listener to Clear task button
const clearTaskButton = document.querySelector(".clear-tasks");

// Add event listener
// take on 2 argument:
// 1. event type: click
// 2. function onClick when event happen
// look for onClick function
clearTaskButton.addEventListener("click", onClick);

function onClick(eventObject) {
  // make the Hello print out stay
  // eventObject.preventDefault();
  let val;
  val = eventObject;

  //  Event target element
  val = eventObject.target;
  // Change the text of button from Clear Task to Hello
  eventObject.target.innerText = "Hello";

  // Event Type
  val = eventObject.type;

  // Time stamp
  val = eventObject.timeStamp;

  // Coordinate of the event relative to the window
  val = eventObject.clientY;
  val = eventObject.clientX;

  // Coordinate of the event relative to the element
  val = eventObject.offsetY;
  val = eventObject.offsetX;

  console.log(val);
}
