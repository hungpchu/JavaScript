// Link for API: http://jsonplaceholder.typicode.com/
const http = new hungHTTP();

// GET Posts
// http.get('http://jsonplaceholder.typicode.com/posts', function(error,response){
//     if (error){
//         console.log(error)
//     }else{
//         console.log(response);
//     }
// });

// Get single Post
// http.get('http://jsonplaceholder.typicode.com/posts/1', function(error,response){
//     if (error){
//         console.log(error)
//     }else{
//         console.log(response);
//     }
// });

// Create data
const data = {
  title: "Custom Post",
  body: "This is a custom post",
};

// Post Method
// http.post('http://jsonplaceholder.typicode.com/posts',data, function(error,response){
//     if (error){
//         console.log(error)
//     }else{
//         console.log(response);
//     }
// });

// Put Method
// http.put('http://jsonplaceholder.typicode.com/posts/1',data, function(error,response){
//     if (error){
//         console.log(error)
//     }else{
//         console.log(response);
//     }
// });

// DELETE Method
http.delete("http://jsonplaceholder.typicode.com/posts/1", function (
  error,
  response
) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});
