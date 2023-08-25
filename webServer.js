const http = require('http');

http.createServer(function (req, res) {
    res.write("Your project was sussefull!!! Congratulations!");
    res.end();
}).listen(3000);