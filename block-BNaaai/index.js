var url = require("url");
// Before the ? part we call it as a path name. After the ? part we call it as a query string 
const parsedUrl = url.parse(
  "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male",
  true
);
console.log(parsedUrl);

console.log(parsedUrl.pathname, parsedUrl.query);

console.log(parsedUrl.host, parsedUrl.protocol);





