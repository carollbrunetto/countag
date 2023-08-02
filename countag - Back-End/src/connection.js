const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'UW&dF7w64oPS36m7ae*5uk*X*jP%7x5hvP#UsZRT',
});

connection.connect(function(erro) {
    if (erro) throw erro;
    console.log('Conectado!')
})
 
module.exports = connection; 