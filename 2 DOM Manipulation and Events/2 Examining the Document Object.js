/* eslint-disable prefer-const */
let val;

// Accessing document object elements
val = document;
val = document.all;
val = document.all[2]; // Can access individual elements in the document
val = document.all.length; // Counts all elements in the DOM
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// Can select page elements without id selectors -- not recommended
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

// Can select page links without id selectors -- not recommended
val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;

// Can access images
val = document.images;

// Can access attributes
val = document.scripts;
val = document.scripts[2].getAttribute('src');

// For each cant be used on collections
// For each is for arrays only -- we need
// to convert it to an array
let { scripts } = document;

// Convert to array
let scriptsArr = Array.from(scripts);

// For each on converted DOM object into array
scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);
