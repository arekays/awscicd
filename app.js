const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello from EKS! Pipeline is working!');
}).listen(3000);
