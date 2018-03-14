MODULE FOR LOGGING MESSAGES

(function (exports, require, module, __filename, __dirname) {


var url = 'http://mylogger.io/log';

function log(message) {
  //send an HTTP request
  console.log(message);
}

EXPORTING

Exporting an object with more than  one function/method or properties
module.exports.log = log;

 Exporting a SINGLE function only. Use EXAMPLE below instead of above
module.exports = log;

})
