// Saving in JS needs to be saved as a string first
// Need to be converted to JSON
// local storage will stay until cleared out
// session storage will clear once the browser is closed

// SETTING STORAGE ITEMS
// set local storage item
// localStorage.setItem('name', 'MJ');
// localStorage.setItem('age', '33');

// set session(temp) storage item
// sessionStorage.setItem('name', 'Katie');

// // REMOVE STORAGE ITEMS
// localStorage.removeItem('name');

// // GET FROM STORAGE
// const name = localStorage.getItem('name');
// console.log(name);

// // CLEAR LOCAL STORAGE
// localStorage.clear();
// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e) {
  const task = document.getElementById('task').value;

  // task gets replaced, to fix we create an array of tasks stored as a string

  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    // Get a list of tasks from task array
    // Will be in JSON so need to parse it for it
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  // Add additional ones to tasks array
  tasks.push(task);

  // Will add additional items but will change them to a string/JSON first
  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('Task Saved');

  e.preventDefault();
});

// To get items, we need to wrap tasks and parse for JSON
const tasks = JSON.parse(localStorage.getItem('tasks'));

// forEach needs to run on an array, hence the JSON parse above
tasks.forEach(function(task) {
  console.log(task);
});
