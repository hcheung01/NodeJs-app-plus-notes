
// Use const when declaring variable for require() to prevent accidently
// assigning new value to the same variable name

const logger = require('./logger');   // for object with methods/functions/properties

const log = require('./logger');  // for a single function


// Calling the exported log method or function and pass a 'message'
// logger.log('message');

// Calling the exported function/method only
log('message');
