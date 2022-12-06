/*
Suppose you have a file and you wish to import all of its contents into the current file. This can be done with the import * as syntax. 

Use the import * as syntax to import everything from the file into an object called stringFunctions.
*/

import * as stringFunctions from "./string_functions.js";

// Only change code above this line
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
