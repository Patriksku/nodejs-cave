'use strict';

let greeting = "Hello";

// Command-line arg -> whatever you write after the name of your program.
// It is an array. So if we add more arguments, these will be placed sequentially, as 3, 4 etc.
let name = process.argv[2];

console.log(greeting, name);