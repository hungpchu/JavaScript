// this code will be compiled to ES5 if running npm run build

// bring in module from other file
// const person = require('./mymodule');

// CommonJS module Syntax
// ES2015 Module
// import {person} from './mymodule2';
// import * as mod from './mymodule2';
import greeting from "./mymodule2";

// console.log(mod.person.name);
// console.log(mod.sayHello());

console.log(greeting);

// const getData = async (url) => {
//   const response = await fetch(url);
//   const result = await response.json();
//   console.log(result);
// };

// getData('https://jsonplaceholder.typicode.com/posts');
