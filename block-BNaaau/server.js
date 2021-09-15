var http = require('http');
// var fs = require('fs');


var server = http.createServer(handleRequest);

function handleRequest(req, res){
    console.log(req, res);
}

//  res is writable string and we write to it.
//  req is for resd the file

// function handleRequest(req, res){

//     if(req.method === 'GET' && req.url === '/file'){
//         fs.readFile('./index.html', (err, content) => {
//             if(err) console.log(err);
//             res.setHeader('Content-Type', 'text/html');
//             res.end(content);
//         })
 
//     } 
//     if(req.method === 'GET' && req.url === '/stream'){
//         res.setHeader('Content-Type', 'text/html');
//         // Following two Read File method are to read the content from req  object
//         fs.createReadStream('./index.html').pipe(res); // pipe mainly push into next file

//             //             or

//         // fs.readFile('./index.html', (err, content) => {
//         //     if(err) console.log(err);
//         //     console.log(content);
//         //     res.end(content);
//         // })
//     }

//     // res.setHeader('Content-Type', 'text/html');    or  write this
//     // res.writeHead(200, {'content-Type': 'text/html'});
// }

server.listen(5000, () => {
    console.log('server listening on port 5000');
})