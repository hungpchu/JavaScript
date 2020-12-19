/*
 
Promise
1. part of ES6
2. alternative of callback and handle async code
3. while handing async operation, they can promise to do something when that operation finished

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
   Example of Asynchronous 
  */
function createPost(post, error) {
  //   create a Promise
  // pass in a function which takes resolve and reject
  return new Promise(function (resolve, reject) {
    // call resolve when done with previous operation
    // mimic the server response with setTimeOut
    setTimeout(function () {
      posts.push(post);
      if (error) reject("Error: Something went wrong!");
      else resolve();
    }, 2000);
    // call reject when errors
  });
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

//  using .then and pass getPosts as resolve function
createPost({ title: "Post 3", body: "This is Post 3" }, false)
  // in then below will pass getPosts, which act as resolve function
  .then(getPosts)
  // in catch below will pass the function to print err, which act as
  // reject function
  .catch(function (err) {
    //   print out the error from reject
    console.log(err);
  });
