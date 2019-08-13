const posts = [
  { title: 'Post 1', body: 'This is post 1' },
  { title: 'Post 2', body: 'This is post 2' }
];

// NO CALLBACKS -- USE PROMISES

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      post.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject(new Error('Something went wrong'));
      }
    }, 2000);
  });
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

createPost({ title: 'Post Three', body: 'This is post 3' })
  .then(getPosts)
  .catch(function(err) {
    console.log(err);
  });
