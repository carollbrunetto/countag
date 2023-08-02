import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [url, setUrl] = useState('');
  const [dat, setDat] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3003/api/inserir-consulta', {url, dat})
      .then((response) => {
        console.log(response.data)
    }).catch((error) => {
      console.error('Erro ao enviar formulário:', error)
    })
  }

  return (
    <div className="teste">
      <h1>Formulário de Cadastro</h1>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="url" >URL:</label>
        <input type="text" id="url" value={url} onChange={(e) => setUrl(e.target.value)}  />
        <label htmlFor="data">Data:</label>
        <input type="date" id="data" value={dat} onChange={(e) => setDat(e.target.value)}  />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}                 

export default App;
