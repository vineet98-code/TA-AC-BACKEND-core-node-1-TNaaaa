// Q. write code to create a node server 
//   - add listener on port 7000
//   - also add a callback function to listener with a console `server listening on port 7000`
//   - return entire request headers in response.

var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res){
    res.end(JSON.stringify(req.headers)); // convert it into string using json.stringify
}

server.listen(7000, () => {
    console.log('server listening on port 7000');
})