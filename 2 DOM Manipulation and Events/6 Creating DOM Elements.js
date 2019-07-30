// Create an element and insert it into the DOM
const li = document.createElement('li');

// Add a class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello'));

// Create a new link element
const link = document.createElement('a');

// Add classes to new link element
link.className = 'delete-item secondary-content';

// Add icon HTML
link.innerHTML = '<i class = "fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);
