/* eslint-disable object-shorthand */
/* eslint-disable no-new-object */
/* eslint-disable no-array-constructor */
/* eslint-disable no-new-func */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable no-new-wrappers */
/* eslint-disable no-console */

const personPrototypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  },
};

// Method #1 for creating new objects
const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

console.log(mary.greeting());

mary.getsMarried('Thompson');
console.log(mary.greeting());

// Method #2 for creating new objects
const mj = Object.create(personPrototypes, {
  firstName: { value: 'MJ' },
  lastName: { value: 'Linane' },
  age: { value: 34 },
});

console.log(mj); // Outputs an object

console.log(mj.greeting());
