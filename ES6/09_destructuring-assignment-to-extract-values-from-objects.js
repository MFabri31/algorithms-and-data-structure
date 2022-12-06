/*
Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

const user = { name: 'John Doe', age: 34 }

const { name, age } = user;

You can extract as many or few values from the object as you want.

Replace the two assignments with an equivalent destructuring assignment
*/

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

const { today, tomorrow } = HIGH_TEMPERATURES;
