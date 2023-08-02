const express = require('express');
const bodyParser = require('body-parser');
const repository = require('./repository');
const inserirContagemTag = require('./repository');
const inserirConsultas = require('./repository');
const database = require("./database");
const cors = require('cors');
const app = express();
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
        
    app.post('/api/inserir-consulta', async(req,res) => {
        const query = await inserirConsultas(req.body.url, req.body.data);
        return res.status(201).json(query);
    })
    
    app.post('/api/inserir-contagem-tag', async(req,res) => {
        const query = await inserirContagemTag(req.body.tag, req.body.quantidade);
        return res.status(201).json(query);
    })
    
    
    
    app.get('/', async(req, res) => {
        const query = await repository();
        return res.status(201).json(query);
    });

