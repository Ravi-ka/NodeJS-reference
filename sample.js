const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=> {
    const data = fs.readFileSync('./index.html');
    //res.write('The server is connected ');
    if(req.url == '/admin'){
        res.end(data);
    }
});
server.listen(8080);
console.log("Port is listening to the mentioned server")