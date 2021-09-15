// Q. write code to create a node server 
//   - add listener on port 5555
//   - console request headers
//   - respond with content of user-agent from request headers.

var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res){
    console.log(req.header);
    res.end(req.headers['user-agent']);
}

server.listen(5555, () => {
    console.log('server listening on port 5555');
})