const connection = require('./connection');
const contaTags = require('./tagCounter');

async function inserirConsultas(url) {
    const novaURL = url;
    const novaData = new Date();
    let resultado = [];

    try {

        resultado = await contaTags(url);

    } catch (err) {

        console.error('URL inválida ou indisponível: ', err);
        return ('URL inválida ou indisponível');

    }

    const insertQueryConsultas = 'INSERT INTO consultas (url, data) VALUES (?, ?)';

    try {
        const [result] = await connection.promise().query(insertQueryConsultas, [novaURL, novaData]);
        console.log('Nova consulta inserida com sucesso!');
        console.log('ID da nova consulta:', result.insertId);

        await inserirContagemTag(result.insertId, resultado);

        return { consultas: await selectConsultas(), contagem: await selectContagem() };
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
            console.log('Nova contagem inserida com sucesso!');
            console.log('ID da nova contagem:', result.insertId);
        } catch (err) {
            console.error('Erro ao executar o INSERT:', err);
            throw err; 
        }
    }
}

async function selectConsultas() {
    try {
        const [result] = await connection.promise().query(`SELECT * FROM consultas`);
        console.log(result);
        return result;
    } catch (err) {
        console.error('Erro ao CONSULTAR: ', err);
        throw err; 
    }
}

async function selectContagem() {
    try {
        const [result] = await connection.promise().query(`SELECT * FROM contagem_tag`);
        console.log(result);
        return result;
    } catch (err) {
        console.error('Erro ao CONSULTAR: ', err);
        throw err; 
    }
}

module.exports = { selectConsultas, inserirConsultas, inserirContagemTag, selectContagem };
