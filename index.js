const http = require("http");
const fileServer = require("./src/fileServer");

http
  .createServer(function(req, res) {
    fileServer.readFile(req, res);
  })
  .listen(8080);

//localhost:8080/?year=2019&month=July
