class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.querySelector("#book-list");
    // Create tr element
    const row = document.createElement("tr");
    // insert cols
    row.innerHTML = `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>`;
    list.appendChild(row);
  }

  showAlert(message, className) {
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
  }
  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }
  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

// Local Storage class
class Store {
  static getBooks() {
    return localStorage.getItem("books")
      ? JSON.parse(localStorage.getItem("books"))
      : [];
  }

  static displayBooks() {
    const books = Store.getBooks();
    const ui = new UI();
    books.forEach((book) => {
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (isbn === book.isbn) books.splice(index, 1);
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}

// DOM loaded event
document.addEventListener("DOMContentLoaded", () => {
  Store.displayBooks();
});

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
    // add to local storage
    Store.addBook(book);
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
  //   delete book
  ui.deleteBook(e.target);
  //   Remove from local storage
  if (e.target.parentElement.previousElementSibling.textContent) {
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  }
  ui.showAlert("Book removed!", "success");
  e.preventDefault();
});
