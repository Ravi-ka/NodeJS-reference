const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.method == 'POST'){
        //console.log(req.body);
        let body="";
        req.on('data',(chunk)=>{   //The incoming data will be in chunks, 'req.on -> data' will collect all the chunks and append it to the appropriate data
            body += chunk.toString(); //The body var will store the final chunks and converts to a string
        });
        req.on('end',()=>{ // 'req.on -> end' will be the end of receiving the data from client
            console.log(body);
            res.end('Data is received');
        })
    }else{ //Else part is added because the above code will take some time to get all the data. since it takes some time within that the below code will be executed, to resolve this else block is added. 
        console.log('Function ends here');
        res.end('Welcome to NodeJS')
    }
    
});
server.listen(3100);
console.log("Port is listening on 3100");