// Q. create a server 
//   - add a listener on port 8000
//   - set appropriate header for html response using `res.setHeader`
//   - return an HTML response(`<h3>Welcome to altcampus</h3>`) 
                    //    And
// Q. Repeat above question using `res.writeHead` to set status code and Content-Type at the same time.


var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res){
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h3>Welcome to altcampus</h3>`);
}

server.listen(8000, () => {
    console.log('server listening on port 8000');
})