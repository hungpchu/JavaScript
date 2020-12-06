/*
  document.getElementById()
 */
const taskTitle = document.getElementById("task-title");
// .id will return id

// change styling of id 'task-title' to blue
taskTitle.style.background = "#333";
taskTitle.style.color = "#fff";
taskTitle.style.padding = "5px";

// change the content
taskTitle.textContent = "Task List";
// innerText
taskTitle.innerText = "My Tasks";
taskTitle.innerHTML = `<span style="color:red">Task Lists</span>`;

// document.querySelector()
let val;
val = document.querySelector("#task-title");
val = document.querySelector(".card-title");
// get the first h5
val = document.querySelector("h5");

// single element selector will only get the 1st one
val = document.querySelector("li").style.color = "red";
// same above
val = document.querySelector("ul li").style.color = "blue";

// select the last child for last element
val = document.querySelector("li:last-child").style.color = "blue";
// select the 3rd child
val = document.querySelector("li:nth-child(3)").style.color = "blue";
// select the 4th child
val = document.querySelector("li:nth-child(4)").textContent = "Hello World";
// select odd child -> 1st odd only
val = document.querySelector("li:nth-child(odd)").style.background = "#ccc";

console.log(val);
