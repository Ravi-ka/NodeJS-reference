// // Import the modules
// const http = require('http');
// const fs = require('fs');

// // Create a Server
// const server = http.createServer((req, res)=> {
//     console.log(req.url);
//     const sampleModule = require('./sample');
//     const result = sampleModule.sum(10,50);
//     res.end("The result is ");
//     // if(req.url =='/admin'){
//     //     const data = fs.readFileSync('index.html');
//     //     res.end(data);
//     // }
//     // else if(req.url == '/product'){
//     //     const data2 = fs.readFileSync('index2.html');
//     //     res.end(data2);
//     // }
// });
// // To mention the port which it should listen 
// server.listen(8080);
// console.log('This port is listening and the server is running');

// // const sampleModule = require('./sample.js');

// // const result1 = sampleModule.sum(10,5);
// // const result2 = sampleModule.mean(10,5);

// // console.log(result1,result2);

import * as sampleModule from './sample.mjs';

console.log(sampleModule.sum(20,200));
// console.log(sum(20,20));
