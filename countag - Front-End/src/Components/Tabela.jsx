import React from "react";
import '../styles/TabelaContagem.css';


function TabelaContagem(
    props
) {

    const dados = props.dados;
    const campoData = props.campoData;
    const url = props.url;
    const data = props.data;

    return (
        <table className="table table-hover bordered tabela">
            <thead>
                <tr> 
                    <th id="textoTitulo"> Contagem de Tags </th>
                </tr>
                <tr> 
                    <th id="textoURL"> URL: </th>
                    <td>{url}</td>
                
                    {campoData && (
                        <>
                            <th id="textoData"> Data: </th>
                            <td>{data}</td>
                        </>
                    )}
                </tr>
                <tr>
                    <th scope="col" id="textoColunaTag">Tags</th>
                    <th scope="col" id="textoColunaQuant">Quantidade</th>
                </tr>
            </thead>
            <tbody>
                
                {dados?.length > 0 && dados?.map((item)  => (

                    <tr key={item.id_contagemTag}>
                        <td>
                            {item.tag}
                        </td>
                        <td>
                            {item.quantidade}
                        </td>
                    </tr>
            
                ))}
            </tbody>
        </table>
    )

}

export default TabelaContagem;