const connection = require('../database/connection');
const contaTags = require('../helpers/tagCounter');

async function inserirConsultas(url) {
    const novaURL = url;
    const novaData = new Date();
    let resultado = [];

    try {
        resultado = await contaTags(url);
    } catch (err) {
        console.error('URL inválida ou indisponível: ', err);
        return ['URL inválida ou indisponível'];
    }

    const insertQueryConsultas = 'INSERT INTO consultas (url, data) VALUES (?, ?)';
    try {
        const [result] = await connection.promise().query(insertQueryConsultas, [novaURL, novaData]);

        await inserirContagemTag(result.insertId, resultado);

        const consultas = await selectConsultas();
        const contagemConsulta = await selectContagemPorId(result.insertId);

        return [{ consultas, contagemConsulta }];
    } catch (err) {
        console.error('Erro ao executar o INSERT:', err);
        throw err; 
    }
}

async function inserirContagemTag(idConsulta, resultado) {

    const chaves = Object.keys(resultado);

    for (const novaTag of chaves) {
        const novaQuantidade = resultado[novaTag];

        const insertQueryContagemTag = 'INSERT INTO contagem_tag (tag, quantidade, consultas_id_consultas) VALUES (?, ?, ?)';
        try {
            const [result] = await connection.promise().query(insertQueryContagemTag, [novaTag, novaQuantidade, idConsulta]);
        } catch (err) {
            console.error('Erro ao executar o INSERT:', err);
            throw err; 
        }
    }
}

async function selectConsultas() {
    try {
        const [result] = await connection.promise().query(`SELECT * FROM consultas`);
        return result;
    } catch (err) {
        console.error('Erro ao CONSULTAR: ', err);
        throw err; 
    }
}

async function selectContagemPorId(idConsulta) {
    try {
        const [result] = await connection.promise().query('SELECT * FROM contagem_tag WHERE consultas_id_consultas = ?', [idConsulta]);
        return result;
    } catch (err) {
        console.error('Erro ao CONSULTAR: ', err);
        throw err; 
    }
}

async function selectContagem() {
    try {
        const [result] = await connection.promise().query(`SELECT * FROM contagem_tag`);
        return result;
    } catch (err) {
        console.error('Erro ao CONSULTAR: ', err);
        throw err; 
    }
}

module.exports = { selectConsultas, inserirConsultas, inserirContagemTag, selectContagem, selectContagemPorId };
