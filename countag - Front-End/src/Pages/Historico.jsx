import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Navbar from "../Components/Navbar";
import '../styles/Historico.css';

function Historico() {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:3003/api/historico');
                setDados(response.data);
            } catch (error) {
                console.error('Erro ao obter dados do backend:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <Navbar />

            <h2 id="titulo">Histórico de URLs</h2>

            <table className="table table-hover">
                <thead>
                    <tr> 
                        <th id="textoTitulo"> URLs </th>
                    </tr>
                    <tr>
                        <th scope="col" id="textoData">Data</th>
                        <th scope="col" id="textoURL">URL</th>
                    </tr>
                </thead>
                <tbody>
                    {dados?.length > 0 && dados?.map((consulta) => (
                        
                        <tr key={consulta.id_consultas}>
                            <td>
                                {consulta.data}
                            </td>
                            <td>
                                {consulta.url}
                            </td>
                            <td>
                                <button id="botao">
                                    <Link id="link" to ='../visualizar-consulta' state={{
                                        id: consulta.id_consultas,
                                        data: consulta.data,
                                        url: consulta.url
                                    }}>Visualizar</Link>
                                </button>
                            </td>
                        </tr>
                        
                    ))}
                </tbody>
            </table> 
        </div>
    );
}

export default Historico;
