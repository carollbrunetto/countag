const axios = require('axios');
const { JSDOM } = require('jsdom');

async function contaTags(url) {
    try {
        const response = await axios.get(url);
        const html = response.data;
        
        // console.log("html: ", html)
    
        const dom = new JSDOM(html)
        const document = dom.window.document
    
        // console.log("dom:", dom)
        // console.log(dom)
        const tags = document.getElementsByTagName('*')
        const tags2= Array.from(tags)

        // console.log("tags:", tags)
        // console.log("tags2:", tags2)
        
        resultado = {}
    
        for(var i = 0; i < tags2.length; i++) {
            if(resultado[tags2[i].tagName]){
                
                resultado[tags2[i].tagName]++
            
            } else resultado[tags2[i].tagName] = 1
        }
    
        console.log("resultado:", resultado);
        return resultado;

    } catch (error) {

        console.error('Erro ao obter o HTML da URL:', error.message);
        res.status(500).json({ error: 'Erro ao obter o HTML da URL' });
    }
} 

module.exports = contaTags;