/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */

// Define an object literal
const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Mattapoisett',
    state: 'Massachusetts'
  },
  getBirthYear: function() {
    return 2019 - this.age;
  }
};

let val;

// Get entire object
val = person;

// Get specific value
val = person.firstName; // <-- This is recommended way
val = person.firstName;
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address.city;
val = person.getBirthYear();

console.log(val);

// For each loop on a list of objects
const people = [{ name: 'John', age: 30 }, { name: 'Mike', age: 23 }];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
