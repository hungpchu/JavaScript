// Init github
const github = new GitHub();
// Init the ui
const ui = new UI();

// Search input
const searchUser = document.querySelector("#searchUser");

//  Search input event listener
searchUser.addEventListener("keyup", (e) => {
  // get the input text
  // e.target.value goes with keyup or keydown
  const userText = e.target.value;
  if (userText !== "") {
    // Make http call
    github
      .getUser(userText, false)
      .then((data) => {
        if (data.profile.message === "Not Found") {
          ui.showAlert("User not found", "alert alert-danger");
        } else {
          // Show Profile
          ui.showProfile(data.profile);
          // Show Repos
          ui.showRepos(data.repos);
        }
      })
      .catch((err) => console.log(err));
  } else {
    // Clear the profile
    ui.clearProfile();
  }
});
