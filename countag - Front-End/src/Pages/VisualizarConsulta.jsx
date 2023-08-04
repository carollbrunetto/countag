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


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:3003/api/visualizar-consulta/${id}`);
                setDados(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Erro ao obter dados do backend:', error);
                setIsLoading(false);
            }
        }

        fetchData();
    }, [id]);

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