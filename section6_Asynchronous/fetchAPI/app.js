/*
 Promise
 1. Object
 2. Used with Fetch
 Fetch is amazing
 Error handle with fetch: have to check the response and throw an error yourself
 Example:
 
 function handleErrors(res) {
  if (!res.ok) throw new Error(res.error);
  return res;
}
 
fetch('https://devcamper.io/api/v1/bootcamps/34343')
  .then(res => res.json())
  .then(handleErrors)
  .then(res => console.log(res.data))
  .catch(err => console.log(err));

*/
document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJSON);
document.getElementById("button3").addEventListener("click", getExternal);

// Get local text file data
function getText() {
  // fetch return Promises named response
  // mostly pass in function
  fetch("test.txt")
    .then(function (response) {
      //  response.text() is the promise
      return response.text();
    })
    .then(function (data) {
      // data is response.text()
      document.getElementById("output").innerHTML = data;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Get local JSON file data
function getJSON() {
  // fetch return Promises named response
  // mostly pass in function
  fetch("post.json")
    .then(function (response) {
      //  response.text() is the promise
      return response.json();
    })
    .then(function (data) {
      // data is response.text()
      let output = "";
      data.forEach(function (post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// API: https://api.github.com/users
function getExternal() {
  // fetch return Promises named response
  // mostly pass in function
  fetch("https://api.github.com/users")
    .then(function (response) {
      //  response.text() is the promise
      return response.json();
    })
    .then(function (data) {
      // data is response.text()
      let output = "";
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}
