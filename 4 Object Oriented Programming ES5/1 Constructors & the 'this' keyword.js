/* eslint-disable no-console */

// Single Object Example
// const mj = {
//   gender: 'Male',
//   age: '33',
// };

// If we want to create more than 1 object, we need a constructor.

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

const Brad = new Person('Brad', '6 / 25 / 1985');

console.log(Brad.calculateAge());
