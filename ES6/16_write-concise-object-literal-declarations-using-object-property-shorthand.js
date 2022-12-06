/*
ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood


Use object property shorthand with object literals to create and return an object with name, age and gender properties.
*/

const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender,
  };
};
