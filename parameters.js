'use strict';

let dayOfWeek = 'Monday';

// You dont have to supply all arguments for the function to work.
function greet(name, day) {
  console.log('Hello', name);

  if (day === undefined) {
    console.log('One argument specified');
  } else {
    console.log('Today is: ' + day + '\n');
  }
}

greet('Bobby', dayOfWeek);
greet('Clare');
