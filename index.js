const http = require("http");
const url = require("url");
const time = require("./src/time");

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    const { year, month } = url.parse(req.url, true).query;
    res.end("year " + year + " month " + month);
  })
  .listen(8080);

//localhost:8080/?year=2019&month=July
