const http = require("http");
const file = require("./src/file");

http
  .createServer(function(req, res) {
    file.deleteFile(res);
  })
  .listen(8080);

//localhost:8080/?year=2019&month=July
