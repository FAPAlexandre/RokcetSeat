const http = require('http');

http.createServer((request, response) => {

    response.writeHead(200, "content-type", "text/plain");

    if(request.url === '/produto') {
        response.end(JSON.stringify({
            message: "Rota de produtos"
        }))
    }

    if(request.url === '/usuarios') {
        response.end(JSON.stringify({
            message: "Rota de usuários"
        }))
    }

    response.end(JSON.stringify({
        message: "Qualquer outra rota"
    }))

}).listen(4001, () => console.log("Servidor rodando na porta 4001"))

