// Q. create a node server 
//   - add listener on port 5100
//   - respond with 'My first server in NodeJS' using response object

var http = require('http');


var server = http.createServer(handleRequest);

function handleRequest(req, res){
    res.end('My first server in NodeJS');
}

server.listen(5100, () => {
    console.log('server listening on port 5100');
})