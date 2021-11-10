'use strict';

let fruits = [];

fruits[0] = 'orange';
fruits[1] = 'apple';
fruits[3] = 'wow';

console.log(fruits.length);
console.log(fruits[2]);

fruits.push('banana');

console.log(fruits);
console.log();


let animals = [];

animals.push(['dog', 'cat', 'mouse']);
animals.push(['tiger', 'lion', 'elephant']);


console.log();

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i])
}
