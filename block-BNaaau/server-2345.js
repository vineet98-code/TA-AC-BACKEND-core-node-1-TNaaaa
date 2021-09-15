// Q. create a server and handle 2 different requests
//   - add a listener on port 2345
//   - handle GET request on '/' route where return your name in plain text in response
//   - handle GET request on '/about' route and return your name in h2 as HTML page.
//   - add a error handler at last to handle request made on other than above routes with a status code of 404.
                    //   And
                    
// Q. Handle 2 requests on same route with different method
//     1. GET on '/users' route where return a simple HTML form with name and email field
//     2. POST on '/users' route with a message 'Posted for the second time'.

var http = require('http');

var PORT = 2345;

var fs = require('fs');

var server = http.createServer(handleRequest);

// First Question Answer

// function handleRequest(req, res){
//     if(req.method === 'GET' && req.url === '/'){
//        res.setHeader('Content-Type', 'text/plain');
//        res.end(`Vineet`);
//     }
//     else if(req.method === 'GET' && req.url === '/about'){
//        res.setHeader('Content-Type', 'text/plain');
//        res.end(`<h2>Vineet</h2>`);
//     } else {
//         res.statusCode = 404;
//         res.end('page not found');
//     }
// }

// Second Question Answer

function handleRequest(req, res){
        if(req.method === 'GET' && req.url === '/users'){
            res.setHeader('Content-Type', 'text/plain');
           fs.createReadStream('./form.html').pipe(res);
        }
        else if(req.method === 'POST' && req.url === '/users'){
            res.end('Posted for the second time');
        }
        
    }

server.listen(PORT, () => {
    console.log('server listening on port PORT');
})