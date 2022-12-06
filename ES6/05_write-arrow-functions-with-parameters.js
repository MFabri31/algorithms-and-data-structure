/*
Just like a regular function, you can pass arguments into an arrow function.
If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.

Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.
*/

const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
