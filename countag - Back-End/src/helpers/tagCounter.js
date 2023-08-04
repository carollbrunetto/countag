const axios = require('axios');
const { JSDOM } = require('jsdom');

async function contaTags(url) {
    try {
        const response = await axios.get(url);
        const html = response.data;
    
        const dom = new JSDOM(html)
        const document = dom.window.document
    
        const tagsDocument = document.getElementsByTagName('*')
        const tagsArray= Array.from(tagsDocument)

        resultado = {}
    
        for(var i = 0; i < tagsArray.length; i++) {
            if(resultado[tagsArray[i].tagName]){
                
                resultado[tagsArray[i].tagName]++
            
            } else resultado[tagsArray[i].tagName] = 1
        }

        return resultado;

    } catch (error) {

        console.error('Erro ao obter o HTML da URL:', error.message);
        res.status(500).json({ error: 'Erro ao obter o HTML da URL' });
    }
} 

module.exports = contaTags;