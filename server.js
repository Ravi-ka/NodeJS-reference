// res.end() Method

const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url);
    res.write('This is coming from NodeJS. ');
    if(req.url == '/admin'){
        return res.end('This is the admin page'); //return is used to end the response to resolve the error. Without the return, it will throw an error. We can also use if/else to solve this.
    }

    res.end('The response ends here')
});

server.listen(3200);
console.log("Server is listening on 3200");
