/* eslint-disable no-undef */

const http = new EasyHTTP();

// Get All Posts
http.get(
  'https://jsonplaceholder.typicode.com/posts',
  // With callback
  // 'response' here is a local parameter, it is going to be
  // the data returned from the callback function
  // self.http.responseText
  function(err, posts) {
    if (err) {
      console.log(err);
    } else {
      console.log(posts);
    }
  }
);

// Assumed to work but DOES NOT
// const posts = http.get('https://jsonplaceholder.typicode.com/posts');
// console.log(posts);

// Returns UNDEFINED ... WHY? Callback --- data is returned
// before it is added. Solved with callback

// Get Single Post
// Add in 1 at the end and it will return the post with the id of 1
// http.get(
//   'https://jsonplaceholder.typicode.com/posts/1',
//   // With callback
//   // 'response' here is a local parameter, it is going to be
//   // the data returned from the callback function
//   // self.http.responseText
//   function(err, post) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(post);
//     }
//   }
// );

// Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });
// this will result in a new post with id of 101. That 101
// was handled on their end

// Make Put Request
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// Delete A Post
http.delete(
  'https://jsonplaceholder.typicode.com/posts/1',
  // With callback
  // 'response' here is a local parameter, it is going to be
  // the data returned from the callback function
  // self.http.responseText
  function(err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
    }
  }
);
