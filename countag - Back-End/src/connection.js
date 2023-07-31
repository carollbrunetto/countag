const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'UW&dF7w64oPS36m7ae*5uk*X*jP%7x5hvP#UsZRT',
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Conectado!')
})

module.exports = connection; 