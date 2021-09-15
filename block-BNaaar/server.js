var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res){
    console.log(req.method, req.url);
    res.statusCode = 201;
    // res.setHeader('Content-Type', 'text/html');
    // res.writeHead(200, {'content-Type': 'text/html'});
    res.end('<h2>Hello Campus</h2>');
}

server.listen(5000, () => {
    console.log('server listening on port 4444');
})