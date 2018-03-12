MODULES- basically the JS file is a module
--------
A module encapsulates related code into a single unit of code. When creating
a module, this can be interpreted as moving all related functions into a file.

Note: Client-side Javascript that we run inside of browsers when we declare
a variable or a function that is added to the global scope

EXAMPLE:

Define a function

var sayHello = function() {
....
}

window.sayHello();

The function is added to the global scope and it's available via the window
object. There is a problem with this behavior because in the real world
application we often split our Javascript code into multiple files. So it is
possible we have two or more files and in both these files wee define this
function sayHello with the exact same name because this function is added to
the global scope. When we define this function in another file that new
definition is going to overwrite the previous definition. So this is the problem
with the global scope. In order to build reliable and maintainable applications
we should avoid defining variables and functions in the global scope, instead
we need modularity. We need to create small building blocks or modules where
we define our variables and functions so two variables or two functions with
the same name don't overwrite another variable or function defined somewhere
else that is encapsulated inside of that module.

Core of NODE concept called Module
-Every file in the node application is considered a module
-The variables and functions would define in that file or that module are
scoped to that file are scope to that files
-In Object-Orient programming we say there are private, they are not available
outside that container/module
-If you want to use a variable or a function defined in a module outside that
module, you need to explicitly export it and make it public

Every NODE application has at least one file or one module called main module

variables and functions declared inside each module stays exclusively inside(scoped). If you want to access it outside the module, it must be exported and make it public

CREATE a MODULE

To export module out and into the export object
module.export.??? = ???

EXAMPLE:
module.export.log = log;

LOAD A MODULE

-To load a module you use the require()
-you can skip the filename.js and just type the filename because NODE automatically assume it is a JS file
-../ for parent folder
-./ for same current folder
-require function returns the object that is exported from this target module
