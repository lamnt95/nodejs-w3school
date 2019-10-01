const url = require("url");
const fs = require("fs");

exports.readFile = function(req, res) {
  const { pathname } = url.parse(req.url, true);
  const pathFile = "./src/fileServer" + pathname + ".html";
  console.log(pathFile);
  fs.readFile(pathFile, function(err, data) {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      return res.end("404 Not Found");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
};
