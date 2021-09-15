// Q. create a server
//   - add a listener on port 3333
//   - set status code 202 in response using `res.statusCode`.

var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res){
    res.statusCode = 202;
    
}

server.listen(3333, () => {
    console.log('server listening on port 5100');
})