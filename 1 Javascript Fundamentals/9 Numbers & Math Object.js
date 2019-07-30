const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object (Has properties and methods)
val = Math.PI;
val = Math.E;
// Rounding
val = Math.round(2.8);

// Rounding Up
val = Math.ceil(2.4);

// Rounding Down
val = Math.floor(2.8);

// Squaring
val = Math.sqrt(64);

// Absolute Number
val = Math.abs(-3);

// Power
val = Math.pow(8, 2);

// Min and Max
val = Math.min(2, 33, 4, -8, 7);

val = Math.max(2, 33, 4, -8, 7);

// Random Decimal
val = Math.random();

/* Random Interger
Multiplied by max number inclusive.
then wrap it in math.floor
*/
val = Math.floor(Math.random() * 20+1);

console.log(val);
