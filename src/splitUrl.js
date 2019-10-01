const url = require("url");

exports.splitUrl = function(res) {
  const address = "http://localhost:8080/default.html?year=2017&month=february";
  const parseUrl = url.parse(address, true);
  const { host, pathname, search, query } = parseUrl;
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(JSON.stringify({ host, pathname, search, query }));
  res.end("\nsplit url...");
};
