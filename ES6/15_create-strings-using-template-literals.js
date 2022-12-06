/*
Template literal is a special type of string that makes creating complex strings easier. 
Uses backticks (`), not quotes (' or "), to wrap the string.
To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }.

Use template literal syntax with backticks to create an array of list element (li) strings.
Use an iterator method (any kind of loop) to get the desired output (shown below).
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
*/

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  const failureItems = arr.map((elem) => {
    return `<li class="text-warning">${elem}</li>`;
  });

  return failureItems;
}
const failuresList = makeList(result.failure);
