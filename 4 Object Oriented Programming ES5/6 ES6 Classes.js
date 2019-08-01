/* eslint-disable object-shorthand */
/* eslint-disable no-new-object */
/* eslint-disable no-array-constructor */
/* eslint-disable no-new-func */
/* eslint-disable func-names */
/* eslint-disable no-new-wrappers */

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

const mary = new Person('Mary', 'Williams');
console.log(mary.greeting);
