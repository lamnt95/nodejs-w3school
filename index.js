const http = require("http");
const time = require("./src/time");

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World" + time.date());
  })
  .listen(8080);
