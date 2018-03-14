
Use const when declaring variable for require() to prevent accidently
assigning new value to the same variable name

object with methods/functions/properties
const logger = require('./logger');

for a single function
const log = require('./logger');


Calling the exported log method or function and pass a 'message'
logger.log('message');

Calling the exported function/method only
log('message');
