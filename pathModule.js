//Importing modules
const path = require('path');
const fs = require('fs');

//Reading the files
const filepath = path.join('src','home','dummy.txt'); // O/P: src\home\dummy.txt
const filePathResolve = path.resolve('src','home','dummy.txt'); //O/P: C:\Users\Ka\Node JS\src\home\dummy.txt
const fileExt = path.extname(filePathResolve); //O/P:  .txt

console.log(filePathResolve);
console.log(filepath);
console.log(fileExt);

fs.readFile(filepath,(err,data)=>{
    if(err){
        console.log('Something went Wrong');
    }
    else{
        console.log(data.toString());
    };
});
