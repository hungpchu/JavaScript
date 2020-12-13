/*
 Async
 1. Put before a function will make the function return promist

 Await
 1. wait the promise to be resolved until send the response 
 2. can only used in async functon since it will wait for the promise get resolved
 */

// async function myFunc(error){

//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Promise');
//         },4000);
//     });
//     if (!error){
//         // wait until the promise is resolved until send the response
//     const res = promise;

//     return res;
//     }
//     await Promise.reject(new Error('Something went wrong'));
// }

// myFunc(false).then(res => console.log(res)).catch(err => console.log(err));

// getUser return a promise with async
async function getUsers(url) {
  // await the response of the fetch call
  // response is a promise
  const response = await fetch(url);
  // only proceed once the above promise is resolved
  // data result of promise response
  const data = await response.json();
  // only proceed once the await response.json is resolved
  return data;
}

getUsers("https://jsonplaceholder.typicode.com/users").then((users) =>
  console.log(users)
);
