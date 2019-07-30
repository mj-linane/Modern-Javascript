// Make array by hardcoding/prefilling the numbers
const numbers = [43, 56, 33, 23, 44, 36, 5];
// Make array using array constructor
// eslint-disable-next-line no-array-constructor
const numbers2 = new Array(22, 45, 33, 76, 34);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [25, 'Hey!', true, undefined, null, {a: 1, b: 1}, new Date()];
//
let val;

// Get array length
val = numbers.length;


// Check if is array
val = Array.isArray(numbers);


// Get single value from an array
val = numbers[3];


// \n Insert into an array
numbers[2] = 100;


// Find index od value
val = numbers.indexOf(44);


// MUTATING ARRAYS

// Add on to the end
numbers.push(100);


// Add numbers on to the front of array
numbers.unshift(120);


// Take it off the end of array
numbers.pop();


// Take off from the front of array
numbers.shift();


// Splice values in array
numbers.splice(1, 3);


// Reverse elements in array
numbers.reverse();


// Concatenate array
val = numbers.concat(numbers2);


// Sorting Arrays A-Z 0-9 first char/number
val = fruit.sort();
val = numbers.sort();


// Use the 'compare' function to sort properly
val = numbers.sort(function(a, b) {
  return a - b;
});


// Reverse sort
val = numbers.sort(function(a, b) {
  return b - a;
});


/**
 * Returns true/false for under 50
 * @param {number} num The first number
 * @return {boolean} t/f if the number is under 50
 */
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);


// Console Log Statements
console.log(numbers);
console.log(val);
console.log(mixed);
