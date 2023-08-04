import React, { useState } from "react";
import axios from 'axios';
import Navbar from '../Components/Navbar';
import TabelaContagem from "../Components/Tabela";
import '../styles/Home.css';
import search from '../icons/search.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMagnifyingGlass } from '@fortawesome/fontawesome-free-solid'

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
      }).catch((error) => {
        console.error('Erro ao enviar formulário:', error);
        setIsLoading(false);
      })
    }

    // fontawesome.library.add(faMagnifyingGlass);


  return (
    <div>
        <Navbar />
        <center>
            <div className="card" id="cartao">
                <div className="card-body" id='#instruçoes'>
                    <p>
                        Bem vindo(a) ao countag!<br/>

                        Algumas instruções: <br/>

                        Para utilizar, basta colar sua URL no campo de pesquisa abaixo. <br/>
                        Lembre-se de colocar URLs válidas no formato "https://seusite.com", sempre iniciando com https. <br/>
                        Na página "Histórico" você pode visualizar a lista de consultas já realizadas e também cada uma individualmente. <br/>
                    </p>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                
                <div className="input-group mb-3"  id="pesquisa">
                    <input 
                        type="url" 
                        className="form-control" 
                        id="inputPesquisa"
                        placeholder="https://google.com" 
                        // aria-label="Recipient's username" 
                        // aria-describedby="button-addon2"
                        value={url} 
                        onChange={(e) => setUrl(e.target.value)}
                        
                    >
                    </input>
                        <span class="material-symbols-outlined" type="submit" id="iconeSearch" onClick={handleSubmit}>search</span>
                        {/* <img src={search}  type="submit" id="button-addon2" onClick={handleSubmit}/> */}
                </div>

            </form>

            {isLoading ? (
                    <p>Carregando...</p>

            ) : (
                    <TabelaContagem campoData={false} dados={dados[0]?.contagemConsulta} url={urlPesquisada}/>
            )}

        </center>
    </div>

  );
}

export default Home;
