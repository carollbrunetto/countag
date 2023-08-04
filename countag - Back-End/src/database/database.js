const databaseName = "countag";
const connection = require("./connection");


const database = () => {

    connection.query(`DROP DATABASE IF EXISTS ${databaseName}`, (erro, result) => {
        if (erro) {
            console.error('Erro ao apagar banco de dados: ', erro);
            return;
        }
    
    });

    connection.query(`CREATE DATABASE IF NOT EXISTS ${databaseName}`, (erro, result) => {
        if (erro) {
            console.error('Erro ao criar banco de dados: ', erro);
            return;
        }
    
    });
    
    connection.query(`USE ${databaseName}`, (erro, result) => {
        if (erro) {
            console.error('Erro ao selecionar banco de dados:', erro);
            return;
        }
    
    });
    
    const createTableConsultasQuery = `
        CREATE TABLE if not exists consultas (
            id_consultas serial  NOT NULL AUTO_INCREMENT,
            url varchar(5000)  NOT NULL,
            data datetime NOT NULL,
            CONSTRAINT consultas_pk PRIMARY KEY (id_consultas)
        )
    `;
    
    const createTableContagemQuery = `
        CREATE TABLE if not exists contagem_tag (
            id_contagemTag serial NOT NULL AUTO_INCREMENT,
            tag varchar(50) NOT NULL,
            quantidade int NOT NULL,
            consultas_id_consultas bigint unsigned NOT NULL,
            CONSTRAINT contagem_tag_pk PRIMARY KEY (id_contagemTag),
            CONSTRAINT consultas_id_consultas_fk FOREIGN KEY (consultas_id_consultas) REFERENCES consultas(id_consultas)
        );
    `

    
    connection.query(createTableConsultasQuery, (erro, result) => {
        if (erro) {
            console.error('Erro ao criar tabela:', erro);
            return;
        }
    
    });
    
    
    connection.query(createTableContagemQuery, (erro, result) => {
        if (erro) {
            console.error('Erro ao criar tabela:', erro);
            return;
        }
    
    });
    
}

module.exports = database;