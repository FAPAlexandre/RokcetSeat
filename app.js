const express = require('express');

const { randomUUID } =  require('crypto')

const app = express();

app.use(express.json())

const products = [];

/**
 
* Post - Inserir um dado
* Get - Consultar um dado
* Put - Alterar um dado
* Delete - Deletar um dado
 **/    
/**
 * Body - Sempre que quiser enviar dados para a aplicação
 * Params - products/ID
 * Query - product?id=1231231312&value=23132123
 **/

    app.post("/products", (request, response) => {
        //nome e preço
        const {name, price} = request.body;
       

        const product = {
            name,
            price,
            id:randomUUID()
            
        }

        products.push(product);

        return response.json(product);

        console.log(body)

    });


app.listen(4002, () => console.log("servidor está rodando na porta 4002"))


