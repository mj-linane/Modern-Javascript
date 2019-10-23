/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
class Person {
  constructor(name) {
    this.name = name;
  }

  // Set the variable
  set name(value) {
    this.name = value;
  }

  // Get the variable
  get name() {
    return this.name;
  }
}

// If you only have a getter, the property cannot be set,
// and any attempt at doing so will be ignored

// If you only have a setter, you can chance the value
// but not access it from the outside
