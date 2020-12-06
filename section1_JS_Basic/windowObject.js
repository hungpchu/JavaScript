/*
 Window is the global object in the client-side JS
 NodeJS = JS runtime environment that exec JS
 */

// Only work in Browser -> copy this to app.js
// Window Methods / Objects / Properties

// Alert
// alert('Hello');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if (confirm('Are you sure')){
//     alert('Yes');
// }else{
//     alert('No');
// }

// Height and Weight for interact web application
let val;

// Outer height and weight from the very top to bottom
val = window.outerHeight;
// val = window.outerWidth;

// Inners height and weight not calculate the debugger in browser
val = window.innerHeight;
val = window.innerWidth;

// Scroll points (good for animation)
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
// hostname = ip address
val = window.location.hostname;
// port number
val = window.location.port;
// url or href
val = window.location.href;
//  extract query
val = window.location.search;

// Redirect
// window.location.href = "https://google.com"

// Reload page continously
// window.location.reload();

// History object
// window.history.go();

// check history length
val = window.history.length;

// Navigator Object = has to do with actual browser
val = window.navigator;
// check computer OS
val = window.navigator.platform;

console.log(val);
