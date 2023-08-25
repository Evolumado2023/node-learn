var http = require('http');
var url = require('url');
var fs = require('fs');
console.log('testando a conexão entre páginas web');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "teste1.html" + q.pathname;
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 não encontrado");
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(3000);

