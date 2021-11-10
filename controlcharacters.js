'use strict';

console.log('Hi\nHi');
console.log('Hello\tHello');

// Outputs at the same line.
// Stdout is a stream output, so it is also less flexible.
process.stdout.write('lion');
process.stdout.write('tiger');

// Here we would have to convert the value to string for it to work.
let value = 7;
process.stdout.write(' ' + value.toString());

