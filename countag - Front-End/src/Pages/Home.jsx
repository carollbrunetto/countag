import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from '../Components/Navbar';
import TabelaContagem from "../Components/Tabela";

function Home() {

    const [url, setUrl] = useState('');
    const [dados, setDados] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    var urlPesquisada = url;

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);
      setDados([])
     

      urlPesquisada = url;
      axios.post('http://localhost:3003/api/inserir', {url})
        .then((response) => {
            if (Array.isArray(response.data)) {
                setDados(response.data);
            } else {
                setDados([response.data]);
            }
            setDados(response.data)
            setIsLoading(false);
            setUrl('');
            console.log(typeof dados)
            console.log("dados: ", response.data)
      }).catch((error) => {
        console.error('Erro ao enviar formulário:', error);
        setIsLoading(false);
      })
    }


  return (
    <div>
        <Navbar />
        <div className="card">
            <div className="card-body">
                Isto é um texto dentro de um card.
            </div>
        </div>

        <form onSubmit={handleSubmit}>

            <div className="input-group mb-3">
                <input 
                    type="url" 
                    className="form-control" 
                    placeholder="https://google.com" 
                    // aria-label="Recipient's username" 
                    // aria-describedby="button-addon2"
                    value={url} 
                    onChange={(e) => setUrl(e.target.value)}
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon2" onClick={handleSubmit}>Botão</button>
                </div>
            </div>

        </form>

        {isLoading ? (
                <p>Carregando...</p>

            ) : (
                <TabelaContagem campoData={false} dados={dados[0].contagemConsulta} url={urlPesquisada}/>
            )}

    </div>
  );
}

export default Home;
