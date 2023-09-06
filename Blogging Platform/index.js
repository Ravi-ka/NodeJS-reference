// Write your code here
const { writeBlog, publishBlog } = require('./blogActions.js');

// Write a blog to 'myblog.txt'
writeBlog('myblog.txt');

// Publish and display the blog from 'myblog.txt'
const publishedBlog = publishBlog('myblog.txt');
if (publishedBlog !== null) {
  console.log('Published Blog:');
  console.log(publishedBlog);
}
