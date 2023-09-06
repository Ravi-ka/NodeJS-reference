// Write your code here
const readline = require('readline');
const fs = require('fs');

// Function to write a user's blog to a specified file path
const writeBlog = (filePath) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Write your blog: ', (blogContent) => {
    fs.writeFile(filePath, blogContent, (err) => {
      if (err) {
        console.error('Error writing the blog:', err);
      } else {
        console.log('Blog saved successfully to', filePath);
      }
      rl.close();
    });
  });
};

// Function to publish a blog from a specified file path
const publishBlog = (filePath) => {
  try {
    const blogContent = fs.readFileSync(filePath, 'utf-8');
    return blogContent;
  } catch (err) {
    console.error('Error reading the blog:', err);
    return null;
  }
};

module.exports = {
  writeBlog,
  publishBlog,
};
