// set local storage item
/*
  local storage: will stay until you manually clear it out in the setting
  session storage: will go away when the browser is closed
 */
// set local storage item
//  localStorage.setItem('name','Hung');
//  localStorage.setItem('age','23');
// set session storage item
//  sessionStorage.setItem('name','Hung');

// remove from local storage
// localStorage.removeItem('name');

// get from the local storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name, age);

// clear everything in local storage
// localStorage.clear();

const form = document.querySelector("form");
document.getElementById("task").value = "";
form.addEventListener("submit", function (e) {
  const task = document.getElementById("task").value;
  let tasks;
  // tenary condition
  tasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert("Task saved");
  document.getElementById("task").value = "";
  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.forEach((task) => {
  console.log(task);
});
