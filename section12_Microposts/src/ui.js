class UI {
  constructor() {
    this.cardForm = document.querySelector(".card-form");
    this.container = document.querySelector(".postsContainer");
    this.post = document.querySelector("#posts");
    this.titleInput = document.querySelector("#title");
    this.bodyInput = document.querySelector("#body");
    this.idInput = document.querySelector("#id");
    this.postSubmit = document.querySelector(".post-submit");
    this.forState = "add";
  }
  // Show all posts
  showPosts(posts) {
    let output = "";
    posts.forEach((post) => {
      output += `<div class="card mb-3">
                <div class="card-body">
                    <h4 class="card-title">${post.title}</h4>
                    <p class="card-text">${post.body}</p>
                    <a href="#" class= "edit card-link" data-id="${post.id}">
                        <i class="fa fa-pencil"></i>
                    </a>
                    <a href="#" class= "delete card-link" data-id="${post.id}">
                        <i class="fa fa-remove"></i>
                    </a>
                </div>
            </div>`;
    });
    this.post.innerHTML = output;
  }
  // Show alert message
  showAlert(message, className) {
    this.clearAlert();
    // create div
    const div = document.createElement("div");
    // add class
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // insert alert div
    this.container.insertBefore(div, this.post);

    // Timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }
  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) currentAlert.remove();
  }

  clearFields() {
    this.titleInput.value = "";
    this.bodyInput.value = "";
  }
  // fill form to edit
  fillForm(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;

    this.changeFormState("edit");
  }
  // Clear id hidden value
  clearIdInput() {
    this.idInput.value = "";
  }
  // Change form state
  changeFormState(type) {
    if (type === "edit") {
      this.postSubmit.textContent = "Update Post";
      this.postSubmit.className = "post-submit btn btn-warning btn-block";

      // Create cancel button
      const button = document.createElement("button");
      button.className = "post-cancel btn btn-light btn-block";
      button.appendChild(document.createTextNode("Cancel Edit"));
      // Get the element to insert before
      const formEnd = document.querySelector(".form-end");
      // insert the cancel button
      this.cardForm.insertBefore(button, formEnd);
    } else {
      this.postSubmit.textContent = "Post it";
      this.postSubmit.className = "post-submit btn btn-primary btn-block";

      // remove cancel button if it is there
      if (document.querySelector(".post-cancel"))
        document.querySelector(".post-cancel").remove();

      // clear the id from hidden field
      this.clearIdInput();

      // clear the text
      this.clearFields();
    }
  }
}

// export so that other js file can import it
export const ui = new UI();
