/* eslint-disable no-use-before-define */
document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getApi);

// Get local text file data
function getText() {
  // fetch responds with a promise
  fetch('test.txt')
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      console.log(data);
      document.getElementbyID('output').innerHTML = data;
    })
    .catch(function(error) {
      console.log(error);
    });
}

// Get local JSON data
function getJson() {
  // fetch responds with a promise
  fetch('posts.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(function(post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(error) {
      console.log(error);
    });
}

// Get API data
function getApi() {
  // fetch responds with a promise
  fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(function(user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.log(error));
}
