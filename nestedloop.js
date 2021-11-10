'use strict';

let animalTable = [
  ['dog', 'cat'],
  ['giraffe', 'elephant', 'rhino']
];

for (let i = 0; i < animalTable.length; i++) {
  for (let j = 0; j < animalTable[i].length; j++) {

    console.log(i, j, animalTable[i][j]);
  }
}