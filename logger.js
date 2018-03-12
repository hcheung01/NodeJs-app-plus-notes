//create a module for logging messages

var url = 'http://mylogger.io/log';

function log(message) {
  //send an HTTP request
  console.log(message);
}

// Exporting object from a module with mutiple functions/methods or properties
// module.exports.log = log;

 // Exporting a SINGLE function only. Use EXAMPLE below instead
module.exports = log;
