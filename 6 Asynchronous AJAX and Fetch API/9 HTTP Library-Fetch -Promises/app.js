/* eslint-disable no-shadow */
/* eslint-disable no-undef */
const http = new EasyHTTP();

// Get users
// http
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data));

// User Data
const data = {
  name: 'John Doe',
  username: 'JohnDoe',
  email: 'johndoe@mjlinane.com'
};

// Make CREATE/POST Request User Data
http
  .post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data));

// Make PUT/UPDATE Request User Data
http
  .put('https://jsonplaceholder.typicode.com/users/2', data)
  .then(data => console.log(data));

// Make PUT/UPDATE Request User Data
http
  .delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data));
