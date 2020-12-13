// Get Users
// HungHTTP.get('https://jsonplaceholder.typicode.com/users').then(data => console.log(data)).catch(err => console.log(err));

const userData = {
  name: "Hung Chu",
  userName: "cphung",
  email: "hu@gmail.com",
};

// Post Method => create new users
// HungHTTP.post('https://jsonplaceholder.typicode.com/users', userData).then(data => console.log(data)).catch(err => console.log(err));

// Put Method => create new users
// HungHTTP.put('https://jsonplaceholder.typicode.com/users/2', userData).then(data => console.log(data)).catch(err => console.log(err));

// Delete Method => create new users
HungHTTP.delete("https://jsonplaceholder.typicode.com/users/2")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
