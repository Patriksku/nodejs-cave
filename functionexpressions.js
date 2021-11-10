'use strict';

greet1();

// Function hoisting -> We can call the function (as above) before defining it.
function greet1() {
  console.log('Hello 1');
}

// (Anonymous) Function expression (hoisting does not work here).
let greet2 = function () {
  console.log('Hello 2');
}

greet2();

// Arrow function.
let greet3 = () => {
  console.log('Hello 3');
}

greet3();

// OR shorter (arrow) function version (one statement accepted):

let shortFunc = () => console.log('Arrow function')

shortFunc();


/*
More functions:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/


setTimeout(function () {
  console.log('Execute later after 1 second')
}, 1000);



// If you want to create a function and execute it immediately after declaration, you can use the anonymous function like this:
let person = {
  firstName: 'John',
  lastName: 'Doe'
};

(function () {
  console.log(`${person.firstName} ${person.lastName}`);
})(person);



// Similarly, the following anonymous function:

let add = function (a, b) {
  return a + b;
};

// … is equivalent to the following arrow function:

let adding = (a, b) => a + b;

console.log(add(5, 5));
console.log(adding(10, 90));