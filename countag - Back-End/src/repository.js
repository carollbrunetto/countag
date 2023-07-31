const connection = require('./connection');

const repository = async () => {
    const [query] = await connection.execute("SELECT * FROM countdb.consultas");
    return query;
}

module.exports = repository;