/* criando arquivos

var fs = require('fs');
fs.appendFile('index.html', 'Hello contente!', function(err){
    if (err) throw err;
    console.log('Saved!');
})*/


// abrindo arquivos

var fs = require('fs');
fs.open('mynewfile2.text', 'w', function (err, file){
    if(err) throw err;
    console.log("Teste executado com sucesso!!!");
})


