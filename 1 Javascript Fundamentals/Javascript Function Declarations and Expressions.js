/* eslint-disable require-jsdoc */
// function greet(firstName = 'John', lastName = 'Marston') {
//   return `Hello ${firstName} ${lastName}`;
// }

// console.log(greet('John', 'Marston'));

// Calls function without parameters but the parameters already have a defaul;t
// console.log(greet());


// FUNCTION EXPRESSIONS

const square = function(x = 3) {
  return x * x;
};

console.log(square());

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// Declare and run at the same time

// (function() {
//   console.log('IIFE Ran...');
// })();

(function(name) {
  console.log('Hello' + name);
})('MJ');


// PROPERTY METHODS
const todo = {
  add: function() {
    console.log('Do something');
  },
  edit: function(id) {
    console.log(`Edit todo ${id}`);
  },
};


todo.delete = function() {
  console.log('Delete todo...');
};

todo.add();
todo.edit(22);
todo.delete();
