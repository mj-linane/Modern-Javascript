/* eslint-disable require-jsdoc */
/* eslint-disable no-var */

// Global Scope

var a = 1; // Function Level Scope
const b = 2; // Block Level Scope
const c = 3; // Block Level Scope

function test() {
  var a = 4;
  const b = 5;
  const c = 6;
  console.log('Function Scope', a, b, c);
}

test();

console.log('Global Scope', a, b, c);

// Block Scope
// Anything in curly braces

if (true) {
  // Block Scope
  var a = 4;
  const b = 5;
  const c = 6;
  console.log('If Scope', a, b, c);
}

for (let a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
}
