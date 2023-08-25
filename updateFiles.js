/*  atualizando arquivos

const fs = require('fs');

fs.appendFile('mynewfile1.txt', 'this is my new text', function (err) {
    if (err) throw err;
    console.log('Update sussefull!');
})*/

const fs = require('fs');

fs.writeFile('mynewfile3.txt', 'this is my update text new', function (err) {
    if (err) throw err;
    console.log('Replaced!');
})