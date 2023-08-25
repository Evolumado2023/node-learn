//console.log("OLá, mundo!");

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Olá, Darlison Silva!');
})

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
})