'use strict';

let temperature = process.argv[2];

// jAvAsCrIpT
if (!(/^\d*$/.test(temperature))) {
  console.log('Please input a number.')
} else {


if (temperature < 20.0) {
  console.log('Activating heating.');
}

else if (temperature > 30.0) {
  console.log('Room is overheating, danger!!!');
}

else if (temperature > 21.0) {
  console.log('De-activating heating.');
} 

else {
  console.log('Temperature is normal.')
  }
}