import React, { useState, useEffect } from "react";

function TabelaContagem(
    props
) {

    const dados = props.dados;
    const campoData = props.campoData;
    const url = props.url;
    const data = props.data;

    console.log("dados tabela: ", dados)
    console.log("campo data: ", campoData)
    console.log("url tabela: ", url)
    console.log("data tabela: ", data)

    return (

        <table className="table table-hover">
            <thead>
                <tr> 
                    <th> Contagem de Tags </th>
                </tr>
                <tr> 
                    <th> URL: </th>
                    <td>{url}</td>
                
                    {campoData && (
                        <>
                            <th> Data: </th>
                            <td>{data}</td>
                        </>
                    )}
                </tr>
                <tr>
                    <th scope="col">Tags</th>
                    <th scope="col">Quantidade</th>
                </tr>
            </thead>
            <tbody>
                
                {dados.length > 0 && dados?.map((item)  => (

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