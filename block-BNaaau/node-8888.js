// Q. create a basic node server
//   - add a listener at port 8888
//   - add appropriate header for json response
//   - send json response({success: true, message: 'Welcome to Nodejs'})

var http = require('http');

var PORT = 8888;

var server = http.createServer(handleRequest);

function handleRequest(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        success: true, 
        message: 'Welcome to Nodejs'
       })
    );
}

server.listen(PORT, () => {
    console.log('server listening on port PORT');
})