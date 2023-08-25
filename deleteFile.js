//  DELETANDO arquivos

const fs = require('fs');

try {
    fs.unlinkSync('mynewfile2.text');
    console.log('File deletado com sucesso!!!');
} catch (err) {
    console.error('Erro ao deletar arquivo:', err);
}


/*var fs = require('fs');

fs.unlink('mynewfile1.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});*/