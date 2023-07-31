const express = require('express');
const repository = require('./repository');
const app = express();
const PORT = 3003;


//as resquisições serão no formato json
app.use(express.json());


//o servidor funcionará na porta 3003
app.listen(3003, () => {
    console.log(`Funcionando na porta ${PORT}`)
});


app.get('/', async(req, res) => {
    const query = await repository();
    return res.status(201).json(query);
});