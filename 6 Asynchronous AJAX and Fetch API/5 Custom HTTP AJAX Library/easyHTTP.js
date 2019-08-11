/* eslint-disable no-unused-vars */
// Using AJAX
class EasyHTTP {
  constructor() {
    // Uses this.http instead of xhr because this is
    // is object oriented. Would normally look like
    // const xhr = new XMLHttpRequest();
    this.http = new XMLHttpRequest();
  }
}

// Make an HTTP GET Request
// Adds a callback to allow time for the results to be fetched
EasyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  // Self varaible captures this in this scope.
  const self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      // Null is an error if there is nothing there
      callback(null, self.http.responseText);
    } else {
      callback(`Error: ${self.http.status}`);
    }
  };
  this.http.send();
};

// Make an HTTP POST Request
EasyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  const self = this;
  this.http.onload = function() {
    // The response text should be the new post we make
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// Make an HTTP PUT Request
EasyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  const self = this;
  this.http.onload = function() {
    // The response text should be the new post we make
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// Make an HTTP DELETE Request
EasyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  // Self varaible captures this in this scope.
  const self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      // Null is an error if there is nothing there
      // Response is going to be nothing, because we are deleting the post
      callback(null, 'Post Deleted');
    } else {
      callback(`Error: ${self.http.status}`);
    }
  };
  this.http.send();
};
