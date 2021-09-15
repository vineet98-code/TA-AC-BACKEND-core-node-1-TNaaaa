// Q. write code to create a node server 
//   - add listener on port 5566
//   - console request url and request method
//   - return a text response with requested url and method

var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res){
    
    res.end();
}

server.listen(5566, () => {
    console.log('server listening on port 5000');
})