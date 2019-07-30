const firstName = 'MJ';
const lastName = 'Linane';

let val;
const str = 'Hey! How are you? My name is MJ';
const lessonTags = 'Topic 1, Topic 2';


// String Concatenation
val = firstName + lastName;


// String Append
val = 'MJ ';
val += 'Linane';

val = 'Hello, my name is' + val;


// String Escaping
val = 'I\'m so happy to be here!';


// String Length
val = firstName.length;


// String Concat() Method
val = firstName.concat(' ', lastName);


// Change case
val = firstName.toLowerCase();
val = firstName.toUpperCase();


// Treat strings like an array
val = firstName[0];


// Can use String indexOf()
// to find position of a letter
val = firstName.indexOf('J');


// Can use String lastIndexOf() to find last known
val = firstName.lastIndexOf('J');


// Can find character at string index
val = lastName.charAt('4');


// Get string last character
val = firstName.charAt(firstName.length - 1);


// Get string substring
val = lastName.substring(0, 4);


// Slice a string
val = lastName.slice(0, 3);


// Use string slice to put in negative
// will start from back and take last 3
val = lastName.slice(-3);


// String split() splits string
// into an array at a seperator
val = str.split(' ');
val = lessonTags.split(',');


// String Replace()
val = str.replace('MJ', 'Scott');


// String Includes()
val = str.includes('foo');


console.log(val);
