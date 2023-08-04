import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import TabelaContagem from '../Components/Tabela';
import Navbar from '../Components/Navbar';

function VisualizarConsulta() {
    const location = useLocation();
    const {id, data, url} = location.state;
    const [dados, setDados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const id = props.id;
    // const data = props.data;
    // const url = props.url;

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:3003/api/visualizar-consulta/${id}`);
                console.log(response.data)
                setDados(response.data);
                setIsLoading(false);
                console.log(typeof response.data)
                // console.log("dados id: ", dados[0].id_consultas)
                // console.log("dados url: ", dados[0].url)
                // console.log("dados data: ", dados[0].data)
                console.log('dados: ', dados)
            } catch (error) {
                console.error('Erro ao obter dados do backend:', error);
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

  
    return (
        <>
        <Navbar />

        {isLoading ? (
            <p>Carregando...</p>
        ): (
            <TabelaContagem  campoData={true} dados={dados} url={url} data={data}/>
        )}
        </>
    )
}

export default VisualizarConsulta;