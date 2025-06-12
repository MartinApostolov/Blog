// scripts.js - Load blog posts dynamically from /posts folder

const postsContainer = document.getElementById('posts');

// Sample way to list posts from a known list
const postList = [
    {
        title: "My First Blog Post",
        description: "Welcome to my blog! This is the first post.",
        link: "posts/my-first-post.html"
    },
    // Add more posts here manually or automate this list via CMS
];

postList.forEach(post => {
    const card = document.createElement('div');
    card.className = 'post-preview';
    card.innerHTML = `
    <h2><a href="${post.link}">${post.title}</a></h2>
    <p>${post.description}</p>
  `;
    postsContainer.appendChild(card);
});
