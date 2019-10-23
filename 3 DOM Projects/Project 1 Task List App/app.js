/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // DOM Load event
  document.addEventListener('DOMContentLoaded', getTasks);

  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  /* Because there are more than 1 icon,
  and they are going to be created dynamically,
  we need to create a delegating event listener
  for the entire list
   */
  taskList.addEventListener('click', removeTask);

  // Clear task event
  clearBtn.addEventListener('click', clearTasks);

  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// Get Tasks from Local Storage
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') == null) {
    tasks = [];
  } else {
    // Local storage can only store strings
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(task => {
    // Create task li element
    const li = document.createElement('li');

    // Add class
    li.className = 'collection-item';

    // Create text node and append to li
    li.appendChild(document.createTextNode(task));

    // Create new link element
    const link = document.createElement('a');

    // Add class (In materialize, it needs secondary content)
    link.className = 'delete-item secondary-content';

    // Add icon to html
    link.innerHTML = '<i class="fa fa-times"></i>';

    // Append link to the li
    li.appendChild(link);

    // Append li to the ul
    taskList.appendChild(li);
  });
}

// Add task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
  }

  // Create task li element
  const li = document.createElement('li');

  // Add class
  li.className = 'collection-item';

  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  // Create new link element
  const link = document.createElement('a');

  // Add class (In materialize, it needs secondary content)
  link.className = 'delete-item secondary-content';

  // Add icon to html
  link.innerHTML = '<i class="fa fa-times"></i>';

  // Append link to the li
  li.appendChild(link);

  // Append li to the ul
  taskList.appendChild(li);

  // Store in local storage
  storeTaskInLocalStorage(taskInput.value);

  // Clear input
  taskInput.value = '';

  e.preventDefault();
}

// Store task in local storage
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') == null) {
    tasks = [];
  } else {
    // Local storage can only store strings
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();

      // Remove from local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove from Local Storage
function removeTaskFromLocalStorage(taskItem) {
  // check local storage and see if anything is there
  let tasks;
  if (localStorage.getItem('tasks') == null) {
    tasks = [];
  } else {
    // Local storage can only store strings
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach((task, index) => {
    // Text content will be actual text of the task
    // We want to see if that matches the task in the iteration
    if (taskItem.textContent === task) {
      // Get index position as a second parameter in the callback function
      // We get the index position and delete that element
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Tasks
function clearTasks() {
  // taskList.innerHTML = '';
  // Faster method
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // Clear from local storage
  clearTasksFromLocalStorage();
}

// Clear tasks from local storage
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

// Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  // Query selector all returns a node list that we can
  // run a for each loop on
  document.querySelectorAll('.collection-item').forEach(task => {
    const item = task.firstChild.textContent;
    // Searches all items, if no match, it will equal -1
    if (item.toLowerCase().indexOf(text) !== -1) {
      // shows if present
      task.style.display = 'block';
    } else {
      // no match, so we hide it
      task.style.display = 'none';
    }
  });
}
