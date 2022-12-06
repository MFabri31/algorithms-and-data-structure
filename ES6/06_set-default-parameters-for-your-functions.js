/*
In order to help us create more flexible functions, ES6 introduces default parameters for functions.

const greeting = (name = "Anonymous") => "Hello " + name;

Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
*/

const increment = (number, value = 1) => number + value;
