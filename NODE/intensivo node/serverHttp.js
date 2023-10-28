const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  res.statusCode = 200;
  res.end("hello wolrd node");
});

server.listen(port, (req, res) => {
  console.log(`iniciando servidor na porta ${port}`);
});
