/* eslint-disable no-new-object */
/* eslint-disable no-array-constructor */
/* eslint-disable no-new-func */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable no-new-wrappers */
/* eslint-disable no-console */

// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}
  `;
};

const person1 = new Person('John', 'Doe');

// console.log(person1.greeting());

// Custom constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
// New customer prototype inherits all Person methods and properties
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);

// Greet Customer
Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
};
