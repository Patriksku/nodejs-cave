'use strict';

// Anonymous function.
let factorial = function (value) {
  let factorial = 1;

  for (let n = 2; n <= value; n++) {
    factorial *= n;
  }

  console.log(factorial);
}

factorial(5);


// Arrow function with one parameter (we can have more).
let factorial_arrow = (value) => {
  let factorial = 1;

  for (let n = 2; n <= value; n++) {
    factorial *= n;
  }

  return factorial;
}

console.log(factorial_arrow(4));