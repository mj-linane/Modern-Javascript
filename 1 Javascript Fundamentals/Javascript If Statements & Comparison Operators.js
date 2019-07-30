// if (something) {
//   // do something;
// } else {
//   // do something else;
// }

const id = 100;

// // EQUAL TO VALUE
// if (id == 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// };

// // NOT EQUAL TO VALUE
// if (id != 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE AND TYPE
// if (id === 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// };

// // NOT EQUAL TO VALUE TYPE
// if (id !== 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // Test to see if id is defined
// if (typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }

// // TEST FOR GREATER OR LESS THAN
// if (id> 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }


// // TEST FOR IF ELSE
// const color = 'red';

// if (color === 'red') {
//   console.log(`Color is ${color}`);
// } else if (color === 'blue') {
//   console.log(`The color is ${color}`);
// }

// LOGICAL OPERATORS

// AND &&
const name = 'Steve';
const age = 20;

if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in the race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'Correct' : 'INCORRECT');


// WITHOUT BRACES
// if (id === 100)
//   console.log('CORRECT');
// else
//   console.log('INCORRECT');
