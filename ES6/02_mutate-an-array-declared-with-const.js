/*
objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.


Change the array to [2, 5, 7] using various element assignments.
*/
const s = [5, 7, 2];

function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}

editInPlace();
