/* eslint-disable no-new-object */
/* eslint-disable no-array-constructor */
/* eslint-disable no-new-func */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable no-new-wrappers */
/* eslint-disable no-console */

// String Constructor
const name1 = 'Jeff'; // Sets primitive value to this object
const name2 = new String('Jeff'); // Uses the string constructor to create a string object not primitive
name2.foo = 'bar'; // We can add properties to this object

// This causes problems when dealing with type
console.log(typeof name1); // Is a primitive string
console.log(typeof name2); // This is an object

if (name2 === 'Jeff') {
  console.log('YES');
} else {
  console.log('NO');
}

// Number Constructor
const num1 = 5;
const num2 = new Number(5);

// Boolean Constructor
const bool1 = true;
const bool2 = new Boolean(true);

// Function Constructors
const getSum1 = function (x, y) {
  return x + y;
};

const getSum2 = new Function('x', 'y', 'return 1+1');
console.log(getSum2('1', '1'));

// Object Constructors
const John1 = {
  name: 'John',
};

const John2 = new Object({ name: 'John' });

// Array Constructors
const myList1 = [1, 2, 3];
const myList2 = new Array(1, 2, 3);

// Regxp (Regular Expression) constructor
const re1 = /\w+/; // Looking for a word charactor that appears more than 1 time
const re2 = new RegExp('\\w+'); // Have to escape charcters with \
