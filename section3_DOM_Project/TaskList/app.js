// Define UI var
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");
const tasksInLocalStorage = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];
// Load all event listener
loadEventListener();

// Load all event listener'
function loadEventListener() {
  taskInput.value = "";
  /* DOM load event
   DOMContentLoaded get called right after the DOM get loaded
  */
  document.addEventListener("DOMContentLoaded", getTasks);
  // Add task event
  form.addEventListener("submit", addTask);
  // Remove task event
  taskList.addEventListener("click", removeTask);
  // Clear task events
  clearBtn.addEventListener("click", clearTasks);
  //   Filter tasks event
  filter.addEventListener("keyup", filterTasks);
}

// get tasks from Local storage
function getTasks() {
  tasksInLocalStorage.forEach((taskName) => {
    createLiElement(taskName);
  });
}

// Add Task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  } else {
    createLiElement(taskInput.value);
    // Store in the local Storage
    storeTaskInLocalStorage(taskInput.value);
    // Clear the input
    taskInput.value = "";
  }
  // prevent redirect
  e.preventDefault();
}

function createLiElement(taskName) {
  // Create li element
  const li = document.createElement("li");
  // Add className
  li.className = "collection-item";
  // Create textNode and append to li
  li.appendChild(document.createTextNode(taskName));
  // Create a new link element or delete icon
  const link = document.createElement("a");
  // Add class
  link.className = "delete-item secondary-content";
  // Add icon HTML
  link.innerHTML = `<i class="fa fa-remove"></i>`;
  // Append the link to li
  li.appendChild(link);
  // Append li to the ul
  taskList.appendChild(li);
}

// Store Task
function storeTaskInLocalStorage(task) {
  tasksInLocalStorage.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasksInLocalStorage));
}

function removeTaskFromLocalStorage(taskItem) {
  tasksInLocalStorage.forEach((task, index) => {
    if (taskItem.textContent === task) {
      // remove element from tasksInLocalStorage
      // delete 1 element from the index
      tasksInLocalStorage.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasksInLocalStorage));
}

// Remove task
function removeTask(e) {
  // check for the i tag element
  if (e.target.parentElement.classList.contains("delete-item")) {
    // Ask to confirm
    if (confirm("Are you sure?")) {
      // remove the li tag element
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear tasks
function clearTasks() {
  // Ask to confirm
  if (confirm("Are you sure?")) {
    // remove the li tag element
    // slower remove
    // taskList.innerHTML = '';
    // faster remove
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
    localStorage.clear();
  }
}

function filterTasks(e) {
  const inputText = e.target.value.toLowerCase();
  // querySelectorAll return a node list
  const taskCollection = document.querySelectorAll(".collection-item");
  taskCollection.forEach((task) => {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(inputText) !== -1) {
      // make the task visible
      task.style.display = "block";
    } else {
      // make the task invisible
      task.style.display = "none";
    }
  });
}
