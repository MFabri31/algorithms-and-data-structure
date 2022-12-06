/*
When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.  

Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of the function. Be certain not to use the var keyword anywhere in your code.
*/

function checkScope() {
  let i = "function scope";
  if (true) {
    i = "block scope";
    console.log("Block scope i is: ", i);
  }
  i = "function scope";
  console.log("Function scope i is: ", i);
  return i;
}

checkScope();
