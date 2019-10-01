const http = require("http");
const eventModule = require("./src/events");

http
  .createServer(function(req, res) {
    eventModule.eventOn();
    setTimeout(function() {
      eventModule.eventEmit();
      res.end();
    }, 3000);
  })
  .listen(8080);

//localhost:8080/?year=2019&month=July
