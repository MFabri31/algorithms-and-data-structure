/*
ES6 provides a new syntax to create objects, using the class keyword.
In ES6, a class declaration has a constructor method that is invoked with the new keyword. If the constructor method is not explicitly defined, then it is implicitly defined with no arguments.


Use the class keyword and write a constructor to create the Vegetable class.
The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.
*/

class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

const carrot = new Vegetable("carrot");
console.log(carrot.name);
