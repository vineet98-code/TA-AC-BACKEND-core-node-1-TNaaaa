var url = require("url");
// Before the ? part we call it as a path name. After the ? part we call it as a query string 
const parsedUrl = url.parse(
  "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male",
  true
);
console.log(parsedUrl);


const parsedUrl1 = url.parse(
  "https://google.com",
  true
);
console.log(parsedUrl1);

