const fs = require('fs');

fs.rename('mynewfile1.txt', 'meuNovoTexto1.txt', function(err){
    if (err) throw err;
    console.log("Arquivo ernomeado com sucesso!!!");
})