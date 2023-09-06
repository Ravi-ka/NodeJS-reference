// Import the required modules
import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/') {
    let requestBody = '';

    // Read the request body
    req.on('data', (chunk) => {
      requestBody += chunk;
    });

    req.on('end', () => {
      // Append the request body to the "data.txt" file
      fs.appendFile('data.txt', requestBody, (err) => {
        if (err) {
          console.error('Error appending data:', err);
          res.statusCode = 500;
          res.end('Internal Server Error');
        } else {
          console.log('Data appended to data.txt');
          console.log(requestBody);
          res.end('Data received and appended');
        }
      });
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

export default server;
