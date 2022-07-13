const http = require('http');
const datas = require("./data")

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
   datas
  }));
});

server.listen(8000);