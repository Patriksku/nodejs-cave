'use strict';

/*
Exercise: multiplication table.

1   2   3   4 ... 10
2   4   6   8 ... 20
...
10  20  30  40... 100

Use: 2d-arrays to output above.
*/

let table = [];
let increment = 1;
let element = 0;

let tableX = 10;
let tableY = 10;

// Creating table.
for (let i = 0; i < tableY; i++) {
  let row = [];
  table.push(row);

  for (let j = 0; j < tableX; j++) {
    row.push((i + 1) * (j + 1));
  }
}

// Printing table.
for (let i = 0; i < table.length; i++) {
  for (let j = 0; j < table[i].length; j++) {

    if (j === 0) {
      process.stdout.write(table[i][j].toString());
    } else if (j < table[i].length - 1) {
      process.stdout.write('\t' + table[i][j].toString());
    } else {
      process.stdout.write('\t' + table[i][j].toString() + '\n');
    }
  }
}