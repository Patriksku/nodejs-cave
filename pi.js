'use strict';

console.log('PI:', Math.PI);

let i = 0;
let iterations = 20000;
let div = 1;
let sum = 0;

while (++i <= iterations) {

  if (i % 2 != 0) {
    sum += (1 / div);
  } else {
    sum += -(1 / div);
  }

  div += 2;
}

console.log('Approximation of Pi', sum * 4)