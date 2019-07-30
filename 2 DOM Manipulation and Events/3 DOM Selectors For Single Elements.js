// Vanilla javascript can manipulate DOM elements
// Used to need jQuery for DOM manipulation, not anymore

// Single DOM Element selectors
// Single first element in the DOM
// Get Element by ID document.getElementById()
// Can't select a class

console.log(document.getElementById('task-title'));

// Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);
// console.log(document.getElementById('task-title').style);

// Change styling for dynamic functionality -- not to style the document
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';

// Change content
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'My Tasks';
// Use innerHTML for fetching info to put into text
document.getElementById('task-title').innerHTML =
  '<span style"color:red">Task List</span>';


// Document.querySelector() -- Newer and much more powerful
// Don't have to select by Id, can put in any CSS selector
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'hello world';
document.querySelector('li:nth-child(odd)').style.background = 'green';
