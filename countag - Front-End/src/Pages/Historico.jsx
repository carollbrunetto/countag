import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Navbar from "../Components/Navbar";


function Historico() {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:3003/api/historico');
                setDados(response.data);
                console.log(typeof dados)
                // console.log("dados id: ", dados[0].id_consultas)
                // console.log("dados url: ", dados[0].url)
                // console.log("dados data: ", dados[0].data)
                console.log(dados)
            } catch (error) {
                console.error('Erro ao obter dados do backend:', error);
            }
        }

        fetchData();
    }, []);


    return (
        <div>
            <Navbar />

            <h1>Histórico de URLs</h1>

            <table className="table table-hover">
                <thead>
                    <tr> 
                        <th> URLs </th>
                    </tr>
                    <tr>
                        <th scope="col">Data</th>
                        <th scope="col">URL</th>
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
                                    <Link to ='../visualizar-consulta' state={{
                                        id: consulta.id_consultas,
                                        data: consulta.data,
                                        url: consulta.url
                                    }}>Vizualizar</Link>
                                </td>
                            </tr>
                        
                    ))}
                </tbody>
            </table> 
        </div>
    );
}

export default Historico;
