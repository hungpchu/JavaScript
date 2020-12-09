// Using ES5

// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
// with prototype method: add the book to the list
// delete the book or show the alert
function UI() {}

UI.prototype.addBookToList = function (book) {
  const list = document.querySelector("#book-list");
  // Create tr element
  const row = document.createElement("tr");
  // insert cols
  row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>`;
  list.appendChild(row);
};

UI.prototype.showAlert = function (message, className) {
  // Create div
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  // get Parent
  const container = document.querySelector(".container");
  // get form
  const form = document.querySelector("#book-form");
  // insert alert
  container.insertBefore(div, form);

  // disappear after 3 seconds
  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 2000);
};

// Delete book
UI.prototype.deleteBook = function (target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
};

// Clear Fields
UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// Event listener for add book
const form = document.getElementById("book-form");

form.addEventListener("submit", (e) => {
  // get form value
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // Init the book
  const book = new Book(title, author, isbn);
  // Init the UI
  const ui = new UI();
  // validate
  if (title === "" || author === "" || isbn === "") {
    // Error
    ui.showAlert("Please fill in all fields", "error");
  } else {
    // add book to list
    ui.addBookToList(book);
    // Show success
    ui.showAlert("Book Added!", "success");
    // clear fields
    ui.clearFields();
  }
  e.preventDefault();
});

// Event Listener for delete
const bookList = document.querySelector("#book-list");

bookList.addEventListener("click", (e) => {
  // Init the UI
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlert("Book removed!", "success");
  e.preventDefault();
});
