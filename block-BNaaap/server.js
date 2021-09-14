var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res){
    // console.log(req.method, req.url);
    // res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 201;
    res.writeHead(200, {'content-Type': 'text/html'});
    res.end('Hello World');
}

server.listen(4444, () => {
    console.log('server listening on port 3000');
})