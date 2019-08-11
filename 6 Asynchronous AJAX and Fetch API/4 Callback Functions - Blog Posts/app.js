const posts = [
  { title: 'Post 1', body: 'This is post 1' },
  { title: 'Post 2', body: 'This is post 2' }
];

// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// SYNCHRONOUS METHOD
// createPost({ title: 'Post Three', body: 'This is post 3' });

// getPosts();

// RESULT - Took 2 seconds to create the post
// but only 1 second to get the posts, therefore
// post 3 never appears in the getPost request

// ASYNCHRONOUS METHOD USING CALLBACKS

function createPost(post, callBack) {
  setTimeout(function() {
    posts.push(post);
    callBack();
  }, 2000);
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post 3' }, getPosts);
