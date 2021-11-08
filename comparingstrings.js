'use strict';

let text = 'cat';

console.log('text == "cat"', text == 'cat');

// Alphabetical string comparison -> 'c' is less than 'd', therefore true.
// These are also case-sensitive.
// Unicode capital letters come before lower-case letters.
console.log("text < 'dog'", text < 'dog');
console.log("'Dog' >= 'dog'", 'Dog' >= 'dog');
