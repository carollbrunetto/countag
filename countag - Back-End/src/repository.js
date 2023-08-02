const connection = require('./connection');



const repository = async () => {


   module.exports = function inserirConsultas(url, data) {
        const novaURL = url;
        const novaData = data;
        
        const insertQueryConsultas = 'INSERT INTO consultas (url, data) VALUES (?, ?)';
    
        connection.query(insertQueryConsultas, [novaURL, novaData], (err, result) => {
            if (err) {
                console.error('Erro ao executar o INSERT:', err);
                return;
            }
            console.log('Novo consulta inserida com sucesso!');
            console.log('ID da nova consulta:', result.insertId);
            res.status(200).send('Novo usuário inserido com sucesso!');
        });
    } 

    module.exports = function inserirContagemTag(tag, quantidade) {
        const novaTag = tag;
        const novaQuantidade = quantidade;
        
        const insertQueryConsultas = 'INSERT INTO contagem_tag (tag, quantidade) VALUES (?, ?)';
    
        connection.query(insertQueryConsultas, [novaTag, novaQuantidade], (err, result) => {
            if (err) {
                console.error('Erro ao executar o INSERT:', err);
                return;
            }
            console.log('Novo consulta inserida com sucesso!');
            console.log('ID do novo usuário:', result.insertId);
        });
    } 

    const query = connection.promise().query(`SELECT * FROM consultas`).then(
        (result) => {
            console.log(result);
            return result;
        }).catch ((erro) => {

            if (erro) {
                console.error('Erro ao CONSULTAR: ', erro);
                return;
            }
        }
    );


    return (query);
}


module.exports = repository;