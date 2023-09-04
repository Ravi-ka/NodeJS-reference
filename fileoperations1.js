const fs = require('fs');

//  To read file content using blocking code.
console.log('File has been started');

const buffer = fs.readFileSync('data.txt',{encoding:'utf8'});
console.log(buffer);

console.log('This is the second operation');

// Output of this file 
// PS C:\Users\Ka\Node JS> node fileoperations.js
// File has been started
// name: ka
// age:24
// role: Dev
// This is the second operation - 'this statement is waiting for the previous statement to complete' which is example of blocking code