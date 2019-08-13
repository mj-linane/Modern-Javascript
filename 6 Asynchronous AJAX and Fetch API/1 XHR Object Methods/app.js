/* eslint-disable no-use-before-define */

document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN -- Specify type and file
  xhr.open('GET', 'data.txt', true);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function() {
    console.log('READYSTATE', xhr.readyState);
  };

  // General action when page loads
  xhr.onload = function() {
    console.log('READYSTATE', xhr.readyState);
    // This refers to the xhr object
    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>
          ${this.responseText}
        </h1>`;
    }
  };

  xhr.onreadystatechange = function() {
    console.log('READYSTATE', xhr.readyState);
    if (this.status === 200 && this.readyState === 4) {
      console.log(this.responseText);
    }
  };

  // Optional -- for errors
  xhr.onerror = function() {
    console.log('Request error...');
  };
  xhr.send();

  // readyState Values
  // Can access readyState by console logging XHRreadyState
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  // HTTP Statuses
  // 200: OK
  // 403: Forbidden
  // 404: Not Found
}
