const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const {repository, inserirConsultas, selectConsultas, selectContagemPorId} = require('./repository');
const database = require("./database");
const PORT = 3003;


app.use(cors())

//as resquisições serão no formato json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//o servidor funcionará na porta 3003
app.listen(PORT, () => {
    console.log(`Funcionando na porta ${PORT}`)
}); 
    
database();
    
app.post('/api/inserir', async(req,res) => {
    const url = req.body.url
   
    try {
        const queryConsulta = await inserirConsultas(url);

        return (res.status(201).json(queryConsulta));

    } catch (error) {
        console.error("Erro ao inserir: ", error)
    }
})

app.get('/api/historico', async(req, res) => {
    
    try {
        const queryHistorico = await selectConsultas();

        return res.status(201).json(queryHistorico);

    } catch (error) {
        console.error("Erro ao carregar historico: ", error)
    }
}) 

app.get('/api/visualizar-consulta/:id', async(req, res) => {
    
    try {
        const queryVisualizar = await selectContagemPorId(req.params.id);

        return res.status(201).json(queryVisualizar);

    } catch (error) {
        console.error("Erro ao carregar contagem da consulta: ", error)
    }
}) 



// app.post('/api/inserir-contagem-tag', async(req,res) => {
    
//     return res.status(201).json(query);
// })


app.get('/', async(req, res) => {
    const query = await repository();
    return res.status(201).json(query);
});

