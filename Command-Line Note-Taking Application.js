const fs = require('fs');

const Solution = () => {
  // 1. Create a file named "notes.txt" dynamically and write the initial phrase
  const initialPhrase = 'The world has enough coders ';
  fs.writeFileSync('notes.txt', initialPhrase);

  // 2. Retrieve and display the initial contents of "notes.txt"
  const initialContents = fs.readFileSync('notes.txt', 'utf-8');
  //console.log('Contents of notes.txt before appending:');
  console.log(initialContents);

  // 3. Append the phrase "BE A CODING NINJA!" to the existing contents
  const additionalPhrase = 'BE A CODING NINJA!';
  fs.appendFileSync('notes.txt', additionalPhrase);

  // 4. Retrieve and display the updated contents of "notes.txt"
  const updatedContents = fs.readFileSync('notes.txt', 'utf-8');
  //console.log('Contents of notes.txt after appending:');
  console.log(updatedContents);
};

Solution();
module.exports = Solution;


/*
Title:
Command-Line Note-Taking Application in Node.js

Introduction:
Create a command-line application in Node.js that allows users to perform basic note-taking operations. Users can create, read, and update notes using the FileSystem module in Node.js. This application can be used by individuals who want a simple and efficient way to manage their notes directly from the command line.

Objectives:

1.Create a file named "notes.txt" dynamically and write the phrase "The world has enough coders" to it.
2.Retrieve the contents of the "notes.txt" file and display them on the console.
3.Append the phrase "BE A CODING NINJA!" to the existing contents of the "notes.txt" file.
4.Retrieve the updated contents of the "notes.txt" file and display them on the console.

Expected Output:

The program should display the contents of the "notes.txt" file both before and after appending the additional phrase. The output should match the provided screenshot.

https://files.codingninjas.in/fs-27146.png

Requirements:
The solution should be implemented in Node.js and utilize the FileSystem module for file handling operations.
*/
