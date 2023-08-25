var url = require('url');
var adr = 'http://localhost:3000/default.html?year=2023&month=agosto';
var q = url.parse(adr, true);

console.log(q.hostname); // retorna o localhost
console.log(q.pathname); // retorna o default.html
console.log(q.search); // retorna a data

var qdata = q.query;
console.log(qdata.month);