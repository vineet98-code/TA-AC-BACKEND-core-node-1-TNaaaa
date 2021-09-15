// Q. create a server and handle query params from the request on following url i.e. `/users?email=nodeserver@gmail.com` from browser

//   - parse the  request url using parse method from url module
//   - console pathname from parsed url in above step
//   - grab url using `req.url`
//   - differentiate between `req.url` and `parsedUrl.pathname`
//   - grab the email from query params
//   - return json response with email from query params

var http = require('http');

var PORT = 2346;

var fs = require('fs');
var url = require('url');


var server = http.createServer(handleRequest);


function handleRequest(req, res){
    var parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl.pathname, req.url);
    console.log(parsedUrl);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(parsedUrl.query));
}

server.listen(PORT, () => {
console.log('server listening on port PORT');
})