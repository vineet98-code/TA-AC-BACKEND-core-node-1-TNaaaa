var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res){
    console.log(req.method, req.url);
    if(req.method === 'GET' && req.url === '/'){
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to homepage');
    } else if(req.method === 'GET' && req.url === '/about'){
        res.setHeader('Content-Type', 'text/plain');
        res.end('<h2>this is all about NodeJs</h2>');
    } else if(req.method === 'POST' && req.url === '/about'){
        res.setHeader('Content-Type', 'application/json');
        res.end('{message: this is a post request}');

    }

    // res.setHeader('Content-Type', 'text/html');    or  write this
    // res.writeHead(200, {'content-Type': 'text/html'});
}

server.listen(5000, () => {
    console.log('server listening on port 5000');
})