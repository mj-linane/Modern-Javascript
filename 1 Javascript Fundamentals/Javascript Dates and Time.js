// See documentation for full list of methods

let val;

// Setup a new date object
const today = new Date();
val = today;

// Converts date from object to string
val = today.toString();


// New Birthdate in date format
let birthdate = new Date('1-01-1980 11:25:00');
val = birthdate;


// Create a new date using the month
birthdate = new Date('January 1, 1980 11:25:00');


// Get Month -- it is 0 indexed
val = today.getMonth();


// Get date of the month
val = today.getDate();


// Get the day, Sunday=0
val = today.getDay();


// Other methods
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();


// Get Timestamp of seconds past since 1/1/1970
val = today.getTime();


// Can edit the value of the time
birthdate.setMonth(2);
birthdate.setDate(12);
birthdate.setFullYear(1990);
birthdate.setHours(3);
birthdate.setMinutes(30);
birthdate.setSeconds(25);


// Console log statements
console.log(val);
console.log(birthdate);
