/* eslint-disable no-prototype-builtins */
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
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  // this.age = age;
  this.birthday = new Date(dob);
  // Create a method in the constructor to calculate current age from dob
}

// Calculate age moved into the prototype by adding it below into the person constructor
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  // Gets year in the UTC format. Odd but is used to calculate age from birthdate.
  return Math.abs(ageDate.getFullYear() - 1970);
};

// Get full name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

// Gets Married
Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
};

// Objects instantiated
const john = new Person('John', 'Smith', '8/12/1992');
const mary = new Person('Mary', 'Johnson', '1/13/1994');

// Output
console.log(mary);
console.log(john.calculateAge(1994));
console.log(mary.getFullName());
mary.getsMarried('Smith');
console.log(mary.getFullName());

// Finds out of the object has the inherited property
console.log(mary.hasOwnProperty('firstName')); // Returns true

console.log(mary.hasOwnProperty('getsMarried')); // Returns true because is not part of its own property
