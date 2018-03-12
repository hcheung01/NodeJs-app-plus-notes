GLOBAL OBJECTS
----------------
1. console.log(); //global object, so its part of the global scope which means we
//can access anywhere in any files

IMPORTANT: WINDOW OBJECT IS NOT AVAILABLE IN NODE BUT GLOBAL OBJECT IS

Other globally available objects and functions
2. setTimeout() //use this to call a function after a delay
3. clearTimeout();
4. setInterval() //use to repeatedly call a function after a given delay
5. clearInterval() //use to stop a function from being called repeatedly

In browsers we have this window object that represents our global scope so
all variables and functions that are defined globallly we can access via
this window object so we can call window that console.log or simply just
console.log

EXAMPLE:
window.console.log or simply just console.log
or
window.setTimeout
or
window.clearTimeout
or window.......

The Javascript engine will prefix this statement with window.console.log
because thats where this object is defined. However in Node there is no
window object so we use global object.

so we use.....
EXAMPLE:
global.console.log
global.setTimeout
global.clearTimeout
global......

IMPORTANT: WHEN YOU DECLARE A VARIABLE IN NODE, IT IS NOT ADDED TO GLOBAL
OBJECT. THE VARIABLE IS ONLY SCOPE TO THIS FILE, APP.JS.

EXAMPLE:
var message = '';
console.log(global.message)
//output will be undefined
