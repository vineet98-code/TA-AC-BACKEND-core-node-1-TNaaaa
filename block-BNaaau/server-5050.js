// Q. create a server
//   - add listener on port 5050
//   - use postman to do a POST request on index route
//   - console to check request method
//   - send HTML response i.e. `<h2>posted for first time</h2>`

var http = require('http');

var PORT = 5050;

var server = http.createServer(handleRequest);

function handleRequest(req, res){
    console.log(req.method);
    res.end(`<h2>posted for first time</h2>`);
}

server.listen(PORT, () => {
    console.log('server listening on port PORT');
})