let posts = [
  {
    title: 'post1',
    body: 'post one',
  },
  {
    title: 'post2',
    body: 'post two',
  },
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

// getPosts();

createPost(
  {
    title: 'post3',
    body: 'post three',
  },
  getPosts
);
