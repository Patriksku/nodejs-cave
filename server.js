'use strict';

let http = require('http');

function requestCallback(request, response) {
  console.log('Hello');

  // Response to the request.
  response.write('Hello world');
  response.end();
}

// Simple server communication. The passed function will be called
// whenever we access the server.
let server = http.createServer(requestCallback);

// Listens to web-requests at port 8000.
server.listen(8000);
console.log('Listening...');


