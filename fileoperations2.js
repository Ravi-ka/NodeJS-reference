const fs = require('fs');

// Creating a file using "writeFileSync"
try{
fs.writeFileSync('employee.txt','Name: Ka, Age: 24, Role: Dev');
console.log('File has been created');
}
catch(err){
    console.log('Error Occurred while performing the action')
}

// Appending some data to the existing file
fs.appendFileSync('employee.txt','\nName: Ravi, Age: 24, Role: Manager,Branch: Blr');
fs.appendFileSync('employee.text','\nName: Ravi, Age: 24, Role: Manager');
console.log('employee.text has been created');
// If we provide the file path as employee.text it will create a new file 

// Deleting a file
try{
    fs.unlinkSync('employee.text');
    console.log('employee.text has been successfully deleted');
}
catch(err){
    console.log("Error Occurred while performing the action")
}