/*
In some cases, you can destructure the object in a function argument itself.

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
}

This effectively destructures the object sent into the function. This can also be done in-place:
const profileUpdate = ({ name, age, nationality, location }) => {}

Use destructuring assignment within the argument to the function half to send only max and min inside the function.
*/

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

const half = ({ min, max }) => (max + min) / 2.0;

half(stats);
