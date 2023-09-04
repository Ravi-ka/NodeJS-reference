/*
This is Async method. Used to perform the Non-Blocking code.
Here try / catch will *NOT* work.
*/

// Importing fs module
const fs = require('fs');

//Creating a file
fs.writeFile('dummy.txt','This is a Dummy file',(err)=>{
    if(err){
        console.log('Something went wrong');
    }
    else{
        console.log('File has been created')
    }
});

//Appending a file
fs.appendFile('dummy.text','\nThis line appended',(err)=>{
    if(err){
        console.log('Something went wrong');
    }
    else{
        console.log('File has been appended');
    }
});

//Deleting a file
fs.unlink('dummy.text',(err)=>{
    if(err){
        console.log('Something went wrong');
    }
    else{
        console.log('file has been deleted');
    }
});
