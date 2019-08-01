/* eslint-disable no-new-object */
/* eslint-disable no-array-constructor */
/* eslint-disable no-new-func */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable no-new-wrappers */
/* eslint-disable no-console */

// Prototype is an object, basically a class
// Object.prototype
// Person.prototype

// Person Constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  // Create a method in the constructor to calculate current age from dob
  this.calculateAge = function calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    // Gets year in the UTC format. Odd but is used to calculate age from birthdate.
    return Math.abs(ageDate.getFullYear() - 1970);
  };
}

const john = new Person('JOhn', 'Smith', '8/12/1992');
const mary = new Person('Mary', 'Johnson', '1/13/1994');
