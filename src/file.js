const fs = require("fs");

exports.readFile = function(res) {
  fs.readFile("./index.html", function(err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end("read file done...");
  });
};

exports.appendFile = function(res) {
  const nameFile = "demoNewFile.txt";
  const contentFile = "Hello file";
  fs.appendFile(nameFile, contentFile, function(err) {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("create file done...");
  });
};

exports.openFile = function(res) {
  const nameFile = "demoNewFile.txt";
  const roleFile = "w";
  fs.open(nameFile, roleFile, function(err) {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("open file done...");
  });
};

exports.writeFile = function(res) {
  const nameFile = "demoNewFile.txt";
  const contentFile = "write new content";
  fs.writeFile(nameFile, contentFile, function(err) {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("write file done...");
  });
};

exports.deleteFile = function(res) {
  const nameFile = "newDemoNewFile.txt";
  fs.unlink(nameFile, function(err) {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text.html" });
    res.end("delete file done ...");
  });
};

exports.renameFile = function(res) {
  const nameFile = "demoNewFile.txt";
  const newNameFile = "newDemoNewFile.txt";
  fs.rename(nameFile, newNameFile, function(err) {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("rename file done...");
  });
};
