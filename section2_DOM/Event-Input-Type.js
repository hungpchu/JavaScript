// Input and Form Event
// take the first form tag => just have 1 form
const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");
const select = document.querySelector("select");
// Clear the taskInput
taskInput.value = "";

form.addEventListener("submit", runEvent);

// keydown fire when press the key on keyboard
// taskInput.addEventListener('keydown', runEvent);
// keyup fire when press the key on keyboard and let go
// taskInput.addEventListener('keyup', runEvent);
// keypress
// taskInput.addEventListener('keypress', runEvent);
// focus -> click inside the input
// taskInput.addEventListener('focus', runEvent);
//  blur -> click inside and then out
// taskInput.addEventListener('blur', runEvent);
// cut -> fire cut event
// taskInput.addEventListener('cut', runEvent);
// copy -> Command + C event
// taskInput.addEventListener('copy', runEvent);
// copy -> Command + P event
// taskInput.addEventListener('paste', runEvent);

// input -> anything deal with input will fire input event
taskInput.addEventListener("input", runEvent);
// changeEvent
select.addEventListener("change", runEvent);

function runEvent(event) {
  console.log(`EVENT TYPE: ${event.type}`);

  // target is the element that the
  // event happens on (in this case is the input)
  // value is what we type in (for the case of keydown)
  console.log(event.target.value);

  heading.innerText = event.target.value;

  // Get the input value
  // console.log(taskInput.value);
  // event.preventDefault();
}
