/*

Callback
1. function that is passed in as parameter to another function and 
it is run inside the function body

*/
// posts = mimic the server and the database
const posts = [
  {
    title: "Post 1",
    body: "This is Post 1",
  },
  {
    title: "Post 2",
    body: "This is Post 2",
  },
];

/*
 Example of Synchronous 
*/
function createPost(post) {
  // mimic the server response with setTimeOut
  setTimeout(function () {
    posts.push(post);
  }, 2000);
}

function getPosts() {
  // get all posts and display in UI
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// Create the post and call get post after that
// Hope the new post included in get post
createPost({ title: "Post 3", body: "This is Post 3" });

// get posts
getPosts();
