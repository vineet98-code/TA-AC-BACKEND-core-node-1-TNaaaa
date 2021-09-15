// Q. write code to create a node server 
//   - add listener on port 5555
//   - console request headers
//   - respond with content of user-agent from request headers.

var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res){
    req.setHeader('Content-Type', 'text/html');
    res.end();
}

server.listen(5555, () => {
    console.log('server listening on port 5000');
})