// Keyboard and input event

// clear button
const clearButton = document.querySelector(".clear-tasks");
// all element with class = card
const card = document.querySelector(".card");
// heading h5 tag
const heading = document.querySelector("h5");

// Click
clearButton.addEventListener("click", runEvent);
// Double Click
clearButton.addEventListener("dblclick", runEvent);
// Mousedown -> click and hold and it will fire right away
clearButton.addEventListener("mousedown", runEvent);
// Mouseup -> click and hold and it will fire after let go the button
clearButton.addEventListener("mouseup", runEvent);
// Mouseenter -> touch the button and it will fire
clearButton.addEventListener("mouseenter", runEvent);
// Mouseleave -> leave the button after touching it
clearButton.addEventListener("mouseleave", runEvent);
// Mouseover -> fire when go to element inside the main element
clearButton.addEventListener("mouseover", runEvent);
// Mouseout -> fire when go out element inside the main element
clearButton.addEventListener("mouseout", runEvent);
// Mousemove -> fire for all the movement + hay vkl
card.addEventListener("mousemove", runEvent);

// Event handler
function runEvent(event) {
  console.log(`EVENT TYPE: ${event.type}`);
  heading.textContent = `MouseX: ${event.offsetX}  MouseY: ${event.offsetY}`;
  document.body.style.backgroundColor = `rgb(${event.offsetX},${event.offsetY},40)`;
}
